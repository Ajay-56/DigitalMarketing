import React from 'react';
import './index.css';

function DigitalMarketingHomePage() {
  return (
    <div className="container">
      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="hero-title">Elevate Your Business with Digital Marketing</h1>
        <p className="hero-subtitle">
          Get tailored solutions for SEO, social media marketing, and content strategy to help you stand out online.
        </p>
        <button className="cta-button">Start Your Journey</button>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2 className="section-title">Our Services</h2>
        <div className="services-list">
          <div className="service-item">
            <h3 className="service-title">SEO Optimization</h3>
            <p className="service-description">
              Improve your search engine rankings and drive organic traffic.
            </p>
          </div>
          <div className="service-item">
            <h3 className="service-title">Social Media Marketing</h3>
            <p className="service-description">
              Connect with your audience and build brand loyalty on social media.
            </p>
          </div>
          <div className="service-item">
            <h3 className="service-title">Content Marketing</h3>
            <p className="service-description">
              Share engaging content that attracts and retains customers.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2 className="section-title">Client Testimonials</h2>
        <div className="testimonials-list">
          <div className="testimonial-item">
            <p className="testimonial-text">
              “Our online presence improved drastically thanks to their digital marketing strategies.”
            </p>
            <p className="client-name">- Alex Johnson, CEO of InnovateX</p>
          </div>
          <div className="testimonial-item">
            <p className="testimonial-text">
              “The results exceeded our expectations, with a significant boost in sales and engagement.”
            </p>
            <p className="client-name">- Lisa Brown, Founder of HealthWave</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DigitalMarketingHomePage;
