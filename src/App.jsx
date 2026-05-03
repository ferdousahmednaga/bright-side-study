import React, { useState } from 'react'
import './App.css'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Credentials from './components/Credentials'
import Services from './components/Services'
import Courses from './components/Courses'
import Destinations from './components/Destinations'
import WhyUs from './components/WhyUs'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="app">
      <Navigation onNavigate={scrollToSection} />
      <div id="home"><Hero /></div>
      <div id="about"><About /></div>
      <div id="credentials"><Credentials /></div>
      <div id="services"><Services /></div>
      <div id="courses"><Courses /></div>
      <div id="destinations"><Destinations /></div>
      <div id="why-us"><WhyUs /></div>
      <div id="contact"><Contact /></div>
      <Footer />
    </div>
  )
}

export default App
// Build trigger
