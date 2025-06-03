
import React from 'react';
import { ArrowRight, Star, Users, Car, Calculator, Search } from 'lucide-react';

const Hero = () => {
  const handleBrowseDeals = () => {
    const dealsSection = document.getElementById('deals-section');
    if (dealsSection) {
      dealsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCalculateLease = () => {
    alert('Lease Calculator - Opening calculator tool...');
    // In a real app, this would open a lease calculator modal or page
  };

  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500/10 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-orange-400/5 rounded-full animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-orange-300/10 rounded-full animate-bounce-gentle"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Find Your Perfect
                <span className="gradient-text block"> Car Lease</span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed max-w-lg">
                Discover unbeatable leasing deals on the UK's largest selection of cars. 
                From luxury to electric, we've got your perfect match.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center group hover-lift">
                <div className="flex items-center justify-center mb-3 p-3 bg-orange-500/20 rounded-full w-16 h-16 mx-auto group-hover:bg-orange-500/30 transition-all duration-300">
                  <Car className="w-8 h-8 text-orange-400" />
                </div>
                <div className="text-3xl font-bold gradient-text">10k+</div>
                <p className="text-slate-400 text-sm">Cars Available</p>
              </div>
              <div className="text-center group hover-lift">
                <div className="flex items-center justify-center mb-3 p-3 bg-orange-500/20 rounded-full w-16 h-16 mx-auto group-hover:bg-orange-500/30 transition-all duration-300">
                  <Users className="w-8 h-8 text-orange-400" />
                </div>
                <div className="text-3xl font-bold gradient-text">50k+</div>
                <p className="text-slate-400 text-sm">Happy Customers</p>
              </div>
              <div className="text-center group hover-lift">
                <div className="flex items-center justify-center mb-3 p-3 bg-orange-500/20 rounded-full w-16 h-16 mx-auto group-hover:bg-orange-500/30 transition-all duration-300">
                  <Star className="w-8 h-8 text-orange-400" />
                </div>
                <div className="text-3xl font-bold gradient-text">4.8</div>
                <p className="text-slate-400 text-sm">Average Rating</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleBrowseDeals}
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center transition-all duration-300 transform hover:scale-105 hover:shadow-xl group"
              >
                <Search className="mr-3 w-5 h-5 group-hover:animate-bounce" />
                Browse Deals
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button 
                onClick={handleCalculateLease}
                className="glass-effect text-white hover:bg-white/20 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
              >
                <Calculator className="mr-3 w-5 h-5 group-hover:animate-bounce" />
                Calculate Lease
              </button>
            </div>
          </div>

          {/* Right Content - Car Showcase */}
          <div className="relative animate-scale-in">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&h=400&fit=crop"
                alt="Featured Car"
                className="w-full h-auto rounded-2xl shadow-2xl transform rotate-2 hover:rotate-0 transition-all duration-500 hover:scale-105"
              />
            </div>
            
            {/* Floating Deal Card */}
            <div className="absolute top-8 right-8 bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-xl shadow-2xl z-20 animate-bounce-gentle">
              <div className="text-sm font-medium">From only</div>
              <div className="text-3xl font-bold">£299</div>
              <div className="text-sm opacity-90">per month</div>
            </div>

            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-transparent rounded-2xl transform rotate-1 animate-pulse-slow"></div>
            
            {/* Additional floating elements */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-orange-500/20 rounded-full animate-float"></div>
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-orange-400/30 rounded-full animate-bounce-gentle"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
