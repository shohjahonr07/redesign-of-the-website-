
import React, { useState } from 'react';
import { Search, Phone, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      alert(`Searching for: ${searchQuery}`);
      // In a real app, this would navigate to search results
    }
  };

  const handleGetQuote = () => {
    alert('Get Quote feature - redirecting to quote form...');
    // In a real app, this would open a quote form or navigate to quote page
  };

  const handleCallBack = () => {
    alert('Call Back requested - we will contact you within 24 hours!');
    // In a real app, this would open a callback form
  };

  const handlePhoneCall = () => {
    window.location.href = 'tel:01618269716';
  };

  return (
    <header className="bg-slate-900 shadow-2xl sticky top-0 z-50 animate-fade-in">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex justify-between items-center py-3 border-b border-slate-700">
          <div className="flex items-center space-x-6 text-sm text-slate-300">
            <button 
              onClick={handlePhoneCall}
              className="flex items-center hover:text-orange-400 transition-colors duration-300"
            >
              <Phone className="w-4 h-4 mr-2" />
              0161 826 9716
            </button>
            <span className="hidden md:block">Mon-Fri 9am-7pm | Sat 10am-6pm</span>
          </div>
          <div className="hidden md:flex items-center space-x-6 text-sm">
            <a href="#business" className="text-orange-400 hover:text-orange-300 transition-colors duration-300">Business Leasing</a>
            <a href="#personal" className="text-orange-400 hover:text-orange-300 transition-colors duration-300">Personal Leasing</a>
            <a href="#contact" className="text-orange-400 hover:text-orange-300 transition-colors duration-300">Contact</a>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-white mr-8">
              <span className="gradient-text">Lings</span>
              <span className="text-orange-400">Cars</span>
            </div>
          </div>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full group">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for cars, brands, or deals..."
                className="w-full px-6 py-3 pl-12 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300 group-hover:border-slate-500"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5 group-hover:text-orange-400 transition-colors duration-300" />
            </div>
          </form>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={handleGetQuote}
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Get Quote
            </button>
            <button 
              onClick={handleCallBack}
              className="bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 border border-slate-600 hover:border-orange-400"
            >
              Call Back
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white hover:text-orange-400 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-700 animate-slide-up">
            <div className="flex flex-col space-y-4">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search cars..."
                  className="w-full px-4 py-3 pl-12 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              </form>
              <a href="#business" className="text-slate-300 hover:text-orange-400 transition-colors duration-300">Business Leasing</a>
              <a href="#personal" className="text-slate-300 hover:text-orange-400 transition-colors duration-300">Personal Leasing</a>
              <a href="#contact" className="text-slate-300 hover:text-orange-400 transition-colors duration-300">Contact</a>
              <button 
                onClick={handleGetQuote}
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
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
