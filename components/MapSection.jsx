import React, { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet'
import { 
  FaMapMarkerAlt, 
  FaWater, 
  FaExclamationTriangle, 
  FaLightbulb, 
  FaUsers, 
  FaBuilding,
  FaIndustry,
  FaTree,
  FaTint,
  FaShieldAlt,
  FaChartLine,
  FaBook,
  FaRocket,
  FaGlobe,
  FaDatabase,
  FaClipboardCheck,
  FaTools,
  FaLeaf,
  FaMountain,
  FaCloudRain,
  FaRecycle,
  FaEye,
  FaHandHoldingWater
} from 'react-icons/fa'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { colombiaRegions, mapConfig, severityColors, issueIcons, colombiaStats } from '../data/colombiaRegions'

// Configurar iconos de Leaflet
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
})

const MapSection = () => {
  const [selectedRegion, setSelectedRegion] = useState(null)
  const [filter, setFilter] = useState('all') // all, critical, high, medium, low

  // Crear iconos personalizados para cada nivel de severidad
  const createCustomIcon = (severity) => {
    const color = severityColors[severity]
    return L.divIcon({
      className: 'custom-marker',
      html: `<div style="
        background-color: ${color};
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: 3px solid white;
        box-shadow: 0 2px 4px rgba(0,0,0,0.3);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        color: white;
      ">💧</div>`,
      iconSize: [20, 20],
      iconAnchor: [10, 10]
    })
  }

  // Filtrar regiones según el filtro seleccionado
  const filteredRegions = colombiaRegions.filter(region => 
    filter === 'all' || region.severity === filter
  )

  // Estadísticas generales
  const stats = {
    total: colombiaRegions.length,
    critical: colombiaRegions.filter(r => r.severity === 'critical').length,
    high: colombiaRegions.filter(r => r.severity === 'high').length,
    medium: colombiaRegions.filter(r => r.severity === 'medium').length,
    low: colombiaRegions.filter(r => r.severity === 'low').length,
    totalPopulation: colombiaStats.totalPopulation,
    nationalWaterAccess: colombiaStats.nationalWaterAccess,
    municipalitiesAtRisk: colombiaStats.municipalitiesAtRisk,
    affectedPopulation: colombiaStats.affectedPopulation
  }

  return (
    <section id="map" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Mapa Interactivo de <span className="gradient-text">Colombia</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Explora todos los departamentos de Colombia afectados por la problemática del agua y descubre 
            las oportunidades de implementación del ODS 6 en cada territorio. Datos oficiales de 32 departamentos.
          </p>
        </div>

        {/* Estadísticas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="card p-6 text-center">
            <div className="text-3xl font-bold text-water-600 mb-2">{stats.total}</div>
            <div className="text-gray-600">Departamentos Analizados</div>
            <div className="text-xs text-gray-500 mt-1">Todos los departamentos</div>
          </div>
          <div className="card p-6 text-center">
            <div className="text-3xl font-bold text-red-600 mb-2">{stats.critical + stats.high}</div>
            <div className="text-gray-600">Alto/Crítico Impacto</div>
            <div className="text-xs text-gray-500 mt-1">Requieren atención prioritaria</div>
          </div>
          <div className="card p-6 text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">{stats.municipalitiesAtRisk}</div>
            <div className="text-gray-600">Municipios en Riesgo</div>
            <div className="text-xs text-gray-500 mt-1">Fuente: IDEAM 2022</div>
          </div>
          <div className="card p-6 text-center">
            <div className="text-3xl font-bold text-water-600 mb-2">${(colombiaStats.totalInvestment / 1000000000000).toFixed(1)}T</div>
            <div className="text-gray-600">Inversión Total</div>
            <div className="text-xs text-gray-500 mt-1">Proyectos ODS 6</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Panel de Control */}
          <div className="lg:col-span-1">
            <div className="card p-6 sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Filtros</h3>
              
              {/* Filtro por severidad */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Nivel de Severidad
                </label>
                <div className="space-y-2">
                  {[
                    { value: 'all', label: 'Todas las regiones', color: 'gray' },
                    { value: 'critical', label: 'Críticas', color: 'red' },
                    { value: 'high', label: 'Alto Impacto', color: 'orange' },
                    { value: 'medium', label: 'Medio Impacto', color: 'yellow' },
                    { value: 'low', label: 'Bajo Impacto', color: 'green' }
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setFilter(option.value)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                        filter === option.value
                          ? `bg-${option.color}-100 text-${option.color}-700 border-2 border-${option.color}-300`
                          : 'hover:bg-gray-100 text-gray-700'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Información de la región seleccionada */}
              {selectedRegion && (
                <div className="border-t pt-6">
                  <h4 className="font-semibold text-gray-900 mb-4">
                    {selectedRegion.name}
                  </h4>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <FaUsers className="text-water-600" />
                        <span className="text-sm font-medium">Población</span>
                      </div>
                      <div className="text-lg font-bold text-gray-900">
                        {selectedRegion.population.toLocaleString()}
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <FaWater className="text-water-600" />
                        <span className="text-sm font-medium">Acceso al Agua</span>
                      </div>
                      <div className="text-lg font-bold text-gray-900">
                        {selectedRegion.waterAccess}%
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <FaExclamationTriangle className="text-red-600" />
                        <span className="text-sm font-medium">Problemas</span>
                      </div>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {selectedRegion.issues.map((issue, index) => {
                          const IconComponent = issueIcons[issue] ? 
                            eval(`Fa${issueIcons[issue].replace('Fa', '')}`) : 
                            FaExclamationTriangle
                          return (
                            <li key={index} className="flex items-center gap-2">
                              <IconComponent className="text-water-600 text-xs" />
                              {issue}
                            </li>
                          )
                        })}
                      </ul>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <FaLightbulb className="text-yellow-600" />
                        <span className="text-sm font-medium">Oportunidades</span>
                      </div>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {selectedRegion.opportunities.map((opportunity, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <span>💡</span>
                            {opportunity}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {selectedRegion.sources && (
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <FaBook className="text-blue-600" />
                          <span className="text-sm font-medium">Fuentes</span>
                        </div>
                        <ul className="text-xs text-gray-500 space-y-1">
                          {selectedRegion.sources.map((source, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <FaDatabase className="text-gray-400 text-xs mt-0.5" />
                              <span>{source}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {selectedRegion.projects && (
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <FaRocket className="text-green-600" />
                          <span className="text-sm font-medium">Proyectos</span>
                        </div>
                        <ul className="text-xs text-gray-500 space-y-1">
                          {selectedRegion.projects.map((project, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <span>•</span>
                              <span>{project}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {selectedRegion.additionalData && (
                      <div className="border-t pt-4 mt-4">
                        <h5 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          <FaChartLine className="text-blue-600" />
                          Datos de Inversión
                        </h5>
                        <div className="grid grid-cols-2 gap-3 text-xs">
                          <div className="bg-blue-50 p-2 rounded">
                            <div className="font-semibold text-blue-800">Inversión</div>
                            <div className="text-blue-600">
                              ${(selectedRegion.additionalData.investment / 1000000000).toFixed(1)}B COP
                            </div>
                          </div>
                          <div className="bg-green-50 p-2 rounded">
                            <div className="font-semibold text-green-800">Beneficiarios</div>
                            <div className="text-green-600">
                              {selectedRegion.additionalData.beneficiaries.toLocaleString()}
                            </div>
                          </div>
                          <div className="bg-orange-50 p-2 rounded">
                            <div className="font-semibold text-orange-800">Finalización</div>
                            <div className="text-orange-600">
                              {selectedRegion.additionalData.completionDate}
                            </div>
                          </div>
                          <div className="bg-purple-50 p-2 rounded">
                            <div className="font-semibold text-purple-800">Prioridad</div>
                            <div className="text-purple-600">
                              {selectedRegion.additionalData.priority}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mapa */}
          <div className="lg:col-span-3">
            <div className="card p-0 overflow-hidden">
              <div className="h-[600px] w-full">
                <MapContainer
                  center={mapConfig.center}
                  zoom={mapConfig.zoom}
                  minZoom={mapConfig.minZoom}
                  maxZoom={mapConfig.maxZoom}
                  style={{ height: '100%', width: '100%' }}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  
                  {filteredRegions.map((region) => (
                    <Marker
                      key={region.id}
                      position={region.coordinates}
                      icon={createCustomIcon(region.severity)}
                      eventHandlers={{
                        click: () => setSelectedRegion(region)
                      }}
                    >
                      <Tooltip direction="top" offset={[0, -10]} opacity={1}>
                        <div className="text-center">
                          <div className="font-bold text-gray-900">{region.name}</div>
                          <div className="text-sm text-gray-600">
                            {region.severity === 'critical' && 'Crítica'}
                            {region.severity === 'high' && 'Alto Impacto'}
                            {region.severity === 'medium' && 'Medio Impacto'}
                            {region.severity === 'low' && 'Bajo Impacto'}
                          </div>
                        </div>
                      </Tooltip>
                      
                      <Popup>
                        <div className="p-2">
                          <h3 className="font-bold text-lg mb-2">{region.name}</h3>
                          <div className="space-y-2">
                            <div>
                              <span className="font-medium">Población:</span> {region.population.toLocaleString()}
                            </div>
                            <div>
                              <span className="font-medium">Acceso al agua:</span> {region.waterAccess}%
                            </div>
                            <div>
                              <span className="font-medium">Severidad:</span> 
                              <span className={`ml-1 px-2 py-1 rounded text-xs text-white bg-${region.severity === 'critical' ? 'red' : region.severity === 'high' ? 'orange' : region.severity === 'medium' ? 'yellow' : 'green'}-500`}>
                                {region.severity === 'critical' && 'Crítica'}
                                {region.severity === 'high' && 'Alto'}
                                {region.severity === 'medium' && 'Medio'}
                                {region.severity === 'low' && 'Bajo'}
                              </span>
                            </div>
                          </div>
                        </div>
                      </Popup>
                    </Marker>
                  ))}
                </MapContainer>
              </div>
            </div>
          </div>
        </div>

        {/* Leyenda */}
        <div className="mt-12">
          <div className="card p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Leyenda del Mapa</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-700 mb-3">Niveles de Severidad</h4>
                <div className="space-y-2">
                  {Object.entries(severityColors).map(([severity, color]) => (
                    <div key={severity} className="flex items-center gap-3">
                      <div 
                        className="w-4 h-4 rounded-full border-2 border-white shadow-sm"
                        style={{ backgroundColor: color }}
                      ></div>
                      <span className="text-sm text-gray-600 capitalize">
                        {severity === 'critical' && 'Crítica - Requiere acción inmediata'}
                        {severity === 'high' && 'Alto Impacto - Necesita atención prioritaria'}
                        {severity === 'medium' && 'Medio Impacto - Requiere monitoreo constante'}
                        {severity === 'low' && 'Bajo Impacto - Prevención y mantenimiento'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-3">Indicadores</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <FaUsers className="text-water-600" />
                    <span>Población total de la región</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaWater className="text-water-600" />
                    <span>Porcentaje de acceso al agua potable</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaExclamationTriangle className="text-red-600" />
                    <span>Principales problemas identificados</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaLightbulb className="text-yellow-600" />
                    <span>Oportunidades de implementación ODS 6</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Fuentes Oficiales */}
        <div className="mt-8">
          <div className="card p-6 bg-water-50 border-water-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <FaBook className="text-water-600" />
              Fuentes Oficiales y Verificables
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                  <FaBuilding className="text-water-600" />
                  Instituciones Oficiales
                </h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <FaClipboardCheck className="text-water-500 text-xs mt-1" />
                    <span><strong>IDEAM</strong> - Instituto de Hidrología, Meteorología y Estudios Ambientales</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaClipboardCheck className="text-water-500 text-xs mt-1" />
                    <span><strong>DANE</strong> - Departamento Administrativo Nacional de Estadística</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaClipboardCheck className="text-water-500 text-xs mt-1" />
                    <span><strong>DNP</strong> - Departamento Nacional de Planeación</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaClipboardCheck className="text-water-500 text-xs mt-1" />
                    <span><strong>Superintendencia de Servicios Públicos</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaClipboardCheck className="text-water-500 text-xs mt-1" />
                    <span><strong>Corporaciones Autónomas Regionales (CARs)</strong></span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                  <FaDatabase className="text-water-600" />
                  Informes y Estudios
                </h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <FaEye className="text-water-500 text-xs mt-1" />
                    <span>Estudio Nacional del Agua 2022 (IDEAM)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaEye className="text-water-500 text-xs mt-1" />
                    <span>Censo Nacional 2018 (DANE)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaEye className="text-water-500 text-xs mt-1" />
                    <span>ODS 6 Data Portal - Colombia</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaEye className="text-water-500 text-xs mt-1" />
                    <span>Encuesta de Calidad de Vida 2023 (DANE)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaEye className="text-water-500 text-xs mt-1" />
                    <span>Reportes de Gestión 2024 (CARs)</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-4 p-4 bg-white rounded-lg border border-water-200">
              <p className="text-sm text-gray-600 flex items-start gap-2">
                <FaShieldAlt className="text-water-600 text-sm mt-0.5" />
                <span>
                  <strong>Nota:</strong> Todos los datos presentados en este mapa provienen de fuentes oficiales 
                  y verificables. Las estadísticas se actualizan periódicamente según la disponibilidad de 
                  información de las instituciones competentes.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MapSection
