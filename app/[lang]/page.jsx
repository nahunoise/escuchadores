import { getDictionary } from '../../dictionaries'

export default async function Home({ params }) {
  const { lang } = await params; // En las versiones nuevas de Next.js, params es una promesa
  const dict = await getDictionary(lang);

  return (
    <main className="flex flex-col bg-[#EDF0EA]">
      {/* Hero Section */}
      <section className="relative h-[80vh] mb-16 flex items-center justify-start overflow-hidden bg-black">
        <div className="absolute inset-0 overflow-hidden">
          <iframe
            src="https://www.youtube.com/embed/bZGUFO1iIcI?autoplay=1&mute=1&loop=1&playlist=bZGUFO1iIcI&controls=0&showinfo=0&modestbranding=1"
            title="Video background"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '100vw',
              height: 'calc(100vw * 9 / 16)',
              minHeight: '100vh',
              minWidth: '177.78vh',
            }}
          />
        </div>

        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 lg:px-8 text-white">
          <h4 className="text-sm md:text-base font-light mb-2 uppercase">
            {dict.hero.subtitle_top}
          </h4>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4">
            {dict.hero.title}
          </h1>
          <h4 className="text-sm md:text-base font-light mb-8">
            {dict.hero.description}
          </h4>
          <a
            href="#empezar"
            className="inline-flex items-center justify-center rounded-lg border border-[#1E293B] bg-white px-12 h-9 text-large font-medium text-[#1E293B]
                       hover:border-transparent hover:bg-[#1E293B] hover:text-white 
                       transition-colors duration-200 min-w-[250px]"
          >
            {dict.hero.button}
          </a>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <section id="empezar" className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 uppercase">
              {dict.content.main_title}
            </h2>
            <p className="text-base leading-relaxed text-gray-600">
              {dict.content.description_1}
            </p>
            <p className="text-base leading-relaxed text-gray-600">
              {dict.content.description_2}
            </p>

            <ul className="space-y-4">
              <li><b>{dict.ears.large.title}</b> {dict.ears.large.desc}</li>
              <div className="mt-4">
                <iframe style={{ border: 0, width: "100%", height: "120px" }} src="https://bandcamp.com/EmbeddedPlayer/album=764466561/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=182144867/transparent=true/" seamless className="rounded-lg shadow-lg" />
              </div>

              <li><b>{dict.ears.medium.title}</b> {dict.ears.medium.desc}</li>
              <div className="mt-4">
                <iframe style={{ border: 0, width: "100%", height: "120px" }} src="https://bandcamp.com/EmbeddedPlayer/album=764466561/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=4171084743/transparent=true/" seamless className="rounded-lg shadow-lg" />
              </div>

              <li><b>{dict.ears.small.title}</b> {dict.ears.small.desc}</li>
              <div className="mt-4">
                <iframe style={{ border: 0, width: "100%", height: "120px" }} src="https://bandcamp.com/EmbeddedPlayer/album=764466561/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=3376537549/transparent=true/" seamless className="rounded-lg shadow-lg" />
              </div>
            </ul>
          </section>

          <section className="space-y-6">
            <img src="/foto3.png" alt="process photo" className="w-full h-auto rounded-lg shadow-lg" />
            <div className="relative w-full rounded-lg overflow-hidden shadow-lg" style={{ paddingTop: "56.25%" }}>
              <iframe src="https://www.youtube.com/embed/RG5zCHvFN9s?si=Sr28caTLiKuJ-20u" className="absolute inset-0 h-full w-full" allowFullScreen title="YouTube video" />
            </div>
          </section>
        </div>
      </div>

      <section className="px-6 lg:px-8 py-16 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold leading-tight text-gray-900 mb-8 uppercase">
          <span className="block">{dict.quote.line1}</span>
          <span className="block">{dict.quote.line2}</span>
          <span className="block text-lg md:text-2xl font-normal text-gray-600 mt-4">
            {dict.quote.sub}
          </span>
        </h2>
      </section>

      <div className="w-full h-[50vh] md:h-[70vh] mb-16">
        <img src="/cenital_escuchador.png" alt="Top view" className="w-full h-full object-cover" />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">{dict.features.physical.title}</h2>
            <p className="text-sm leading-relaxed text-gray-600">{dict.features.physical.desc}</p>
          </section>
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">{dict.features.meditative.title}</h2>
            <p className="text-sm leading-relaxed text-gray-600">{dict.features.meditative.desc}</p>
          </section>
          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">{dict.features.fragility.title}</h2>
            <p className="text-sm leading-relaxed text-gray-600">{dict.features.fragility.desc}</p>
          </section>
        </div>
      </div>

      {/* Continuarías aplicando dict.section.key al resto de los textos... */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 mb-16 text-center">
        <h1 className="text-center text-2xl font-bold mb-4">{dict.footer.acknowledgments}</h1>
        <p className="text-sm text-gray-400 text-center mb-4">{dict.footer.team_credits}</p>
      </section>
    </main>
  )
}