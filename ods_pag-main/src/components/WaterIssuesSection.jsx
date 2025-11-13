import React from 'react'
import { FaExclamationTriangle, FaTint, FaIndustry, FaUsers } from 'react-icons/fa'

const WaterIssuesSection = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Columna Izquierda: Escasez de Agua */}
          <div className="card card-hover p-10 border-l-4 border-water-500">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center">
                <FaExclamationTriangle className="text-red-600 text-2xl" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 leading-tight">Escasez de Agua en Colombia</h2>
            </div>
            
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                Cada región de Colombia posee una <strong className="text-water-700 font-semibold">huella hídrica</strong> diferente, 
                determinada por las actividades económicas predominantes, la disponibilidad de recursos y la calidad del agua. 
                Según estudios del IDEAM, Colombia se encuentra entre los países con mayor consumo hídrico per cápita de la región, 
                principalmente debido a la ganadería extensiva y la agricultura de arroz.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                En 2024, <strong className="text-water-700 font-semibold">múltiples municipios de Colombia se encuentran en crisis hídrica</strong> 
                debido al desabastecimiento de agua, especialmente en regiones como La Guajira, Córdoba y Cundinamarca. 
                A pesar de contar con proyectos de acueducto en construcción, muchos de estos proyectos aún no han sido finalizados, 
                dejando a miles de colombianos sin acceso garantizado al agua potable.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                Además, la <strong className="text-water-700 font-semibold">sobreexplotación de acuíferos</strong> va en aumento, 
                especialmente en la zona andina del país donde la ganadería y la agricultura intensiva han reducido significativamente 
                los niveles freáticos. Según la Corporación Autónoma Regional de los Valles del Sinú y San Jorge (CVS), 
                el acuífero de la Depresión Momposina presenta niveles críticos de explotación.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                Todas estas cuestiones dificultan en múltiples municipios de Colombia el <strong className="text-water-700 font-semibold">acceso a agua limpia y a un saneamiento adecuado</strong>, 
                generando impactos significativos en el medio ambiente, la economía, la sociedad y el bienestar humano. 
                A pesar de los avances recientes, miles de colombianos aún carecen de acceso básico al agua.
              </p>
            </div>
          </div>
          
          {/* Columna Derecha: Contaminación del Agua */}
          <div className="card card-hover p-10 border-l-4 border-ocean-500">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center">
                <FaTint className="text-orange-600 text-2xl" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 leading-tight">Contaminación del Agua en Colombia</h2>
            </div>
            
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                La <strong className="text-ocean-700 font-semibold">degradación de la calidad del agua</strong> es desde 2017 una tendencia 
                preocupante en Colombia, principalmente debido a las bajas tasas de tratamiento de aguas residuales en los municipios 
                del país y a las prácticas agrícolas y ganaderas que generan vertimientos contaminantes. Aproximadamente 1,000 niños 
                menores de 5 años mueren anualmente en Colombia por enfermedades diarreicas relacionadas con la falta de higiene o 
                el consumo de agua no segura.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                El <strong className="text-ocean-700 font-semibold">ODS 6 pretende lograr un acceso universal y equitativo al agua potable y a servicios de saneamiento e higiene adecuados</strong>, 
                así como <strong className="text-ocean-700 font-semibold">mejorar la calidad del agua a nivel nacional</strong>. 
                Para esto, es necesario promover la gestión sostenible de los recursos hídricos, aumentar la financiación, 
                tomar decisiones basadas en datos científicos, desarrollar una fuerza laboral capacitada, implementar tecnología 
                innovadora (incluyendo IA), y establecer una sólida colaboración intersectorial.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                <strong className="text-ocean-700 font-semibold">Las empresas juegan un rol clave</strong> en este sentido, 
                debiendo <strong className="text-ocean-700 font-semibold">gestionar de forma sostenible los recursos hídricos disponibles</strong> 
                en el entorno que son utilizados para la <strong className="text-ocean-700 font-semibold">creación, producción y distribución de sus productos y servicios</strong>. 
                Deben fomentar y facilitar una mejor gestión del agua en su cadena de valor e invertir en educación e innovación sobre el tema, 
                especialmente en sectores como la ganadería, la agricultura y la industria manufacturera que son predominantes en Colombia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WaterIssuesSection