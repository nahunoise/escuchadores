import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section
        className="relative h-[50vh] flex items-center justify-center text-center"
        
        style={{
          backgroundImage: "url('/tu-imagen.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          
        }}
      >
        {/* Overlay oscuro para contraste */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 max-w-2xl px-4">
          <h3 className="text-lg font-light text-[#FFFFFF]">INAUGURACIÓN</h3>
          <h1 className="text-3xl md:text-6xl font-extrabold mt-2 text-[#FFFFFF]">
            PRIMER ESCUCHADOR EN EL PERÚ
          </h1>
          <h3 className="text-xl md:text-2xl font-medium mt-2 text-[#FFFFFF]">
            PARQUE NACIONAL TINGO MARÍA
          </h3>

          {/* Botón negro con texto blanco que navega a una ruta interna */}
          <Link
            href="/escuchadores"
            className="btn-primary mt-10 inline-block px-9 py-3 text-[#FFFFFF]"
          >
            VISÍTALO
          </Link>
        </div>
      </section>

      {/* Sección texto */}
      <section className="px-6 py-12 max-w-4xl mx-auto text-left">
        <p className="text-sm tracking-wide uppercase text-gray-600">
          TODOS SOMOS ESCUCHADORES
        </p>
        <h2 className="text-2xl md:text-3xl font-bold mt-2">
          ESCUCHA LOS SONIDOS DE NUESTRA NATURALEZA PARA PROTEGERLOS
        </h2>
        <p className="mt-4 text-gray-700">
          Como hay miradores, también debería existir escuchadores para contemplar y proteger nuestros paisajes sonoros
        </p>

        {/* Spotify botón/ícono */}
        <div className="mt-6">
          <a
            href="https://open.spotify.com/playlist/4FZgnX88YC2oLipzEh4FpY?si=JSHHFiAzRhywgR1ZZ8Strg"
            className="inline-flex items-center gap-2 font-medium hover:opacity-75"
          >
            <img src="/spotify-icon.svg" alt="Spotify" className="w-6 h-6" />
            Escuchar en Spotify
          </a>
        </div>
      </section>

      {/* Grid de imágenes */}
      <section className="px-10 py-12 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-1">
          <img src="/foto3.png" alt="foto película" className="rounded-lg w-full h-auto" />
        </div>
      </section>

      {/* Sección final */}
      <section className="px-6 py-12 max-w-4xl mx-auto text-left">
        <h2 className="text-2xl md:text-3xl font-bold">
          LA IMPORTANCIA DE LA CONSERVACIÓN DEL SONIDO
        </h2>

        <div className="mt-6 space-y-4 leading-relaxed">
          <p>Urge una forma más compasiva de relacionarnos con nuestro entorno.</p>
          <p>Ser un escuchador es ser una persona dispuesta a tomar atención de cómo suenan nuestros entornos naturales, las vidas que lo habitan y los distintos fenómenos que ocurren en él.</p>
          <p>Ser un escuchador, significa tener compasión por los otros seres vivos y permitirnos conectar más allá de los paisajes visuales y empezar a encontrar belleza en el paisaje sonoro.</p>
          <p>Ser un escuchador es una forma de proteger lo que hace que sigamos en este planeta co-existiendo con otros seres vivos y garantiza nuestra existencia.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-200 px-6 py-6 flex flex-col items-center text-center md:flex-row md:justify-between">
        <p className="text-xs font-medium text-gray-800">
          PROYECTO PRODUCIDO Y REALIZADO POR <br />
          <span className="font-bold">NAHUN SALDAÑA MACEDO</span> <br />
          2025 COPYLEFT - PIRATE Y DIFUNDE
        </p>
        <img src="logo_escuchadores_desktop.svg" alt="Logo" className="w-16 mt-4 md:mt-0" />
      </footer>
    </main>
  );
}
