import React, { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: 'UK',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your inquiry! We will contact you soon.')
    setFormData({ name: '', email: '', phone: '', destination: 'UK', message: '' })
  }

  return (
    <section className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Ready to start your journey? Book a free consultation with our expert counsellors today.</p>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            
            <div className="info-item">
              <h4>📧 Email</h4>
              <p>aferdous.fa@gmail.com</p>
            </div>

            <div className="info-item">
              <h4>📞 Phone</h4>
              <p>+63 960 209 6079</p>
            </div>

            <div className="info-item">
              <h4>📍 Office Location</h4>
              <p>Taste of Spice, Mayon Avenue, Naga City, Camarines Sur</p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Book Consultation</h3>
            
            <div className="form-group">
              <label>Your Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="form-group">
              <label>Your Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label>Your Phone *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                required
              />
            </div>

            <div className="form-group">
              <label>Study Destination *</label>
              <select
                name="destination"
                value={formData.destination}
                onChange={handleChange}
              >
                <option value="UK">United Kingdom</option>
                <option value="USA">USA</option>
                <option value="Canada">Canada</option>
                <option value="Australia">Australia</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label>Tell us about your educational goals... *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Share your educational goals and aspirations"
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">Book My Free Consultation</button>
          </form>
        </div>
      </div>
    </section>
  )
}
