import React from 'react'
import { FaTint, FaShower, FaLeaf, FaCog, FaNetworkWired, FaTree } from 'react-icons/fa'

const GoalsSection = () => {
  const goals = [
    {
      id: 1,
      title: "Acceso Universal al Agua Potable",
      description: "Construir un mundo donde el acceso al agua segura no sea un privilegio, sino una realidad cotidiana para todos",
      image: "/assets/images/Acce_.jpg",
      icon: FaTint,
      color: "water"
    },
    {
      id: 2,
      title: "Saneamiento e Higiene Adecuados",
      description: "Lograr el acceso a servicios de saneamiento e higiene adecuados y equitativos para todos, prestando especial atención a las necesidades de las mujeres y las niñas. Incluye la construcción de baños seguros y la promoción de prácticas de higiene.",
      image: "/assets/images/clean_2.jpg",
      icon: FaShower,
      color: "ocean"
    },
    {
      id: 3,
      title: "Mejorar la Calidad del Agua",
      description: "Mejorar la calidad del agua reduciendo la contaminación, eliminando el vertimiento y minimizando la liberación de productos químicos y materiales peligrosos. Esto incluye el tratamiento de aguas residuales y la protección de fuentes hídricas.",
      image: "/assets/images/Plantas_.jpg",
      icon: FaLeaf,
      color: "aqua"
    },
    {
      id: 4,
      title: "Eficiencia en el Uso del Agua",
      description: "Aumentar considerablemente el uso eficiente de los recursos hídricos en todos los sectores y asegurar la sostenibilidad de la extracción y el abastecimiento de agua dulce. Promueve tecnologías de ahorro y reutilización del agua.",
      image: "/assets/images/presas_.jpg",
      icon: FaCog,
      color: "water"
    },
    {
      id: 5,
      title: "Gestión Integrada de Recursos Hídricos",
      description: "Implementar la gestión integrada de los recursos hídricos a todos los niveles, incluso mediante la cooperación transfronteriza. Esto incluye la planificación participativa y la coordinación entre diferentes sectores.",
      image: "/assets/images/gest_.jpg",
      icon: FaNetworkWired,
      color: "ocean"
    },
    {
      id: 6,
      title: "Proteger Ecosistemas Relacionados con el Agua",
      description: "Proteger y restablecer los ecosistemas relacionados con el agua, incluidos los bosques, las montañas, los humedales, los ríos, los acuíferos y los lagos. Esto es fundamental para mantener la calidad y disponibilidad del agua.",
      image: "/assets/images/cuidado_.jpg",
      icon: FaTree,
      color: "aqua"
    }
  ]

  const getColorClasses = (color) => {
    const colorMap = {
      water: {
        bg: 'bg-water-50',
        border: 'border-water-200',
        icon: 'text-water-600',
        accent: 'bg-water-500'
      },
      ocean: {
        bg: 'bg-ocean-50',
        border: 'border-ocean-200',
        icon: 'text-ocean-600',
        accent: 'bg-ocean-500'
      },
      aqua: {
        bg: 'bg-aqua-50',
        border: 'border-aqua-200',
        icon: 'text-aqua-600',
        accent: 'bg-aqua-500'
      }
    }
    return colorMap[color] || colorMap.water
  }

  return (
    <section id="goals" className="section-padding gradient-bg">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Metas del <span className="gradient-text">ODS 6</span> en Colombia
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Un panorama claro de los compromisos nacionales para superar los desafíos en acceso, 
            calidad y gestión del agua, dirigido a construir un país donde nadie se quede sin este recurso vital
          </p>
        </div>
        
        {/* Grid de Metas */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {goals.map((goal) => {
            const colors = getColorClasses(goal.color)
            const IconComponent = goal.icon
            
            return (
              <div 
                key={goal.id}
                className={`card card-hover group overflow-hidden ${colors.bg} ${colors.border} border-2`}
              >
                {/* Imagen */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={goal.image} 
                    alt={goal.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
                  {/* Icono superpuesto */}
                  <div className="absolute top-4 right-4">
                    <div className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center shadow-lg`}>
                      <IconComponent className={`${colors.icon} text-xl`} />
                    </div>
                  </div>
                  
                  {/* Barra de acento */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 ${colors.accent}`}></div>
                </div>
                
                {/* Contenido */}
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                    {goal.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {goal.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default GoalsSection