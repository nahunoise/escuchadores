import Header from "@/components/header"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Bienvenido a Cuco</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Esta es la página principal de tu sitio web. El header responsive está listo y funciona tanto en desktop
            como en móvil.
          </p>
        </div>
      </main>
    </div>
  )
}
