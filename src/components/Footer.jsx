import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; // Optional: For social media icons

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white py-6">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Footer Left */}
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold">EDY</h3>
            <p className="mt-2 text-gray-400 text-sm">
              Your company slogan or brief description goes here.
            </p>
          </div>

          {/* Footer Center */}
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a
              href="#about"
              className="text-gray-300 hover:text-white transition duration-200"
            >
              About
            </a>
            <a
              href="#services"
              className="text-gray-300 hover:text-white transition duration-200"
            >
              Services
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white transition duration-200"
            >
              Contact
            </a>
          </div>

          {/* Footer Right - Social Media Icons */}
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-gray-300 hover:text-white transition duration-200" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-gray-300 hover:text-white transition duration-200" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="text-gray-300 hover:text-white transition duration-200" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-gray-300 hover:text-white transition duration-200" />
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-6 text-gray-400 text-sm">
          <p>&copy; 2024 EDY. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
