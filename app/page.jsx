export default function Home() {
  return (
    <main className="flex flex-col bg-[#EDF0EA]">
      {/* Hero Section */}

<section className="relative h-[80vh] mb-16 flex items-center justify-start overflow-hidden bg-black">
  <div className="absolute inset-0 overflow-hidden">
    <iframe
      src="https://www.youtube.com/embed/bZGUFO1iIcI?autoplay=1&mute=1&loop=1&playlist=bZGUFO1iIcI&controls=0&showinfo=0&modestbranding=1"
      title="Video background"
      frameBorder="0"
      allow="autoplay; fullscreen"
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100vw',
        height: 'calc(100vw * 9 / 16)',
        minHeight: '100vh',
        minWidth: '177.78vh', // asegura cobertura horizontal en pantallas altas
      }}
    />
  </div>

  <div className="absolute inset-0 bg-black/40" />
  <div className="relative z-10 mx-auto w-full max-w-6xl px-6 lg:px-8 text-white">
    <h4 className="text-sm md:text-base font-light mb-2">
      TODOS SOMOS ESCUCHADORES
    </h4>
    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4">
      ESCUCHAR PARA PROTEGERNOS
    </h1>
    <h4 className="text-sm md:text-base font-light mb-8">
      Así como existen miradores, deben existir escuchadores; el primero se encuentra en proceso de desintegración en el Parque Nacional Tingo María. 
    </h4>
    <a
      href="#empezar"
      className="inline-flex items-center justify-center rounded-lg border border-[#1E293B] bg-white px-12 h-9 text-large font-medium text-[#1E293B]
                 hover:border-transparent hover:bg-[#1E293B] hover:text-white 
                 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1E293B] focus-visible:ring-offset-2
                 transition-colors duration-200 min-w-[250px]"
    >
      DESCUBRIR
    </a>
  </div>
</section>




      <div className="max-w-6xl mx-auto px-6 lg:px-8 mb-16">
        <div  className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Sección texto */}
          <section id="empezar"  className="space-y-6">
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">LA PROTECCIÓN DE PAISAJES SONOROS DESDE LA ESCUCHA</h2>
            <p className="text-base leading-relaxed text-gray-600"> 
              Los cambios en el paisaje sonoro pueden indicar alteraciones en el entorno, como la pérdida de biodiversidad o la presencia de amenazas ambientales. 
              Ahora con la ayuda de la tecnología, podemos registrar y analizar estos sonidos para monitorear la salud de los ecosistemas a lo largo del tiempo.
            </p>
            <p className="text-base leading-relaxed text-gray-600"> Nuestro ultimo proyecto es el diseño y construcción del primer escuchador en el Parque Nacional Tingo María, Perú. 
              Está compuesto por tres "orejas" de diferentes tamaños que permiten escuchadr distintos tipos de rangos sonoros de la naturaleza.
            </p>

            <li> <b>La oreja más grande</b> diseñada para escuchar los sonidos geofísicos más grandes, como sonidos de rios, cataratas, vientos, 
             árboles en movimiento, mamiferos con vocalización de largo alcance </li> 
             
    <div className="mt-4">
      <iframe
        style={{ border: 0, width: "100%", height: "120px" }}
        src="https://bandcamp.com/EmbeddedPlayer/album=764466561/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=182144867/transparent=true/"
        seamless
        className="rounded-lg shadow-lg"
      />
    </div>






                    <li> <b>La oreja mediana</b> útil para contemplar los vocalización de mamiferos, aves, sonidos de corto alcance como voces humanas y 
                    todo lo que se encuentre entre 2 a 3 km según la fuente sonora</li> 

                    <div className="mt-4">
      <iframe
        style={{ border: 0, width: "100%", height: "120px" }}
        src="https://bandcamp.com/EmbeddedPlayer/album=764466561/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=4171084743/transparent=true/"
        seamless
        className="rounded-lg shadow-lg"
      />
    </div>


                     <li> <b>La oreja pequeña</b> sirve para contemplar los sonidos más pequeños y granulares como insectos, susurros provocados por el viento, todo lo que se encuentra alrededor del punto de escucha dando la sensación de amplificación </li> 

    <div className="mt-4">
      <iframe
        style={{ border: 0, width: "100%", height: "120px" }}
        src="https://bandcamp.com/EmbeddedPlayer/album=764466561/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=3376537549/transparent=true/"
        seamless
        className="rounded-lg shadow-lg"
      />
    </div>



            
          </section>

          {/* Grid de imágenes */}
          <section className="space-y-6">
            {/* Imagen fluida */}
            <img src="/foto3.png" alt="foto película" className="w-full h-auto rounded-lg shadow-lg" />

            {/* YouTube responsivo (16:9) */}
            <div className="relative w-full rounded-lg overflow-hidden shadow-lg" style={{ paddingTop: "56.25%" }}>
              <iframe
                src="https://www.youtube.com/embed/RG5zCHvFN9s?si=Sr28caTLiKuJ-20u"
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
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">FÍSICO Y REAL</h2>
            <p className="text-sm leading-relaxed text-gray-600">
              Todo lo que tiene vida vibra. El escuchador está de material orgánico como madera, esteras y acero que la selva poco a poco esta siendo devorado por la selva, así que es probable que lo encuentres en algo que los humanos consideran deterioro, pero que no es más que el monte, la selva salvaje que es la parte de la vida. La estructura
              ha sido diseñada para adaptarse a diferentes tipos de ecosistemas y terrenos.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">ESPACIO MEDITATIVO</h2>
            <p className="text-sm leading-relaxed text-gray-600">
              El espacio se presenta como un baño de sonido para volver a calibrar nuestra percepción sonora. Se sugiere respirar 5
              veces profundamente, escucha tu respiración y conectar con los sonidos que aparecen en cada oreja.
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
              Es posible hacer una caminata sonoro en cualquier entorno. 
              El escuchador da la bienvenida a una de las rutas más importantes del Parque Nacional Tingo María con un
              paisaje sonoro único. La ruta empieza en el escuchador que puede servir como un lavado de nuestra escucha, reiniciando y siendo
              cosncientes de nuestra percepción sonora. Podemos empezar intentando identificar
              todos los sonidos que aparecen en la naturaleza para luego empezar la caminata y encontrar la primera catarata. 
              La ruta empieza con una de las quebradas al lado izquierdo, estas quebradas desembocan en el Huallaga uno de los afluentes
              del rio Amazonas. 
            </p>
            <p>Camina lentamente y guardes silencio para que puedan aparecer los sonidos. Obviamente no lleves parlantes o speakers, y si ves que alguien
              lo lleva invítalo a que lo apague y escuche los sonidos.</p>
        

            <div className="space-y-3">
              <div>
                <strong className="text-gray-900">Reconocimiento de lo que se repite y es constante:</strong>
                <span className="text-gray-600">
                  {" "}
                  Intenta reconocer los sonidos más permanentes, constantes y diferencialos con los que siempre se repiten.
                </span>
              </div>
              <div>
                <strong className="text-gray-900">Reconoce lo extraordinario y eventual:</strong>
                <span className="text-gray-600">
                  {" "}
                  Identifica los sonidos que aparecen eventualmente y que puedes identificar como un ave, insecto, personas o movimiento natural. 
                </span>
              </div>
              <div>
                <strong className="text-gray-900">Reimagina lo que no reconoces:</strong>
                <span className="text-gray-600">
                  {" "}
                  Imagina cómo se ven esos sonidos que tu mente no llega a reconocer, cómo son esos animales, insectos o plantas.
                </span>
              </div>
              <div>
                <strong className="text-gray-900">Estas pautas son validas para cualquier paseo sonoro</strong>
                <span className="text-gray-600">
                  {" "}
                  Un paseo sonoro es accesible y gratuito para todos. Si eres consciente de tus movimientos podras ser consciente de tu silencio. 
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
              cualquier medio es una experiencia fabulosa, ya que estamos hablando de la entrada a la selva peruana. Una vez en
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
  className="inline-flex items-center gap-4 px-6 py-3 bg-[#EDF0EA] text-[#1E293B] rounded-lg font-medium hover:bg-[#dfe3da] transition-colors duration-200"
