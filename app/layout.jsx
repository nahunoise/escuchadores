import "./globals.css"
import { Rubik } from "next/font/google"
const siteUrl = "https://www.escuchadores.com"
const titleDefault = "Escuchadores — Todos somos escuchadores"
const description =
  "Escuchadores convierte paisajes sonoros naturales en activos: Espacios de escucha protegidos que fomentan la conservación y generan valor ecológico y económico"

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: titleDefault,
    template: "%s — Escuchadores",
  },
  description,
  openGraph: {
    type: "website",
    url: siteUrl,
    title: titleDefault,
    description,
    siteName: "Escuchadores",
    locale: "es_PE",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Escuchadores — Parque Nacional Tingo María",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: titleDefault,
    description,
    images: ["/og.jpg"],
  },

   icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png", // opcional, si tienes una versión para iOS
  },

  robots: {
    index: true,
    follow: true,
  },


}

const rubik = Rubik({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"], // ajusta según lo que uses
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     <body className={`${rubik.className} bg-[#EDF0EA]`}>
        <header className="w-full">
          <nav className="relative flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
            {/* Logo a la izquierda */}
            <div className="flex">
              <img
                src="logo_escuchadores_desktop.svg"
                alt="PrintForge Logo"
                href="/"
                className="w-[80px] h-auto hidden md:block"
              />
              <img
                src="logo_escuchadores_desktop.svg"
                alt="PrintForge Logo"
                className="w-[30px] h-auto block md:hidden"
              />
            </div>

            <nav className="absolute left-1/2 transform -translate-x-1/2">
              <ul className="flex items-center space-x-4 list-none p-0 m-0 tracking-wide">
                <li>
                  <a href="/" className="hover:underline transition-all duration-200">
                    Inicio
                  </a>
                </li>
                <li>
                  <a href="/manifiesto" className="hover:underline transition-all duration-200">
                    Ser
                  </a>
                </li>
                <li>
                  <a href="/servicios" className="hover:underline transition-all duration-200">
                    Hacer
                  </a>
                </li>
                <li>
                  <a href="/contacto" className="hover:underline transition-all duration-200">
                    Contacto
                  </a>
                </li>
              </ul>
            </nav>

            <div className="w-[100px] hidden md:block"></div>
            <div className="w-[80px] block md:hidden"></div>
          </nav>
        </header>
        {children}
         <footer className="text-center py-8 text-sm text-gray-500"> 
          
  © {new Date().getFullYear()} Escuchadores. Proyecto producido y realizado por Nahun Saldaña Macedo www.naun.xyz 
  <p className="text-sm text-gray-700">www.instagram.com/escuchadores</p>
  
  <div className="flex justify-center my-6">
  <img
    src="logo_escuchadores_desktop.svg"
    alt="Logo Escuchadores"
    className="w-20 h-auto"
  />
</div>
</footer>
      </body>
     
    </html>
    
  )
}


