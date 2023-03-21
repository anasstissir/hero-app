import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8"></div>

        <div className="flex justify-center mt-8 space-x-4">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-2xl">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-2xl">
            <FaInstagram />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-2xl">
            <FaTwitter />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-2xl">
            <FaYoutube />
          </a>
        </div>

        <p className="mt-6 text-center text-sm">&copy; {new Date().getFullYear()} Anass Tissir Allah. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
