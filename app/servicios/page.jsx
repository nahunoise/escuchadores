export default function ServiciosPage() {
  return (
    <div className="min-h-screen bg-[#EDF0EA]">
      <main className="relative px-6 py-16 max-w-6xl mx-auto">

        {/* Contenedor principal con imagen grande */}
        <div className="relative w-full h-96 md:h-[500px] mb-12">
          <img 
            src="/entrada_escuchador.png" 
            alt="foto película" 
            className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 bg-black/40 rounded-lg">
           <h4 className="text-sm text-white font-light max-w-2xl">
              Conoces algún paisaje sonoro que no debería desaparecer y que quiere proteger poniendo en valor su diversidad y riqueza sonora. Ya sea promoviendo la escucha y generando buen silencio.
            </h4>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              HACER PARA ESCUCHAR
            </h2>
            <h3 className="text-lg md:text-xl text-white max-w-2xl">
              ¿Quieres instalar un escuchador o conoces un lugar donde sería importante instalar uno?
            </h3>

             <a
      href="https://forms.gle/UKCcDWjs6WEn4MKTA"
      className="inline-flex items-center justify-center rounded-lg border border-[#1E293B] bg-white px-12 h-9 text-large font-medium text-[#1E293B]
                 hover:border-transparent hover:bg-[#1E293B] hover:text-white 
                 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1E293B] focus-visible:ring-offset-2
                 transition-colors duration-200 min-w-[250px]"
    >
CONECTAR    </a>
           
          </div>


        </div>

       

          <div className="max-w-6xl mx-auto px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">PROTEGER ECOSISTEMAS CON LA AYUDA DEL SONIDO</h2>
            <p className="text-sm leading-relaxed text-gray-600">
              Sabemos que una de las formas de proteger algo es conociendolo, por todo ello nos ofrecemos apoyar a organizaciones interesadas en cuidar, regenerar y proteger ecosistemas. Ya sea diseñando la estrategia, impleentado artefactos o tecnología conveniente donde la escucha y el sonido sean herramientas para la protección
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">USO DE LA CIENCIA Y LA TECNOLOGÍA</h2>
            <p className="text-sm leading-relaxed text-gray-600">
              Creemos que la ciencia y la tecnología debe estar al servicio de la protección de la vida y nunca al revez. Con la ayuda de IA y nuevos materiales buscamos una mayor comprensión de los ecosistemas. 
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">PROTEGER DESDE LA COMUNIDAD</h2>
            <p className="text-sm leading-relaxed text-gray-600">
              No existe ninguna protección posible si es que no se involucra a toda la comundidad de la que depende un área natural, desde las comunidades, visitantes y responsables. Todos pueden descubrer la oportunidad que da poner en valor el paisaje sonoro. Escuchadores va más allá de solo instalar artefactos, sino sobre todo crea nuevas dinámicas y actividades que permitan esta transformación.
            </p>
          </section>

          
        </div>
        {/* Grilla de 5 elementos */}
        <h2 className="text-1xl md:text-1xl font-bold text-gray-900">SERVICIOS</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              { img: "/portada_escuchador.png", title: "Realización de artefacto sonoro", text: "Desde los planos hasta la implementación, acomapañamos de principio a fin"},
              { img: "/caminata.png", title: "Diseño de rutas sonoras para poner el valor el paisaje sonoro", text: "Creamos rutas visitables para apreciar el paisaje sonoro de un área natural" },
              { img: "/Analisis_muestra.jpg", title: "Análisis y monitoreo de paisaje sonoro ", text: "Generamos información de valor para los espacios naturales desde identificación de especies, indices acústicos y. todos los datos que el sonido puede generar. " },
              
            ].map((item, i) => (
              <div key={i} className="bg-#FCF8ED rounded-xl shadow overflow-hidden">
                <img src={item.img} alt={item.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-700">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
      </div>

        
      </main>
    </div>
  )
}
