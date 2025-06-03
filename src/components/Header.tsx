
import React, { useState } from 'react';
import { Search, Phone, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex justify-between items-center py-2 border-b border-gray-100">
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <span className="flex items-center">
              <Phone className="w-4 h-4 mr-1" />
              0161 826 9716
            </span>
            <span>Mon-Fri 9am-7pm | Sat 10am-6pm</span>
          </div>
          <div className="hidden md:flex items-center space-x-4 text-sm">
            <a href="#" className="text-blue-600 hover:text-blue-800">Business Leasing</a>
            <a href="#" className="text-blue-600 hover:text-blue-800">Personal Leasing</a>
            <a href="#" className="text-blue-600 hover:text-blue-800">Contact</a>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <img 
              src="https://images.unsplash.com/photo-1555215695-3004980ad54e?w=120&h=40&fit=crop" 
              alt="LingsCars" 
              className="h-10 w-auto mr-8"
            />
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for cars, brands, or deals..."
                className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Get Quote
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Call Back
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search cars..."
                  className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
              <a href="#" className="text-gray-600 hover:text-blue-600">Business Leasing</a>
              <a href="#" className="text-gray-600 hover:text-blue-600">Personal Leasing</a>
              <a href="#" className="text-gray-600 hover:text-blue-600">Contact</a>
              <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold">
                Get Quote
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
