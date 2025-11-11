export default function PoliticaDeCookies() {
  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">Política de cookies</h1>
      <p className="mb-3">
        Este sitio web utiliza únicamente cookies técnicas necesarias para su funcionamiento y cookies de terceros vinculadas al servicio de suscripción de Substack, que pueden recopilar información con fines estadísticos o de personalización.
      </p>
      <p className="mb-3">
        Al interactuar con el contenido incrustado de Substack, aceptas el uso de dichas cookies. Puedes obtener más información sobre ellas en la{" "}
        <a
          href="https://substack.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          Política de privacidad de Substack
        </a>.
      </p>
    </main>
  );
}
