import React, { useState, useEffect } from 'react'
import { FaWater, FaBars, FaTimes } from 'react-icons/fa'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-soft' : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-water-600 rounded-xl flex items-center justify-center">
              <FaWater className="text-white text-xl" />
            </div>
            <span className="text-xl font-bold text-gray-900">
              ODS 6 Colombia
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('intro')}
              className="text-gray-700 hover:text-water-600 font-medium transition-colors"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection('issues')}
              className="text-gray-700 hover:text-water-600 font-medium transition-colors"
            >
              Problemática
            </button>
            <button 
              onClick={() => scrollToSection('goals')}
              className="text-gray-700 hover:text-water-600 font-medium transition-colors"
            >
              Metas
            </button>
            <button 
              onClick={() => scrollToSection('map')}
              className="text-gray-700 hover:text-water-600 font-medium transition-colors"
            >
              Mapa
            </button>
            <button className="btn-primary text-sm py-2 px-6">
              Más Información
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-water-600 transition-colors"
          >
            {isOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md rounded-2xl shadow-strong mx-4 mb-4 p-6">
            <div className="flex flex-col gap-4">
              <button 
                onClick={() => scrollToSection('intro')}
                className="text-gray-700 hover:text-water-600 font-medium transition-colors text-left py-2"
              >
                Inicio
              </button>
              <button 
                onClick={() => scrollToSection('issues')}
                className="text-gray-700 hover:text-water-600 font-medium transition-colors text-left py-2"
              >
                Problemática
              </button>
              <button 
                onClick={() => scrollToSection('goals')}
                className="text-gray-700 hover:text-water-600 font-medium transition-colors text-left py-2"
              >
                Metas
              </button>
              <button 
                onClick={() => scrollToSection('map')}
                className="text-gray-700 hover:text-water-600 font-medium transition-colors text-left py-2"
              >
                Mapa
              </button>
              <button className="btn-primary text-sm py-2 px-6 w-full mt-4">
                Más Información
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
