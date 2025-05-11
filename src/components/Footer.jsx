import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <span>© 2025 Your Company. All Rights Reserved.</span>
      <div className="footer-socials">
        <a href="#" aria-label="Facebook"> <i className="fa fa-facebook"></i> </a>
        <a href="#" aria-label="Twitter"> <i className="fa fa-twitter"></i> </a>
        <a href="#" aria-label="Instagram"> <i className="fa fa-instagram"></i> </a>
        <a href="#" aria-label="LinkedIn"> <i className="fa fa-linkedin"></i> </a>
      </div>
    </div>
  </footer>
);

export default Footer; 