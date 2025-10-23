export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-linear-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Overlay decorativo */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      
      {/* Contenido principal */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-block mb-6 px-4 py-2 bg-red-600/20 border-2 border-red-600 rounded-full text-red-400 text-sm font-semibold">
          🔥 El mejor gym de la zona
        </div>

        {/* Título principal */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Transformá tu cuerpo,
          <br />
          <span className="text-red-600">cambiá tu vida</span>
        </h1>

        {/* Subtítulo */}
        <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
          En Olimpo Gym te ayudamos a alcanzar tus metas fitness con instalaciones de primera clase, 
          entrenadores profesionales y una comunidad que te apoya en cada paso.
        </p>

        {/* Botones */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition transform hover:scale-105">
            Inscribite Ahora
          </button>
          <button className="border-2 border-white hover:bg-white hover:text-black text-white px-8 py-4 rounded-lg font-bold text-lg transition">
            Ver Planes
          </button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div>
            <div className="text-4xl font-bold text-red-600">500+</div>
            <div className="text-gray-400 mt-2">Miembros Activos</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-red-600">10+</div>
            <div className="text-gray-400 mt-2">Años de Experiencia</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-red-600">50+</div>
            <div className="text-gray-400 mt-2">Clases Semanales</div>
          </div>
        </div>
      </div>

      {/* Flecha hacia abajo */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}