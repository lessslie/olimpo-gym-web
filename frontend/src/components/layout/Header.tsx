export default function Header() {
    return (
      <header className="bg-black text-white py-4 px-6 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="text-2xl font-bold">
              <span className="text-red-600">OLIMPO</span> GYM
            </div>
          </div>
  
          {/* Navegación */}
          <nav className="hidden md:flex gap-8">
            <a href="#inicio" className="hover:text-red-600 transition">
              Inicio
            </a>
            <a href="#planes" className="hover:text-red-600 transition">
              Planes
            </a>
            <a href="#clases" className="hover:text-red-600 transition">
              Clases
            </a>
            <a href="#contacto" className="hover:text-red-600 transition">
              Contacto
            </a>
          </nav>
  
          {/* Botón CTA */}
          <button className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-lg font-semibold transition">
            Inscribite
          </button>
        </div>
      </header>
    );
  }