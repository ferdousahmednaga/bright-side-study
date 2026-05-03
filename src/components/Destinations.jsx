import React from 'react'
import './Destinations.css'

export default function Destinations() {
  const destinations = [
    {
      country: 'United Kingdom',
      description: 'Home to some of the world\'s most prestigious universities including Oxford, Cambridge, and LSE. Our specialty and British Council partnership.',
      topUniversities: ['Oxford', 'Cambridge', 'LSE', 'Imperial College', 'UCL'],
      programs: ['Engineering', 'Business', 'Medicine', 'Law'],
      tuition: '£15,000 - £40,000+ per year'
    },
    {
      country: 'USA',
      description: 'World-leading universities with diverse programs and opportunities. Excellent for those seeking American education.',
      topUniversities: ['Harvard', 'Stanford', 'MIT', 'Yale', 'Princeton'],
      programs: ['All fields of study available'],
      tuition: '$40,000 - $80,000+ per year'
    },
    {
      country: 'Canada',
      description: 'High-quality education with affordable tuition and welcoming immigration policies for international students.',
      topUniversities: ['University of Toronto', 'UBC', 'McGill', 'McMaster'],
      programs: ['All fields of study available'],
      tuition: '$20,000 - $50,000 per year'
    },
    {
      country: 'Australia',
      description: 'Excellent universities with strong industry connections and opportunities for post-study work.',
      topUniversities: ['ANU', 'University of Melbourne', 'UNSW', 'University of Sydney'],
      programs: ['All fields of study available'],
      tuition: '$20,000 - $45,000 per year'
    }
  ]

  return (
    <section className="destinations">
      <div className="container">
        <h2 className="section-title">Study Destinations</h2>
        <p className="section-subtitle">Explore world-class educational opportunities across the globe. We specialize in UK education while offering guidance to top destinations worldwide.</p>
        
        <div className="destinations-grid">
          {destinations.map((dest, idx) => (
            <div key={idx} className="destination-card">
              <h3>{dest.country}</h3>
              <p>{dest.description}</p>
              
              <div className="dest-info">
                <div className="info-item">
                  <h4>Top Universities</h4>
                  <ul>
                    {dest.topUniversities.map((uni, i) => (
                      <li key={i}>{uni}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="info-item">
                  <h4>Popular Programs</h4>
                  <p>{dest.programs.join(', ')}</p>
                </div>
                
                <div className="info-item">
                  <h4>Tuition Range</h4>
                  <p className="tuition">{dest.tuition}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
