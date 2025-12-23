import { getDictionary } from '../../../dictionaries'

export default async function ManifiestoPage({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className="min-h-screen bg-[#EDF0EA]">
      <main className="px-6 py-16 max-w-4xl mx-auto bg-[#EDF0EA]">
        <div className="space-y-8">
          <section className="px-6 lg:px-8 py-16 max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-bold leading-tight text-gray-900 mb-8 uppercase">
              <span className="block">{dict.manifiesto.title_1}</span>
              <span className="block">{dict.manifiesto.title_2}</span>
              <span className="block text-lg md:text-2xl font-normal text-gray-600 mt-4">
                {dict.manifiesto.subtitle}
              </span>
            </h2>

            {/* Grilla de principios */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {dict.manifiesto.principles.map((item, i) => (
                <div key={i} className="bg-[#FCF8ED] rounded-xl shadow overflow-hidden text-left">
                  <img src={item.img} alt={item.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 uppercase">{item.title}</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="mt-12">
            <img
              src="/nahun_escuchando.png"
              alt="Nahun listening"
              className="rounded-lg w-full h-auto shadow-lg"
            />
          </div>
        </div>
      </main>
    </div>
  )
}