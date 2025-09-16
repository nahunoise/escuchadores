# scrape_bcorps_es.py
import time
import itertools
from urllib.parse import urljoin, urlparse, parse_qs
import requests
from bs4 import BeautifulSoup
import pandas as pd
BASE = "https://www.bcorpspain.es/directorio-b-corps"
HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
                  "AppleWebKit/537.36 (KHTML, like Gecko) "
                  "Chrome/124.0 Safari/537.36"
}
def get_html(url: str) -> str:
    r = requests.get(url, headers=HEADERS, timeout=30)
    r.raise_for_status()
    return r.text
def find_next_page(html: str) -> str | None:
    soup = BeautifulSoup(html, "html.parser")
    # El botón suele llamarse “Publicaciones más antiguas”
    for a in soup.find_all("a"):
        if a.get_text(strip=True).lower().startswith("publicaciones más antiguas"):
            return urljoin(BASE, a.get("href"))
    return None
def parse_page(html: str) -> list[tuple[str, str]]:
    soup = BeautifulSoup(html, "html.parser")
    rows: list[tuple[str, str]] = []
    # Cada tarjeta de empresa suele tener un título H2/H3 (nombre)
    # y arriba enlaces a categorías (sectores) con /category/ en el href.
    # Recorremos cada título y miramos a su alrededor para capturar los sectores.
    titles = soup.find_all(["h2", "h3"])
    for h in titles:
        name = h.get_text(strip=True)
        # Saltos si el título no parece una empresa
        if not name or "Encuentra una B Corp" in name or "Mostrando" in name:
            continue
        # Recolectar sectores cercanos (enlaces con /category/)
        sectors: list[str] = []
        # Buscamos enlaces de categoría “cerca” del título, recorriendo vecinos previos
        node = h
        steps = 0
        while steps < 25 and node:
            node = node.find_previous()
            steps += 1
            if not node:
                break
            if getattr(node, "name", None) == "a":
                href = node.get("href") or ""
                if "/category/" in href:
                    txt = node.get_text(strip=True)
                    if txt and txt not in sectors:
                        sectors.append(txt)
        # Fallback: si no encontramos sectores por proximidad, buscamos en la “tarjeta”
        # detectando un <a href="/category/..."> cuyo siguiente título sea el actual
        if not sectors:
            for a in soup.select("a[href*='/category/']"):
                nxt = a.find_next(lambda t: t.name in ["h2", "h3"])
                if nxt and nxt.get_text(strip=True) == name:
                    txt = a.get_text(strip=True)
                    if txt and txt not in sectors:
                        sectors.append(txt)
        # Si aún no hay sectores, registramos uno genérico
        if not sectors:
            sectors = ["(Sin sector detectado)"]
        # Emitimos una fila por cada sector asociado
        for sec in sectors:
            rows.append((sec, name))
    # Limpiar posibles cabeceras o ruido
    cleaned = []
    for sec, nm in rows:
        if nm.strip() and not nm.lower().startswith("encuentra una b corp"):
            cleaned.append((sec.strip(), nm.strip()))
    return cleaned
def crawl_all(start_url: str = BASE, sleep_s: float = 0.7) -> list[tuple[str, str]]:
    url = start_url
    seen_offsets = set()
    output: list[tuple[str, str]] = []
    while url:
        html = get_html(url)
        output.extend(parse_page(html))
        # Evitar bucles por offset
        parsed = urlparse(url)
        off = parse_qs(parsed.query).get("offset", ["0"])[0]
        if off in seen_offsets:
            break
        seen_offsets.add(off)
        nxt = find_next_page(html)
        if not nxt:
            break
        url = nxt
        time.sleep(sleep_s)  # pausa cortita y respetuosa
    # De-duplicar filas exactas (sector, empresa)
    output = list(dict.fromkeys(output))
    return output
def main():
    pairs = crawl_all()
    # Ordenar por Sector, luego Empresa
    pairs.sort(key=lambda x: (x[0].lower(), x[1].lower()))
    df = pd.DataFrame(pairs, columns=["Sector", "Empresa"])
    # Sugerencia: si prefieres una única fila por empresa y columnas multivalor,
    # puedes agrupar; pero por especificación dejamos una fila por sector-empresa.
    out = "bcorps_es.xlsx"
    df.to_excel(out, index=False)
    print(f"OK -> {out} ({len(df)} filas)")
if __name__ == "__main__":
    main()