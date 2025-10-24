export default function Plans() {
  const plans = [
    {
      name: "Musculación",
      price: "15.000",
      description: "Acceso completo a la sala de musculación",
      features: [
        "Acceso ilimitado a sala de musculación",
        "Horario completo (8:00 - 22:00)",
        "Evaluación inicial",
        "Rutina personalizada",
      ],
      highlighted: false,
    },
    {
      name: "Kickboxing",
      price: "18.000",
      description: "Clases de kickboxing con entrenadores profesionales",
      features: [
        "Clases de kickboxing",
        "Equipamiento incluido",
        "Entrenadores certificados",
        "Horarios flexibles",
      ],
      highlighted: false,
    },
    {
      name: "Personalizado",
      price: "25.000",
      description: "Entrenamiento personalizado adaptado a tus objetivos",
      features: [
        "Entrenador personal exclusivo",
        "Plan nutricional",
        "Seguimiento de progreso",
        "Evaluación semanal",
        "Acceso total al gym",
      ],
      highlighted: true,
    },
  ];

  return (
    <section id="planes" className="py-16 px-4 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Planes de <span className="text-red-600">Membresía</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Elegí el plan que mejor se adapte a tus necesidades y objetivos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`
                relative rounded-xl p-6 flex flex-col
                ${
                  plan.highlighted
                    ? "bg-red-600 text-white shadow-2xl"
                    : "bg-gray-800 text-white hover:bg-gray-750 transition"
                }
              `}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-yellow-400 text-black rounded-full text-xs font-bold">
                  ⭐ Recomendado
                </div>
              )}

              <h3 className="text-xl font-bold mb-2 mt-2">{plan.name}</h3>

              <p
                className={`text-xs mb-4 ${
                  plan.highlighted ? "text-red-100" : "text-gray-400"
                }`}
              >
                {plan.description}
              </p>

              <div className="mb-6">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span
                  className={`text-base ${
                    plan.highlighted ? "text-red-100" : "text-gray-400"
                  }`}
                >
                  /mes
                </span>
              </div>

              <ul className="space-y-3 mb-6 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <svg
                      className={`w-4 h-4 mt-0.5 shrink-0 ${
                        plan.highlighted ? "text-white" : "text-red-600"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span
                      className={`text-sm leading-tight ${
                        plan.highlighted ? "text-red-50" : "text-gray-300"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`
                  w-full py-3 px-4 rounded-lg font-semibold text-sm transition transform hover:scale-105
                  ${
                    plan.highlighted
                      ? "bg-white text-red-600 hover:bg-gray-100"
                      : "bg-red-600 text-white hover:bg-red-700"
                  }
                `}
              >
                Elegir Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}