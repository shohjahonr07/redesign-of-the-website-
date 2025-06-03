
import React from 'react';
import { ArrowRight, Star, Users, Car } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Find Your Perfect
                <span className="text-orange-400"> Car Lease</span>
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                Discover unbeatable leasing deals on the UK's largest selection of cars. 
                From luxury to electric, we've got your perfect match.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Car className="w-6 h-6 text-orange-400 mr-2" />
                  <span className="text-2xl font-bold">10k+</span>
                </div>
                <p className="text-blue-200 text-sm">Cars Available</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-6 h-6 text-orange-400 mr-2" />
                  <span className="text-2xl font-bold">50k+</span>
                </div>
                <p className="text-blue-200 text-sm">Happy Customers</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Star className="w-6 h-6 text-orange-400 mr-2" />
                  <span className="text-2xl font-bold">4.8</span>
                </div>
                <p className="text-blue-200 text-sm">Average Rating</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center transition-all transform hover:scale-105">
                Browse Deals
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-all">
                Calculate Lease
              </button>
            </div>
          </div>

          {/* Right Content - Car Showcase */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&h=400&fit=crop"
                alt="Featured Car"
                className="w-full h-auto rounded-2xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500"
              />
            </div>
            
            {/* Floating Deal Card */}
            <div className="absolute top-8 right-8 bg-white text-gray-800 p-4 rounded-lg shadow-lg z-20">
              <div className="text-sm text-gray-600">From</div>
              <div className="text-2xl font-bold text-green-600">£299</div>
              <div className="text-sm text-gray-600">per month</div>
            </div>

            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-transparent rounded-2xl transform rotate-1"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
