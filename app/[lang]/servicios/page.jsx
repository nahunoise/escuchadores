import { getDictionary } from '../../../dictionaries'

export default async function ServiciosPage({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className="min-h-screen bg-[#EDF0EA]">
      <main className="relative px-6 py-16 max-w-6xl mx-auto">

        {/* Contenedor principal con imagen grande */}
        <div className="relative w-full h-96 md:h-[500px] mb-12">
          <img 
            src="/entrada_escuchador.png" 
            alt="Hero Services" 
            className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 bg-black/40 rounded-lg">
            <h4 className="text-sm text-white font-light max-w-2xl uppercase">
              {dict.servicios.hero_subtitle}
            </h4>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 uppercase">
              {dict.servicios.hero_title}
            </h2>
            <h3 className="text-lg md:text-xl text-white max-w-2xl">
              {dict.servicios.hero_question}
            </h3>

            <a
              href="https://forms.gle/UKCcDWjs6WEn4MKTA"
              className="inline-flex items-center justify-center rounded-lg border border-[#1E293B] bg-white px-12 h-9 text-large font-medium text-[#1E293B]
                         hover:border-transparent hover:bg-[#1E293B] hover:text-white 
                         transition-colors duration-200 min-w-[250px] mt-6"
            >
              {dict.servicios.button_connect}
            </a>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 lg:px-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <section className="space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 uppercase">{dict.servicios.pillar1_title}</h2>
              <p className="text-sm leading-relaxed text-gray-600">{dict.servicios.pillar1_desc}</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 uppercase">{dict.servicios.pillar2_title}</h2>
              <p className="text-sm leading-relaxed text-gray-600">{dict.servicios.pillar2_desc}</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 uppercase">{dict.servicios.pillar3_title}</h2>
              <p className="text-sm leading-relaxed text-gray-600">{dict.servicios.pillar3_desc}</p>
            </section>
          </div>

          <h2 className="text-1xl md:text-1xl font-bold text-gray-900 mt-16 uppercase">{dict.servicios.list_title}</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {dict.servicios.items.map((item, i) => (
              <div key={i} className="bg-[#FCF8ED] rounded-xl shadow overflow-hidden">
                <img src={item.img} alt={item.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 uppercase">{item.title}</h3>
                  <p className="text-gray-700 text-sm">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}