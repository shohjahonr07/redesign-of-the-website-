import React, { useState } from 'react';
import { ChevronDown, ChevronUp, TrendingUp } from 'lucide-react';

const BrandGrid = () => {
  const [showAll, setShowAll] = useState(false);

  const brands = [
    { name: 'BMW', logo: 'https://images.unsplash.com/photo-1617886903355-9354bb57751f?w=100&h=60&fit=crop', deals: 45, trending: true },
    { name: 'Mercedes', logo: 'https://images.unsplash.com/photo-1606016159991-5e4c63b6d2ad?w=100&h=60&fit=crop', deals: 38, trending: false },
    { name: 'Audi', logo: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=100&h=60&fit=crop', deals: 52, trending: true },
    { name: 'Tesla', logo: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=100&h=60&fit=crop', deals: 23, trending: true },
    { name: 'Toyota', logo: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=100&h=60&fit=crop', deals: 67, trending: false },
    { name: 'Honda', logo: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=100&h=60&fit=crop', deals: 43, trending: false },
    { name: 'Ford', logo: 'https://images.unsplash.com/photo-1612825173281-9a193378527e?w=100&h=60&fit=crop', deals: 56, trending: false },
    { name: 'Volkswagen', logo: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=100&h=60&fit=crop', deals: 41, trending: false },
    { name: 'Nissan', logo: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=100&h=60&fit=crop', deals: 34, trending: false },
    { name: 'Hyundai', logo: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=100&h=60&fit=crop', deals: 29, trending: false },
    { name: 'Kia', logo: 'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=100&h=60&fit=crop', deals: 31, trending: false },
    { name: 'Jaguar', logo: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=100&h=60&fit=crop', deals: 18, trending: false }
  ];

  const displayedBrands = showAll ? brands : brands.slice(0, 8);

  const handleBrandClick = (brandName: string) => {
    alert(`Browsing ${brandName} cars - showing all available deals...`);
    // In a real app, this would filter cars by brand
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            Browse by <span className="gradient-text">Brand</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Choose from the UK's most popular car manufacturers with exclusive deals and offers
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {displayedBrands.map((brand, index) => (
            <div
              key={brand.name}
              onClick={() => handleBrandClick(brand.name)}
              className="bg-white rounded-xl p-6 text-center hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 cursor-pointer group relative overflow-hidden animate-fade-in"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Trending Badge */}
              {brand.trending && (
                <div className="absolute top-3 right-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center animate-bounce-gentle">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  Hot
                </div>
              )}

              {/* Background Gradient on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-600/0 group-hover:from-orange-500/5 group-hover:to-orange-600/10 transition-all duration-500 rounded-xl"></div>

              <div className="relative z-10">
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  <div className="w-20 h-12 mx-auto bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-orange-50 transition-colors duration-300">
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="max-w-16 max-h-10 object-contain"
                    />
                  </div>
                </div>
                
                <h3 className="font-bold text-slate-800 mb-3 text-lg group-hover:text-orange-600 transition-colors duration-300">
                  {brand.name}
                </h3>
                
                <div className="bg-gradient-to-r from-green-100 to-green-200 text-green-800 text-sm px-3 py-2 rounded-full inline-flex items-center font-semibold group-hover:from-orange-100 group-hover:to-orange-200 group-hover:text-orange-800 transition-all duration-300">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2 group-hover:bg-orange-500 transition-colors duration-300"></span>
                  {brand.deals} deals
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center mx-auto transition-all duration-300 transform hover:scale-105 hover:shadow-xl group"
          >
            {showAll ? 'Show Less Brands' : 'View All Brands'}
            {showAll ? (
              <ChevronUp className="ml-2 w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
            ) : (
              <ChevronDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default BrandGrid;
