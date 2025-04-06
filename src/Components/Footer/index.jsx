import React from 'react';
import './Footer.css'; // Import the CSS file
import { Facebook, Twitter, LinkedIn, Instagram } from '@mui/icons-material'; // MUI icons

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo and Description */}
        <div className="footer-section">
          <h2 className="footer-logo">chemAuction</h2>
          <p>Your trusted marketplace for buying and selling excess chemical raw materials.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/about-us">About Us</a></li>
            <li><a href="/contact-us">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>123 ChemStreet, Industrial Park, CityName</p>
          <p>Email: info@chemauction.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>

        {/* Social Media Links */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook className="social-icon" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter className="social-icon" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <LinkedIn className="social-icon" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram className="social-icon" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} chemAuction. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
