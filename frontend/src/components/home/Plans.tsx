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
        <section id="planes" className="py-32 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          {/* Título de la sección */}
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4"style={{padding: '2px 5px' , margin: '2px 15px'}}>
              Planes de <span className="text-red-600">Membresía</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto items-center"style={{padding: '2px 5px'}}>
              Elegí el plan que mejor se adapte a tus necesidades y objetivos
            </p>
          </div>
  
          {/* Grid de planes */}
          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto ">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`
                  relative rounded-2xl p-12
                  ${plan.highlighted 
                    ? 'bg-red-600 text-white scale-105 shadow-2xl' 
                    : 'bg-gray-800 text-white hover:bg-gray-750 transition'
                  }
                `}
              >
                {/* Badge "Recomendado" */}
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 p-5 m-5 bg-yellow-400 text-black rounded-full text-sm font-bold" style={{padding: '2px 5px'}}>
                    ⭐ Recomendado
                  </div>
                )}
  
                {/* Nombre del plan */}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                
                {/* Descripción */}
                <p className={`text-sm mb-6 ${plan.highlighted ? 'text-red-100' : 'text-gray-400'}`}>
                  {plan.description}
                </p>
  
                {/* Precio */}
                <div className="mb-6">
                  <span className="text-5xl font-bold">${plan.price}</span>
                  <span className={`text-lg ${plan.highlighted ? 'text-red-100' : 'text-gray-400'}`}>
                    /mes
                  </span>
                </div>
  
                {/* Características */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg 
                        className={`w-5 h-5 mt-1 shrink-0 ${plan.highlighted ? 'text-white' : 'text-red-600'}`} 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path 
                          fillRule="evenodd" 
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                          clipRule="evenodd" 
                        />
                      </svg>
                      <span className={plan.highlighted ? 'text-red-50' : 'text-gray-300'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
  
                {/* Botón */}
                <button 
                  className={`
                    w-full py-3 rounded-lg font-bold transition transform hover:scale-105
                    ${plan.highlighted 
                      ? 'bg-white text-red-600 hover:bg-gray-100' 
                      : 'bg-red-600 text-white hover:bg-red-700'
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