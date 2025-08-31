import Header from "@/components/header"

export default function PeliculaPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-foreground mb-6">La Película</h1>
        <p className="text-muted-foreground">Contenido de la página La Película...</p>
      </main>
    </div>
  )
}
