import React from 'react'
import './WhyUs.css'

export default function WhyUs() {
  const reasons = [
    {
      icon: '🤝',
      title: 'British Council Partnership',
      description: 'Official partnership with British Council for authentic UK education expertise'
    },
    {
      icon: '👤',
      title: 'Personalized Approach',
      description: 'No one-size-fits-all solutions. We tailor guidance to your unique profile and goals'
    },
    {
      icon: '🎯',
      title: 'End-to-End Support',
      description: 'From university selection through visa processing and pre-departure preparation'
    },
    {
      icon: '⭐',
      title: 'Proven Track Record',
      description: 'Hundreds of successful placements in top-tier universities worldwide'
    },
    {
      icon: '👨‍💼',
      title: 'Expert Counsellors',
      description: 'Experienced professionals with deep knowledge of international education systems'
    },
    {
      icon: '💰',
      title: 'Affordable Services',
      description: 'Transparent pricing with flexible payment options for all budgets'
    }
  ]

  return (
    <section className="why-us">
      <div className="container">
        <h2 className="section-title">Why Choose Bright Side Study?</h2>
        
        <div className="reasons-grid">
          {reasons.map((reason, idx) => (
            <div key={idx} className="reason-card">
              <div className="reason-icon">{reason.icon}</div>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>

        <div className="commitment">
          <h3>Our Commitment</h3>
          <p>At Bright Side Study, we believe every student deserves access to world-class education. Our mission is to illuminate your path to international success by providing expert guidance, personalized support, and unwavering commitment to your educational goals.</p>
          <p>Whether you're dreaming of studying in prestigious UK universities or exploring opportunities globally, we are here to make your journey smooth, successful, and transformative.</p>
        </div>
      </div>
    </section>
  )
}
