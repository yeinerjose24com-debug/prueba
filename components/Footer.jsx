import React from 'react'
import { FaWater, FaGlobe, FaHeart, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo y Descripción */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-water-600 rounded-xl flex items-center justify-center">
                <FaWater className="text-white text-2xl" />
              </div>
              <span className="text-2xl font-bold">ODS 6 Colombia</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Portal informativo dedicado al Objetivo de Desarrollo Sostenible 6: 
              Agua Limpia y Saneamiento para Todos en Colombia. 
              Construyendo un futuro sostenible para todos los colombianos.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-water-600 rounded-lg flex items-center justify-center transition-colors">
                <FaLinkedin className="text-lg" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-water-600 rounded-lg flex items-center justify-center transition-colors">
                <FaTwitter className="text-lg" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-water-600 rounded-lg flex items-center justify-center transition-colors">
                <FaInstagram className="text-lg" />
              </a>
            </div>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#intro" className="text-gray-300 hover:text-white transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#issues" className="text-gray-300 hover:text-white transition-colors">
                  Problemática del Agua
                </a>
              </li>
              <li>
                <a href="#goals" className="text-gray-300 hover:text-white transition-colors">
                  Metas del ODS 6
                </a>
              </li>
              <li>
                <a href="#map" className="text-gray-300 hover:text-white transition-colors">
                  Mapa Interactivo
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Recursos
                </a>
              </li>
            </ul>
          </div>

          {/* Información de Contacto */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Información</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-300">
                <FaGlobe className="text-water-500" />
                <span>Colombia</span>
              </li>
              <li className="text-gray-300">
                Portal educativo sobre ODS 6
              </li>
              <li className="text-gray-300">
                Acceso universal al agua
              </li>
            </ul>
          </div>
        </div>

        {/* Línea divisoria y Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 ODS 6 Colombia. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>Hecho con</span>
              <FaHeart className="text-red-500" />
              <span>para Colombia</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
