import "./globals.css"
import { Rubik } from "next/font/google"
import CookieBanner from "../../components/cookieBanner" 
import { getDictionary } from "../../dictionaries"

const rubik = Rubik({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
})

// Nota: Para los metadatos dinámicos (traducir el título), 
// Next.js usa generateMetadata, pero por ahora mantengamos el estático.

export default async function RootLayout({ children, params }) {
  // 1. Obtenemos el idioma de los parámetros
  const { lang } = await params;
  // 2. Cargamos el diccionario
  const dict = await getDictionary(lang);

  return (
    <html lang={lang}>
      <body className={`${rubik.className} bg-[#EDF0EA]`}>
        <header className="w-full">
          <nav className="relative flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
            {/* Logo */}
            <div className="flex">
              <a href={`/${lang}`}>
                <img
                  src="/logo_escuchadores_desktop.svg"
                  alt="Escuchadores Logo"
                  className="w-[80px] h-auto hidden md:block"
                />
                <img
                  src="/logo_escuchadores_desktop.svg"
                  alt="Escuchadores Logo"
                  className="w-[30px] h-auto block md:hidden"
                />
              </a>
            </div>

            {/* Menú Traducido */}
            <nav className="absolute left-1/2 transform -translate-x-1/2">
              <ul className="flex items-center space-x-4 list-none p-0 m-0 tracking-wide uppercase text-xs md:text-sm">
                <li>
                  <a href={`/${lang}`} className="hover:underline transition-all duration-200">
                    {dict.nav.inicio}
                  </a>
                </li>
                <li>
                  <a href={`/${lang}/manifiesto`} className="hover:underline transition-all duration-200">
                    {dict.nav.ser}
                  </a>
                </li>
                <li>
                  <a href={`/${lang}/servicios`} className="hover:underline transition-all duration-200">
                    {dict.nav.hacer}
                  </a>
                </li>
                <li>
                  <a href={`/${lang}/contacto`} className="hover:underline transition-all duration-200">
                    {dict.nav.contacto}
                  </a>
                </li>
                {/* Switcher de Idioma */}
                <li className="ml-4 border-l border-gray-300 pl-4">
                  <a 
                    href={lang === 'es' ? '/en' : '/es'} 
                    className="font-bold text-gray-800 hover:text-black"
                  >
                    {lang === 'es' ? 'EN' : 'ES'}
                  </a>
                </li>
              </ul>
            </nav>

            <div className="w-[100px] hidden md:block"></div>
            <div className="w-[80px] block md:hidden"></div>
          </nav>
        </header>

        {children}

        <CookieBanner />

        <footer className="text-center py-12 text-sm text-gray-500"> 
          <p>© {new Date().getFullYear()} Escuchadores. {dict.footer.credits}</p>
          <p className="text-sm text-gray-700 mt-2">www.instagram.com/escuchadores</p>
          
          <div className="flex justify-center my-6">
            <img
              src="/logo_escuchadores_desktop.svg"
              alt="Logo Escuchadores"
              className="w-20 h-auto"
            />
          </div>
        </footer>
      </body>
    </html>
  )
}