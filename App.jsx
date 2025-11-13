import React from 'react'
import Navigation from './components/Navigation'
import IntroSection from './components/IntroSection'
import WaterIssuesSection from './components/WaterIssuesSection'
import GoalsSection from './components/GoalsSection'
import MapSection from './components/MapSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div id="intro">
        <IntroSection />
      </div>
      <div id="issues">
        <WaterIssuesSection />
      </div>
      <div id="goals">
        <GoalsSection />
      </div>
      <div id="map">
        <MapSection />
      </div>
      <Footer />
    </div>
  )
}

export default App
