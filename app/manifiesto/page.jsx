export default function ManifiestoPage() {
  return (


    
    <div className="min-h-screen bg-[#EDF0EA]">
      <main className="px-6 py-16 max-w-4xl mx-auto bg-[#EDF0EA]">
        <div className="space-y-8">
         <section className="px-6 lg:px-8 py-16 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold leading-tight text-gray-900 mb-8">
          <span className="block">TODOS SOMOS ESCUCHADORES </span>
          <span className="block">Urge una forma más compasiva de relacionarnos con nuestro entorno.</span>
          <span className="block text-lg md:text-2xl font-normal text-gray-600 mt-4">
            Un escuchador no es un objeto para escuchar, es una actitud, somos escuchadores si lo queremos y aquí sus principios 
          </span>
        </h2>
       {/* Grilla de 5 elementos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              { img: "/Atencion_plena.svg ", title: "Atención plena", text: "Estar dispuesto a vivir el presente, escuchar los detalles de la vida que habitan el entorno en el que estas, sin juzgar ningún fenómeno"},
              { img: "/Curiosidad_infinita.svg  ", title: "Curiosidad infinita", text: "Tenemos que cultivar la curiosidad por todas esos movimientos sutilez que ocurren ante nuestra escucha, escuchar con curiosidad" },
              { img: "/Reconocer_amable.svg", title: "Admira lo complejo ", text: "Cada sonido y vibración en un entorno natural nunca es gratuito, siempre esta vinculado a algún fenómeno natural, venga del ser que venga tiene una propósito " },
              { img: "/Profundo_respeto.svg", title: "Profundo respeto", text: "Nuestra presencia perturba, desde nuestros olores, sonidos y rastros. El respeto es solo el primer paso para activar la escucha como protección" },
              { img: "/imaginacion_provocativa.svg", title: "Imaginación provocativa", text: "Imaginate como son los sonidos que escuchas, más allá de tu primera imagen mental" },
               { img: "/ser_un_paisaje.svg", title: "Ser uno con el paisajes", text: "Una vez consciente del paisajes sonoro que te envuelva, intenta moverte a su ritmo, hablar en su tono y orquestar con todo lo que suena a tu alrededor es la mejor manera de habitarlo" },
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

        </section>
          <div className="mt-12">
            <img
              src="/nahun_escuchando.png"
              alt="Nahún escuchando en el bosque"
              className="rounded-lg w-full h-auto shadow-lg"
            />
            
          </div>
        </div>
       
        
      </main>
    </div>
    
  )
}
