export default function ManifiestoPage() {
  return (
    <div className="min-h-screen bg-[#EDF0EA]">
      <main className="px-6 py-16 max-w-4xl mx-auto bg-[#EDF0EA]">
        <div className="space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">TODOS SOMOS ESCUCHADORES.</h1>

          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>Urge una forma más compasiva de relacionarnos con nuestro entorno.</p>

            <p>
              Ser un escuchador es ser una persona dispuesta a tomar atención de cómo suenan nuestros entornos
              naturales, las vidas que lo habitan y los distintos fenómenos que ocurren en él.
            </p>

            <p>
              Ser un escuchador, significa tener compasión por los otros seres vivos y permitirnos conectar más allá de
              los paisajes visuales y empezar encontrar belleza en el paisaje sonoro.
            </p>

            <p>
              Ser un escuchador es una forma de proteger lo que hace que sigamos en este planeta co existiendo con otros
              seres vivos y garantiza nuestra existencia.
            </p>
          </div>

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