>
  <img src="/spotify-icon.svg" alt="Spotify" className="w-20 h-20" />
  Los paisajes sonoros donde podría existir un escuchador
</a>
      </div>
         <div className="flex justify-center p-8">
      <iframe
        src="https://escuchadores.substack.com/embed"
        width="2700"
        height="350"
        style={{ border: '1px solid #ffffffff', background: 'white' }}
        frameBorder="0"
        scrolling="no"
      ></iframe>
    </div>
    <div>
      <h1 className="text-center text-2xl font-bold mb-4">Agradecimientos</h1> 
      <p className="max-w-4xl mx-auto text-center mb-8"> Este proyecto no hubiera sido posible sin la colaboración y apoyo de diversas personas e instituciones. <br></br> 
      <img src="/logo_sernarp.jpg" alt="SERNARP" className="inline w-20 h-14 mb-1 mr-2"/>
      <img src="/logo_ministerio.png" alt="corazón" className="inline w-30 h-6 mr-2"/>
      <img src="/logo_kai.jpg" alt="corazón" className="inline w-20 h-16 mr-2 mb-1"/>
      {/*<img src="/senarp.png" alt="corazón" className="inline w-6 h-6 mb-1"/>*/}
      </p>
      <p className="text-sm text-gray-400 text-center mb-4"> Personas maravillosas que formaron parte diferentes partes del proceso, arquitectura de estructura principal: Harold Raúl Clavijo, <br></br>Fabriación de orejas: Sergio Abugattas <br></br>
Construcción estructura: William Puñaraqui Quispe, Darío, Luis Salcedo Huamani <br></br>
Diseño y decoración: Evelyn Saldaña Macedo <br></br>
Grabación y video de instalaación: Carlo Rodriguez <br></br>    
Video lanzamiento: Giselle Angeles  <br></br>
Apoyo incondicional: Cesar A.Ipenza, Victoria I. Parco Lizano, Karla Ibette, Luis Flores Cordero, Sofia Café, Chaly Macedo Silva, Rister Macedo Silva, Marvin Macedo Silva, Julieta, Juan Isuiza Sanchez, Carlos Garavito, Brackus, Fani Saldaña, Nahun Saldaña Davila, Cotita Macedo Panduro, Beto Pietro, Sharon Grisell, Elvis y Gianna
  </p>

    </div>
  

    </main>
  )
}
