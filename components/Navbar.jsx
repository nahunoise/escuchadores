"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // 👈 asegúrate de instalar con: npm install lucide-react

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <nav className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src="/logo_escuchadores_desktop.svg"
            alt="Logo"
            className="w-[120px] md:w-[160px] h-auto"
          />
        </div>

        {/* Menú Desktop */}
        <ul className="hidden md:flex gap-20 text-gray-800 font-light">
          <li><a href="/">Inicio</a></li>
          <li><a href="/manifiesto">Manifiesto</a></li>
          <li><a href="/escuchadores">Escuchadores</a></li>
          <li><a href="/pelicula">La Película</a></li>
          <li><a href="/servicios">Servicios</a></li>
          <li><a href="/contacto">Contacto</a></li>
        </ul>

        {/* Hamburguesa Mobile */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Overlay Mobile */}
      {isOpen && (
        <div className="fixed inset-0 bg-gray-200 flex flex-col items-center justify-center space-y-8 text-gray-700 text-lg font-medium z-40">
          <a href="/" onClick={() => setIsOpen(false)}>Inicio</a>
          <a href="/manifiesto" onClick={() => setIsOpen(false)}>Manifiesto</a>
          <a href="/escuchadores" onClick={() => setIsOpen(false)}>Escuchadores</a>
          <a href="/pelicula" onClick={() => setIsOpen(false)}>La Película</a>
          <a href="/servicios" onClick={() => setIsOpen(false)}>Servicios</a>
          <a href="/contacto" onClick={() => setIsOpen(false)}>Contacto</a>
        </div>
      )}
    </header>
  );
}