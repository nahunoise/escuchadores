export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-[#EDF0EA]">
      <main className="px-6 py-16 max-w-4xl mx-auto">
        <h3 className="text-3xl md:text-5xl font-extrabold text-[#4D4D4D] mb-8">Mantengamos la conexión</h3>

        <div className="mb-12">
          <p className="text-lg text-[#4D4D4D] mb-4">nahun.saldana.macedo@gmail.com</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <img
            src="/foto2.png"
            alt="Fotografía del proyecto escuchador"
            className="w-full h-auto rounded-lg shadow-md"
          />
          <img
            src="/foto1.png"
            alt="Fotografía del proyecto escuchador"
            className="w-full h-auto rounded-lg shadow-md"
          />
          <img
            src="/caminata3.jpg"
            alt="Caminata en el proyecto escuchador"
            className="w-full h-auto rounded-lg shadow-md"
          />
          <img
            src="/caminata2.jpg"
            alt="Caminata en el proyecto escuchador"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </main>
    </div>
  )
}
