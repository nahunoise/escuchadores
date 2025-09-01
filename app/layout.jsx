
import "./globals.css";
import { Rubik } from "next/font/google";
import Navbar from "../components/Navbar";


const rubik = Rubik({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"], // ajusta los pesos que realmente uses
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        
        <header className="w-full bg-white">
          <nav className="relative flex items-center">
            {/* Logo a la izquierda */}
            <div className="flex">
              <img
                src="logo_escuchadores_desktop.svg"
                alt="PrintForge Logo"
                className="w-[400px] h-auto hidden md:block"
              />
              <img
                src="logo_escuchadores_desktop.svg"
                alt="PrintForge Logo"
                className="w-[80px] h-auto block md:hidden"
              />
            </div>

            {/* Menú centrado */}
            <ul className="absolute left-1/2 -translate-x-1/2 flex gap-0 text-gray-700 font-medium">
              <li><a href="/">Inicio</a></li>
              <li><a href="/manifiesto">Manifiesto</a></li>
              <li><a href="/escuchadores">Escuchadores</a></li>
              <li><a href="/pelicula">Película</a></li>
              <li><a href="/servicios">Servicios</a></li>
              <li><a href="/contacto">Contacto</a></li>
            </ul>
          </nav>
        </header>
        {children}
      </body>

      
    </html>
  );
}