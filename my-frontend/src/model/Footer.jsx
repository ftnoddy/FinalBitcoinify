import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

const Footer = () => {
  return (
    <footer className="bg-gray-800 px-4 sm:px-6 py-8 text-white">
      <div className="container mx-auto max-w-4xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div className="grid gap-2">
          <h3 className="font-semibold text-lg">About</h3>
          <Link to="/about" className="text-sm hover:underline">About Us</Link>
          <Link to="#about-team" className="text-sm hover:underline">Team</Link>
          <Link to="#about-careers" className="text-sm hover:underline">Careers</Link>
        </div>
        <div className="grid gap-2">
          <h3 className="font-semibold text-lg">Policies</h3>
          <Link to="/privacy-policy" className="text-sm hover:underline">Privacy Policy</Link>
          <Link to="/terms-conditions" className="text-sm hover:underline">Terms of Service</Link>
          <Link to="/policies-refund" className="text-sm hover:underline">Refund & Return Policy</Link>
          <Link to="/shipping-policies" className="text-sm hover:underline">Shipping Policies</Link>
        </div>
        <div className="grid gap-2">
          <h3 className="font-semibold text-lg">Social</h3>
          <a href="#social-twitter" className="text-sm flex items-center gap-2 hover:text-indigo-500 transition-colors">
            <FontAwesomeIcon icon={faTwitter} /> Twitter
          </a>
          <a href="#social-facebook" className="text-sm flex items-center gap-2 hover:text-indigo-500 transition-colors">
            <FontAwesomeIcon icon={faFacebook} /> Facebook
          </a>
          <a href="#social-instagram" className="text-sm flex items-center gap-2 hover:text-indigo-500 transition-colors">
            <FontAwesomeIcon icon={faInstagram} /> Instagram
          </a>
        </div>
        <div className="grid gap-2">
          <h3 className="font-semibold text-lg">Contact</h3>
          <a href="mailto:info@cryptotracker.com" className="text-sm flex items-center gap-2 hover:text-indigo-500 transition-colors">
            <FontAwesomeIcon icon={faEnvelope} /> info@cryptotracker.com
          </a>
          <a href="tel:+1234567890" className="text-sm flex items-center gap-2 hover:text-indigo-500 transition-colors">
            <FontAwesomeIcon icon={faPhone} /> +1 234 567 890
          </a>
          <a href="#contact-address" className="text-sm flex items-center gap-2 hover:text-indigo-500 transition-colors">
            <FontAwesomeIcon icon={faMapMarkerAlt} /> 123 Crypto St, Blockchain City
          </a>
        </div>
      </div>
      <div className="container mx-auto mt-8 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} CryptoTracker. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
