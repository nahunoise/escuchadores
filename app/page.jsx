export default function Home() {
  return (
    <main className="flex flex-col bg-[#EDF0EA]">
      {/* Hero Section */}
      <section
        className="relative h-[80vh] mb-16 flex items-center justify-start"
        style={{
          backgroundImage: "url('/tu-imagen.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}> 
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <h4 className="text-white text-sm md:text-base font-light mb-2">INAUGURACIÓN</h4>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white mb-4">
              EL PRIMER ESCUCHADOR EN EL PERÚ
            </h1>
            <h4 className="text-white text-sm md:text-base font-light mb-8">PARQUE NACIONAL TINGO MARÍA</h4>
            <a
              href="#empezar"
              className="inline-flex items-center justify-center rounded-lg border border-[#1E293B] bg-white px-12 h-9 text-large font-medium text-[#1E293B]
                         hover:border-transparent hover:bg-[#1E293B] hover:text-white 
                         active:bg-[#1E293B]
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1E293B] focus-visible:ring-offset-2
                         disabled:opacity-30 disabled:cursor-not-allowed
                         transition-colors duration-200 min-w-[250px]">
              EMPEZAR
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 mb-16">
        <div  className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Sección texto */}
          <section id="empezar"  className="space-y-6">
            <p className="text-lg leading-relaxed text-gray-700">
              Así como hay miradores también deberían existir escuchadores para proteger lo más valioso que tenemos:{" "}
              <strong>La vida</strong>
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">ESCUCHAR PARA PROTEGER</h2>
            <p className="text-base leading-relaxed text-gray-600">
              Esta experiencia busca mostrar nuestra conexión con la naturaleza a través de la escucha profunda, usando tres artefactos sonoros de distintos tamaños y propósitos.</p>
            <li> <b>La oreja más grande</b> sirve para escuchar los sonidos geofísicos más grandes, como sonidos de rios, cataratas, vientos, 
             árboles en movimiento, mamiferos con vocalización de largo alcance. Esta medida nos acerca a eso que no podemos presenciar tan de cerca.</li> 
                    <li> <b>La oreja mediana</b> sirve para contemplar los sonidos de mamiferos, aves, voces y 
                    todo lo que se encuentre a mediana alcance entre 2 a 3 km según la fuente sonora</li> 
                     <li> <b>La oreja pequeña</b> sirve para contemplar los sonidos más pequeños insectos, susurros, todo lo que se encuentra alrededor del escuchador pero más cerca</li> 
                
<p>Creemos que conectarnos con la naturaleza ayuda a construir un mundo mejor, y la escucha profunda es una buena forma de empezar.
Necesitamos comunidades que se escuchen entre sí y a su entorno para ser más resilientes y vivir en armonía con el planeta.
El primer artefacto de escucha se instaló en el Parque Nacional Tingo María, uno de los más importantes del Perú.</p>

            
          </section>

          {/* Grid de imágenes */}
          <section className="space-y-6">
            {/* Imagen fluida */}
            <img src="/foto3.png" alt="foto película" className="w-full h-auto rounded-lg shadow-lg" />

            {/* YouTube responsivo (16:9) */}
            <div className="relative w-full rounded-lg overflow-hidden shadow-lg" style={{ paddingTop: "56.25%" }}>
              <iframe
                src="https://www.youtube.com/embed/kFy11JjJh0Q?si=QWO6ZOyqL8SrLhXd"
                className="absolute inset-0 h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                title="Video YouTube"
              />
            </div>
          </section>
        </div>
      </div>

      <section className="px-6 lg:px-8 py-16 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold leading-tight text-gray-900 mb-8">
          <span className="block">SI HAY VIDA, HAY SONIDOS.</span>
          <span className="block">LOS SONIDOS NOS ATRAVIESAN Y TRANSFORMAN</span>
          <span className="block text-lg md:text-2xl font-normal text-gray-600 mt-4">
            Para cuidarnos primero tenemos que escucharnos, no hay  empatia posible sin una escucha honesta y lo mismo pasa con todos los seres que habitamos en este planeta
          </span>
        </h2>
      </section>

      <div className="w-full h-[50vh] md:h-[70vh] mb-16">
        <img src="/cenital_escuchador.png" alt="Vista cenital del escuchador" className="w-full h-full object-cover" />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">EXPERIENCIA FÍSICA Y REAL</h2>
            <p className="text-sm leading-relaxed text-gray-600">
              Todo lo que tiene vida vibra. El escuchador está compuesto por tres orejas que tienen diferentes
              dimensiones y propósitos. Con la más pequeñas podrás reconocer los sonidos de los insectos más pequeños.
              Con la mediana escucharás motores y voces humanas. Con la grande sentirás la fuerza del río, mamíferos y
              aves.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">ESPACIO MEDITATIVO</h2>
            <p className="text-sm leading-relaxed text-gray-600">
              El espacio se presenta como un baño de sonido para volver a calibrar nuestra percepción sonora. Respira 5
              veces profundamente, escucha tu respiración y conecta con los sonidos que aparecen en cada oreja.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">FRAGILIDAD SONORA</h2>
            <p className="text-sm leading-relaxed text-gray-600">
              Urge una forma más compasiva de relacionarnos con nuestro entorno. Ser un escuchador significa tener
              compasión y encontrar belleza en el paisaje sonoro.
            </p>
          </section>
        </div>
      </div>

      <section className="max-w-6xl mx-auto px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 gap-4">
          <img src="/fondo_escuchadores.png" alt="Fondo escuchadores" className="rounded-lg w-full h-auto shadow-lg" />
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <section className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">UNA CAMINATA SONORA</h2>

            <p className="text-base leading-relaxed text-gray-600">
              El escuchador da la bienvenida a una de las rutas más importantes del Parque Nacional Tingo María con un
              paisaje sonoro increíble. La ruta empieza en el escuchador con un lavado de escucha, intentando
              identificar todos los sonidos que aparecen en la naturaleza para luego empezar la caminata y encontrar. La
              ruta empieza con una de las quebradas al lado derecho que desemboca en el Huallaga. Te recomendamos que
              camines lentamente y guardes silencio. Obviamente evitar llevar parlantes o speakers, y si ves que alguien
              lo lleva invítalo a que lo apague y escuche los sonidos.
            </p>

            <div className="space-y-3">
              <div>
                <strong className="text-gray-900">Ejercicio 1:</strong>
                <span className="text-gray-600">
                  {" "}
                  Intenta reconocer los sonidos más permanentes, los que siempre se repiten.
                </span>
              </div>
              <div>
                <strong className="text-gray-900">Ejercicio 2:</strong>
                <span className="text-gray-600">
                  {" "}
                  Identifica los sonidos que no logras reconocer su fuente, si es un insecto ave o animal.
                </span>
              </div>
              <div>
                <strong className="text-gray-900">Ejercicio 3:</strong>
                <span className="text-gray-600">
                  {" "}
                  Imagina cómo se ven esos sonidos, cómo son esos animales, insectos o plantas.
                </span>
              </div>
            </div>
          </section>

          <section className="flex justify-center">
            <div className="w-full max-w-sm">
              <iframe
                src="https://www.instagram.com/reel/DNgQ56nRll5/embed"
                width="100%"
                height="550"
                className="rounded-lg shadow-lg"
                allowFullScreen
              />
            </div>
          </section>
        </div>
      </div>

      <section className="max-w-6xl mx-auto px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Columna 1: Texto */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">CÓMO LLEGAR</h2>
            <p className="text-base leading-relaxed text-gray-600">
              Tingo María se encuentra conectada por la carretera central y un aeropuerto. Llegar a Tingo María por
              cualquier medio es una experiencia fabulosa, ya que estamos hablando de la entrada de la selva. Una vez en
              Tingo María, puedes encontrar diferentes formas de llegar hasta el tercer sector donde se encuentra la
              catarata más próxima Gloriapata en el Parque Nacional Tingo María.
            </p>
          </div>

          {/* Columna 2: Mapa */}
          <div className="w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9573.527889166904!2d-75.97629829168054!3d-9.420395974162815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91a645c9a6f33063%3A0x1e7fc83b831556e0!2sTingo%20Mar%C3%ADa%20-%20Puesto%20de%20Control%20y%20Vigilancia%203%20de%20Mayo%20-%20Sernanp%20National%20Park!5e1!3m2!1sgl!2ses!4v1757531279840!5m2!1sgl!2ses"
              className="w-full h-[400px] rounded-xl shadow-lg"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 mb-16 text-center">
        <a
          href="https://open.spotify.com/playlist/4FZgnX88YC2oLipzEh4FpY?si=JSHHFiAzRhywgR1ZZ8Strg"
          className="inline-flex items-center gap-3 px-6 py-3 bg-[#EDF0EA] text-white rounded-lg font-medium hover:bg-[#EDF0EA] transition-colors duration-200"
        >
          <img src="/spotify-icon.svg" alt="Spotify" className="w-6 h-6" />
          Escucha la playlist
        </a>
      </div>

      <footer className="bg-gray-100 px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
            <div>
              <p className="text-sm text-gray-700 leading-relaxed">
                Proyecto producido y realizado por <br />
                <span className="font-bold text-gray-900">Nahun Saldaña Macedo</span> <br />
                2025 Copyleft - Piratea y difunde
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-700">www.instagram.com/escuchadores</p>
              <p className="text-sm text-gray-700">nahunoise@gmail.com</p>
            </div>
            <div className="flex justify-center md:justify-end">
              <img src="logo_escuchadores_desktop.svg" alt="Logo Escuchadores" className="w-20 h-auto" />
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
