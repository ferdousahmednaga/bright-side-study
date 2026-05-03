import React from 'react'
import './Credentials.css'

export default function Credentials() {
  return (
    <section className="credentials">
      <div className="container">
        <h2 className="section-title">Our Credentials</h2>
        <p className="section-subtitle">We are certified and recognized by the British Council, ensuring the highest standards of professional conduct and expertise.</p>
        
        <div className="credentials-grid">
          <div className="credential-card">
            <div className="credential-badge">📋</div>
            <h3>Code of Conduct</h3>
            <p className="credential-issuer">British Council Certified</p>
            <p>Completed the National Code of Ethical Practice for UK Education Agents, demonstrating commitment to professional conduct and student welfare.</p>
            <div className="credential-details">
              <p><strong>Professional:</strong> Ferdous Ahmed</p>
              <p><strong>Date:</strong> 27 April 2026</p>
              <p><strong>Valid:</strong> 2 years</p>
            </div>
          </div>

          <div className="credential-card">
            <div className="credential-badge">🎓</div>
            <h3>UK Knowledge Trained Counsellor Badge</h3>
            <p className="credential-issuer">British Council Verified</p>
            <p>Earned the prestigious UK Knowledge Trained Counsellor badge from the British Council Agent and Counsellor Training Hub, recognizing expertise in UK education counselling.</p>
            <div className="credential-details">
              <p><strong>Awarded to:</strong> Ferdous Ahmed</p>
              <p><strong>Issued:</strong> 1 May 2026</p>
              <p><strong>Expires:</strong> 1 May 2028</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
