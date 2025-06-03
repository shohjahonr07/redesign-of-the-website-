
import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Find Your
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600"> Perfect</span>
              <br />
              Car Today
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Discover thousands of quality used cars with transparent pricing, detailed histories, and hassle-free buying experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Browse Cars
              </button>
              <button className="border border-slate-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-slate-800 transition-all duration-300 flex items-center justify-center gap-2">
                Sell Your Car
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-slate-700">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">50K+</div>
                <div className="text-slate-400 text-sm">Cars Available</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">98%</div>
                <div className="text-slate-400 text-sm">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">24/7</div>
                <div className="text-slate-400 text-sm">Support</div>
              </div>
            </div>
          </div>

          {/* Car Showcase */}
          <div className="relative">
            <div className="relative z-10 transform hover:scale-105 transition-transform duration-700">
              <img
                src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop&crop=center"
                alt="Featured Car"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-2xl"></div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-white">
              <div className="text-sm text-slate-300">Starting from</div>
              <div className="text-2xl font-bold">$15,999</div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-white">
              <div className="text-sm text-slate-300">New arrivals</div>
              <div className="text-2xl font-bold">Daily</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
