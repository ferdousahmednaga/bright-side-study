import React from 'react'
import './Courses.css'

export default function Courses() {
  return (
    <section className="courses">
      <div className="container">
        <h2 className="section-title">How to Apply for UK Study</h2>
        <p className="section-subtitle">Learn the step-by-step process to secure your place at a top UK university</p>
        
        <div className="courses-content">
          <div className="courses-image">
            <img src="/uk-study-apply.jpg" alt="How to apply for UK study" />
          </div>
          
          <div className="courses-details">
            <h3>Your Path to UK Education</h3>
            <p>Studying in the UK opens so many doors to your future. Our comprehensive guidance covers:</p>
            
            <div className="courses-steps">
              <div className="step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>Profile Assessment</h4>
                  <p>We evaluate your academic background, interests, and career goals to identify the best universities and programs for you.</p>
                </div>
              </div>

              <div className="step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>University Selection</h4>
                  <p>Shortlist universities that match your profile and aspirations, considering rankings, location, and program quality.</p>
                </div>
              </div>

              <div className="step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>Application Preparation</h4>
                  <p>We help you craft compelling personal statements and prepare all required documents for your applications.</p>
                </div>
              </div>

              <div className="step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h4>Interview Coaching</h4>
                  <p>Practice interviews with our experts to build confidence and make a strong impression on admissions teams.</p>
                </div>
              </div>

              <div className="step">
                <div className="step-number">5</div>
                <div className="step-content">
                  <h4>Visa & Pre-Departure</h4>
                  <p>Complete support with visa applications and preparation for your move to the UK.</p>
                </div>
              </div>
            </div>

            <div className="courses-benefits">
              <h4>Why Choose Bright Side Study?</h4>
              <ul>
                <li>✓ British Council certified counsellors</li>
                <li>✓ Personalized guidance for every student</li>
                <li>✓ Proven track record of successful admissions</li>
                <li>✓ End-to-end support from application to arrival</li>
                <li>✓ Affordable and transparent pricing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
