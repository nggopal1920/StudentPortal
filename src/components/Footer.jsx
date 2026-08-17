import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <h3 id="footer-logo">StudentPortal</h3>
        <p>Connecting students with quality notes and placement guides.</p>
        
        {/* Social Media & Contact Icons */}
        <div className="footer-icons">
          <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" title="GitHub">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://instagram.com/your-username" target="_blank" rel="noopener noreferrer" title="Instagram">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://facebook.com/your-username" target="_blank" rel="noopener noreferrer" title="Facebook">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="mailto:your-email@gmail.com" title="Email Us">
            <i className="fa-solid fa-envelope"></i>
          </a>
          <a href="tel:+919876543210" title="Call Us">
            <i className="fa-solid fa-phone"></i>
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 StudentPortal. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;