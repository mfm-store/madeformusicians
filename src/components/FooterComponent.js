import React from 'react';
import { hoverSecondaryTextColor, primaryBgColor, textColor } from '../config/theme';

// Define color variables
const primaryColor = primaryBgColor;
const linkHoverColor = hoverSecondaryTextColor;

const FooterComponent = () => {
  return (
    <footer className={`${primaryColor} ${textColor} p-8 mt-16`}>
      <div className="container mx-auto flex flex-col md:flex-row items-start ">
        <div className="mb-4 md:mb-0 text-left md:text-left mr-[40px]">
          <h3 className="text-2xl font-bold mb-2">Made For Musicians (By Gift Assist)</h3>
          <p>Your go-to place for high-quality music instrument accessories.</p>
          <p>Contact us: madeformusicians@gmail.com</p>
          <p>Instagram-Content: @madeformusicians</p>
          <p>Instagram-Store: @madeformusicians.musicstore</p>
          <p>Whatsapp: </p>
        </div>
        <div className="mb-4 md:mb-0 mr-[40px]">
          <h3 className="text-2xl font-bold mb-2">Quick Links</h3>
          <ul>
            <li><a href="#" className={linkHoverColor}>Home</a></li>
            <li><a href="#" className={linkHoverColor}>Products</a></li>
            <li><a href="#" className={linkHoverColor}>About Us</a></li>
            <li><a href="#" className={linkHoverColor}>Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-2">Connect with Us</h3>
          <div className="flex space-x-4">
            <a href="#" className={`text-xl ${linkHoverColor}`}>
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className={`text-xl ${linkHoverColor}`}>
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className={`text-xl ${linkHoverColor}`}>
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <p>Follow us on social media for updates and promotions.</p>
        </div>
      </div>
      <div className="mt-8 text-center md:text-left">
        <p>GST Number : 06ABQPB7232E1ZW</p>
      </div>
    </footer>
  );
};

export default FooterComponent;
