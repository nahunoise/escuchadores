import Link from "next/link";
export default function Home() {
  return (
    <main className="flex flex-col">
      {/* Hero Section */}
    <section className="relative h-[80vh] mb-10 flex items-center justify-start hero-section"
  style={{
    backgroundImage: "url('/tu-imagen.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <div className="absolute inset-0 bg-black/40" />
  <div className="relative z-10 mx-auto w-full max-w-5xl px-4">
    <div className=""> 
      <h4 className="text-white text-sm md:text-base font-light">INAUGURACIÓN</h4>
      <h1 className="!m-0 text-3xl md:text-6xl font-extrabold leading-none text-white">
        EL PRIMER ESCUCHADOR EN EL PERÚ
      </h1>
      <h4 className="!m-0 text-white text-xl md:text-2xl">
        PARQUE NACIONAL TINGO MARÍA
      </h4>
    </div>
  </div>
</section>


<div className="seccion-doble">
  {/* Sección texto */}
  <section>
    <p>Así como hay miradores también deberían existir escuchadores para proteger lo más valioso que tenemos: <b>La vida</b></p>
    <h2>ESCUCHAR PARA PROTEGER</h2>
    <p>Una experiencia que devela la interconexión de la naturaleza y nuestra dependencia con ella a partir de la escucha profunda con la ayuda de tres artefactos de escucha de diferentes dimensiones con propósitos distintos..</p>
  </section>

  {/* Grid de imágenes */}
  <section>
    <div>
      <img src="/foto3.png" alt="foto película" className="rounded-lg w-full h-auto" />
    </div>
  </section>
</div>

   
      {/* Sección final */}
      <section className="px-0 py-0 max-w-4xl mx-auto text-center">
        <h2 className="text-1xl md:text-3xl">
          <p>SI HAY VIDA, HAY SONIDO.</p> EL SONIDO NOS ATRAVIESA, 
          <p>Para cuidarla tenemos que escucharla</p>
        </h2> 
        
         <section className="px-10 py-12 max-w-5xl text-left">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-1">  
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-1">
          <img src="/cenital_escuchador.png" alt="foto película" className="rounded-lg w-full h-auto" />
        </div>
      </section>
<div className="seccion-triple">
  <section>
    <h2 className="text-2xl md:text-3xl font-bold mt-2 text-left">
      EXPERIENCIA FÍSICA Y REAL
    </h2>
    <p className="text-left tracking-wide text-gray-600">
      Todo lo que tiene vida vibra.
      El escuchador está compuesto por tres orejas que tienen diferentes dimensiones y propósitos. 
      Con la más pequeñas podrás reconocer los sonidos de los insectos más pequeños. 
      Con la mediana escucharás motores y voces humanas. 
      Con la grande sentirás la fuerza del río, mamíferos y aves.
    </p>
  </section>

  <section>
    <h2 className="text-2xl md:text-3xl font-bold mt-2 text-left" >ESPACIO PARA MEDITATIVO </h2>
    <p className="mt-6 leading-relaxed text-gray-700 text-left">
      El espacio se presenta como un baño de sonido para volver a calibrar nuestra percepción sonora. 
      Respira 5 veces profundamente, escucha tu respiración y conecta con los sonidos que aparecen en cada oreja.
    </p>
  </section>

  <section>
    <h2 className="text-2xl md:text-3xl font-bold mt-2 text-left" >FRAGILIDAD SONORA</h2>
    <p className="mt-6 leading-relaxed text-gray-700 text-left">
      Urge una forma más compasiva de relacionarnos con nuestro entorno. 
      Ser un escuchador significa tener compasión y encontrar belleza en el paisaje sonoro.
    </p>
  </section>
</div>        
       
        
      <section className="px-10 py-12 max-w-5xl text-left">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-1">
          <img src="/fondo_escuchadores.png" alt="foto película" className="rounded-lg w-full h-auto" />
        </div>
         <h2>COMO LLEGAR</h2>
        <p className="mt-6 space-y-4 leading-relaxed md:container md:mx-auto"> Tingo Maria se encuentra conectada por la carretera central y un aeropuerto. 
Llegar a Tingo Maria por cualquier medio es un experiencia fabulosa, ya que estamos hablando de la entrada de la selva. 
Una vez en Tingo Maria, puedes encontrar diferentes formas de llegar hasta el tercer sector donde se encuentra la catarata más próxima Gloriapata en el Parque Nacional Tingo Maria.  
 </p>
      </section>    
      </section>
      

      
      <div className="container mx-auto">
     <div className="w-full flex justify-center">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9573.527889166904!2d-75.97629829168054!3d-9.420395974162815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91a645c9a6f33063%3A0x1e7fc83b831556e0!2sTingo%20Mar%C3%ADa%20-%20Puesto%20de%20Control%20y%20Vigilancia%203%20de%20Mayo%20-%20Sernanp%20National%20Park!5e1!3m2!1sgl!2ses!4v1757531279840!5m2!1sgl!2ses"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
       
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/kFy11JjJh0Q?si=iBqzJIXBJfVt9j6m"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>

      {/* Footer */}
      {/* Spotify botón/ícono */}
        <div className="container mx-auto text-center">
          <a
            href="https://open.spotify.com/playlist/4FZgnX88YC2oLipzEh4FpY?si=JSHHFiAzRhywgR1ZZ8Strg"
            className="inline-flex items-center gap-2 font-medium hover:opacity-75"
          >
            <img src="/spotify-icon.svg" alt="Spotify" className="w-6 h-6" href="https://open.spotify.com/playlist/4FZgnX88YC2oLipzEh4FpY?si=JSHHFiAzRhywgR1ZZ8Strg" />
       
          </a>
        </div>
        
       
      <footer className="bg-gray-200 px-6 py-6 flex flex-col items-center text-center md:flex-row md:justify-between">
        <p className="text-xs font-medium text-gray-800">
          Proyecto producido y realizado por <br />
          <span className="font-bold">Nahun Saldaña Macedo</span> <br />
          2025 Copyleft - Piratea y difunde
        </p>
        <p>www.instagram.com/escuchadores</p>
        <p>nahunoise@gmail.com</p>
        <img src="logo_escuchadores_desktop.svg" alt="Logo" className="w-16 mt-4 md:mt-0" />
      </footer>
    </main>
  );
}
