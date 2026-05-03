import React, { useState } from 'react'
import './Navigation.css'

export default function Navigation({ onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'credentials', label: 'Credentials' },
    { id: 'services', label: 'Services' },
    { id: 'courses', label: 'Courses' },
    { id: 'destinations', label: 'Destinations' },
    { id: 'why-us', label: 'Why Us' },
  ]

  const handleNavClick = (id) => {
    onNavigate(id)
    setMobileMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <div className="logo">
          <span className="logo-text">BSS</span>
          <div className="logo-title">
            <div className="logo-main">Bright Side Study</div>
            <div className="logo-sub">Global Education Counsellor</div>
          </div>
        </div>

        <button 
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          ☰
        </button>

        <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          {navItems.map(item => (
            <button
              key={item.id}
              className="nav-link"
              onClick={() => handleNavClick(item.id)}
            >
              {item.label}
            </button>
          ))}
          <button 
            className="cta-button"
            onClick={() => handleNavClick('contact')}
          >
            Book Consultation
          </button>
        </div>
      </div>
    </nav>
  )
}
