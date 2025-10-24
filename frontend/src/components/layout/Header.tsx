"use client";
export default function Header() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };
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
          <a href="#inicio" onClick={(e) => handleScroll(e, 'inicio')} className="hover:text-red-600 transition">
  Inicio
</a>
<a href="#planes" onClick={(e) => handleScroll(e, 'planes')} className="hover:text-red-600 transition">
  Planes
</a>
<a href="#clases" onClick={(e) => handleScroll(e, 'clases')} className="hover:text-red-600 transition">
  Clases
</a>
<a href="#contacto" onClick={(e) => handleScroll(e, 'contacto')} className="hover:text-red-600 transition">
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