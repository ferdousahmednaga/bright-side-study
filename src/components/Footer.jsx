import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>Bright Side Study is a premier Global Education Counselling service and proud British Council partner, dedicated to guiding ambitious students towards world-class educational opportunities.</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#destinations">Study Destinations</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li><a href="#services">UK University Admissions</a></li>
            <li><a href="#services">Student Visa Guidance</a></li>
            <li><a href="#services">IELTS Preparation</a></li>
            <li><a href="#services">Career Counselling</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: aferdous.fa@gmail.com</p>
          <p>Phone: +63 960 209 6079</p>
          <p>Location: Naga City, Camarines Sur</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 Bright Side Study. All rights reserved.</p>
      </div>
    </footer>
  )
}
