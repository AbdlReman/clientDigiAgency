import React from 'react';
import { Rocket, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-links">
          <a href="#" className="logo">
            <Rocket size={24} />
            DigiAgency
          </a>
          <p>Transforming ideas into digital reality.</p>
        </div>
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#blog">Blog</a></li>
          </ul>
        </div>
        <div className="footer-links">
          <h3>Contact</h3>
          <ul>
            <li>
              <Mail size={16} />
              <a href="mailto:info@digiagency.com">info@digiagency.com</a>
            </li>
            <li>
              <Phone size={16} />
              <a href="tel:+1234567890">+1 (234) 567-890</a>
            </li>
            <li>
              <MapPin size={16} />
              <span>123 Digital Street, Tech City</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;