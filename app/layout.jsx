import "./globals.css";
import { Rubik } from "next/font/google";


const rubik = Rubik({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"], // ajusta los pesos que realmente uses
});

export default function RootLayout({ children}) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        
        <header className="w-full bg-white">
          <nav className="relative flex items-center gap-20px">
            {/* Logo a la izquierda */}
            <div className="flex">
              
              <img
                src="logo_escuchadores_desktop.svg"
                alt="PrintForge Logo"
                href="/"
               
                className="w-[100px] h-auto hidden md:block"
              />
              <img
                src="logo_escuchadores_desktop.svg"
                alt="PrintForge Logo"
                className="w-[80px] h-auto block md:hidden"
              />
            </div>

            {/* Menú centrado */}
            <nav>
    <ul className="flex items-center space-x-20 list-none p-0 m-0 tracking-wide">
    <li><a href="/" className="hover:underline">Inicio</a></li>
    <li><a href="/manifiesto" className="hover:underline">Ser</a></li>
    <li><a href="/servicios" className="hover:underline">Hacer</a></li>
    <li><a href="/contacto" className="hover:underline">Contacto</a></li>
  </ul>
</nav>
          </nav>
        </header>
        {children}
      </body>

      
    </html>
  );
}