import React from 'react'
import './Services.css'

export default function Services() {
  const services = [
    {
      icon: '🎓',
      title: 'UK University Admissions',
      description: 'Expert guidance for applying to top-tier UK institutions. We help with university selection, application preparation, and interview coaching.',
      features: ['Profile assessment & shortlisting', 'Personal statement writing', 'Interview preparation']
    },
    {
      icon: '🌐',
      title: 'British Council Programs',
      description: 'Access to accredited English language courses and cultural programs through our British Council partnership.',
      features: ['English language courses', 'Cultural immersion programs', 'Test preparation (IELTS)']
    },
    {
      icon: '📝',
      title: 'Student Visa Guidance',
      description: 'Navigate the complex visa application process with our expert guidance and support at every step.',
      features: ['Visa application support', 'Document preparation', 'Interview coaching']
    },
    {
      icon: '💼',
      title: 'Career Counselling',
      description: 'Personalized career guidance to align your education with your professional aspirations and goals.',
      features: ['Career path planning', 'Internship opportunities', 'Post-graduation support']
    }
  ]

  return (
    <section className="services">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">Comprehensive support tailored to your unique educational journey and career aspirations.</p>
        
        <div className="services-grid">
          {services.map((service, idx) => (
            <div key={idx} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, i) => (
                  <li key={i}>✓ {feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
