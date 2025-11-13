import React from 'react'
import { FaWater, FaQuoteLeft } from 'react-icons/fa'

const IntroSection = () => {
  const scrollToGoals = () => {
    document.getElementById('goals').scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }

  return (
    <section className="min-h-screen flex items-center gradient-bg pt-20">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Columna Izquierda: Imagen con Cita */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-strong">
              <img 
                src="/assets/images/water_clean.jpg" 
                alt="Agua limpia en manos" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-water-900/80 via-transparent to-transparent"></div>
              
              {/* Cita superpuesta */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-strong">
                  <div className="flex items-start gap-4">
                    <FaQuoteLeft className="text-water-600 text-3xl flex-shrink-0 mt-1" />
                    <p className="text-gray-800 text-lg font-medium leading-relaxed">
                      Garantizar la disponibilidad de agua y su gestión sostenible y el saneamiento para todos
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Columna Derecha: Texto Explicativo */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-water-100 rounded-xl flex items-center justify-center">
                <FaWater className="text-water-600 text-xl" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                ¿En qué consiste el{' '}
                <span className="gradient-text">Objetivo de Desarrollo Sostenible 6?</span>
              </h1>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                La demanda mundial de agua ha aumentado debido al crecimiento demográfico, la rápida urbanización, 
                el desarrollo económico y los patrones de consumo cambiantes. En Colombia, este desafío se intensifica 
                con el cambio climático y los eventos climáticos extremos como sequías e inundaciones que afectan 
                directamente a nuestros ríos, ciénagas y humedales.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Las sequías en Colombia son un fenómeno recurrente, y combinadas con la sobreexplotación del agua 
                de ríos y acuíferos, llevan a que algunas regiones del país experimenten niveles críticos de escasez 
                hídrica. Por eso, el ODS 6 es fundamental para garantizar un futuro sostenible para todos los colombianos.
              </p>
            </div>
            
            <button 
              onClick={scrollToGoals}
              className="btn-primary inline-flex items-center gap-3 group"
            >
              <span>Conoce las metas de este ODS</span>
              <svg 
                className="w-5 h-5 transition-transform group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IntroSection