
import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">LingsCars</h3>
            <p className="text-gray-300">
              The UK's leading car leasing specialist, helping customers find their perfect vehicle since 1991.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-6 h-6 text-gray-300 hover:text-blue-400 cursor-pointer transition-colors" />
              <Twitter className="w-6 h-6 text-gray-300 hover:text-blue-400 cursor-pointer transition-colors" />
              <Instagram className="w-6 h-6 text-gray-300 hover:text-pink-400 cursor-pointer transition-colors" />
              <Youtube className="w-6 h-6 text-gray-300 hover:text-red-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Personal Leasing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Business Leasing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Electric Cars</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Used Cars</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Special Offers</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Leasing Guide</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-orange-400" />
                <span className="text-gray-300">0161 826 9716</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-orange-400" />
                <span className="text-gray-300">hello@lingscars.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-orange-400 mt-1" />
                <span className="text-gray-300">
                  LingsCars Ltd<br />
                  Rainton Bridge Business Park<br />
                  Houghton-le-Spring<br />
                  DH4 5RA
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 LingsCars Ltd. All rights reserved. Authorised and regulated by the Financial Conduct Authority.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
