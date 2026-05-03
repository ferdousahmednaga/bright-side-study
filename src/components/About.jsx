import React from 'react'
import './About.css'

export default function About() {
  const features = [
    {
      icon: '📚',
      title: 'Expert Knowledge',
      description: 'Deep expertise in UK education systems, university admissions, and British Council programs with years of proven success.'
    },
    {
      icon: '🌍',
      title: 'Global Reach',
      description: 'Access to top universities worldwide. Whether UK, USA, Canada, or Australia, we guide you to the best fit.'
    },
    {
      icon: '⭐',
      title: 'Proven Success',
      description: 'Hundreds of students successfully placed in prestigious institutions. Your success is our mission.'
    }
  ]

  return (
    <section className="about">
      <div className="container">
        <h2 className="section-title">About Bright Side Study</h2>
        <p className="section-subtitle">We are a premier Global Education Counselling service and proud British Council partner, dedicated to guiding ambitious students towards world-class educational opportunities.</p>
        
        <div className="features-grid">
          {features.map((feature, idx) => (
            <div key={idx} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
