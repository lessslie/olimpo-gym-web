import Image from "next/image";

export default function Classes() {
  const classes = [
    {
      name: "Kickboxing",
      image: "/images/kickboxing.jpg", // ← Ruta de la imagen
      description: "Entrenamiento de alta intensidad combinando técnicas de boxeo y artes marciales",
      schedule: ["Lun-Mie-Vie 18:00", "Mar-Jue 19:00"],
      level: "Todos los niveles",
      levelColor: "blue",
    },
    {
      name: "Funcional",
      image: "/images/funcional.png",
      description: "Ejercicios funcionales para mejorar fuerza, resistencia y movilidad",
      schedule: ["Lun-Mie-Vie 07:00", "Mar-Jue 20:00"],
      level: "Todos los niveles",
      levelColor: "blue",
    },
    {
      name: "CrossFit",
      image: "/images/crossfit.png",
      description: "Entrenamiento de alta intensidad con levantamiento olímpico y cardio",
      schedule: ["Lun-Mie-Vie 19:00", "Sáb 10:00"],
      level: "Intermedio-Avanzado",
      levelColor: "orange",
    },
    {
      name: "Yoga",
      image: "/images/yoga.png",
      description: "Práctica de posturas y meditación para equilibrio cuerpo-mente",
      schedule: ["Mar-Jue 08:00", "Sáb 09:00"],
      level: "Principiante",
      levelColor: "green",
    },
    {
      name: "Spinning",
      image: "/images/spinning.png",
      description: "Clase de ciclismo indoor con música y alta energía",
      schedule: ["Lun-Mie-Vie 17:00", "Sáb 11:00"],
      level: "Todos los niveles",
      levelColor: "blue",
    },
    {
      name: "Zumba",
      image: "/images/zumba.png",
      description: "Baile fitness con ritmos latinos para quemar calorías divirtiéndote",
      schedule: ["Mar-Jue 18:00", "Sáb 10:00"],
      level: "Principiante",
      levelColor: "green",
    },
  ];

  const getLevelColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-600 text-white",
      orange: "bg-orange-600 text-white",
      green: "bg-green-600 text-white",
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="clases" className="py-16 px-4 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        {/* Título de la sección */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Nuestras <span className="text-red-600">Clases</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Variedad de clases grupales diseñadas para todos los niveles y objetivos
          </p>
        </div>

        {/* Grid de clases */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {classes.map((clase, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl overflow-hidden hover:bg-gray-800 transition transform hover:scale-105 border border-gray-800 flex flex-col min-h-[480px]"
            >
              {/* Imagen */}
              <div className="relative h-48 w-full bg-gray-800">
                <Image
                  src={clase.image}
                  alt={clase.name}
                  fill
                  className="object-cover"
                />
                {/* Badge de nivel superpuesto */}
                <div className="absolute top-3 right-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${getLevelColorClasses(
                      clase.levelColor
                    )}`}
                  >
                    {clase.level}
                  </span>
                </div>
              </div>

              {/* Contenido */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Nombre */}
                <h3 className="text-2xl font-bold text-white mb-3">{clase.name}</h3>

                {/* Descripción */}
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {clase.description}
                </p>

                {/* Contenedor flexible que crece */}
                <div className="flex-grow">
                  {/* Horarios */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-gray-300 text-sm">
                      <svg
                        className="w-4 h-4 text-red-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="font-semibold">Horarios:</span>
                    </div>
                    {clase.schedule.map((horario, i) => (
                      <div
                        key={i}
                        className="pl-6 text-gray-400 text-sm flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span>
                        {horario}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Botón */}
                <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold text-sm transition transform hover:scale-105">
                  Reservar Clase
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA adicional */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">
            ¿No encontrás lo que buscás?
          </p>
          <button className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition">
            Ver Horario Completo
          </button>
        </div>
      </div>
    </section>
  );
}