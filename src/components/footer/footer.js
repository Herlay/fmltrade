import React from 'react';
import './footer.css';
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { SiWhatsapp } from "react-icons/si";
import { SiInstagram } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            FML Trading specializes in agricultural products sourcing, import/export, 
            logistics, and business development. Your trusted partner for global trade.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/catalog">Catalog</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Our Location</h3>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="#" aria-label="Facebook"><FaFacebookF/></a>
            <a href="#" aria-label="Twitter"><BsTwitterX/></a>
            <a href="#" aria-label="Whatsapp"><SiWhatsapp/></a>
            <a href="#" aria-label="Instagram"><SiInstagram/></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} FML Trading. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
