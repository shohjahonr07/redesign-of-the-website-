
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const BrandGrid = () => {
  const [showAll, setShowAll] = useState(false);

  const brands = [
    { name: 'BMW', logo: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=100&h=60&fit=crop', deals: 45 },
    { name: 'Mercedes', logo: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=100&h=60&fit=crop', deals: 38 },
    { name: 'Audi', logo: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=100&h=60&fit=crop', deals: 52 },
    { name: 'Tesla', logo: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=100&h=60&fit=crop', deals: 23 },
    { name: 'Toyota', logo: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=100&h=60&fit=crop', deals: 67 },
    { name: 'Honda', logo: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=100&h=60&fit=crop', deals: 43 },
    { name: 'Ford', logo: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=100&h=60&fit=crop', deals: 56 },
    { name: 'Volkswagen', logo: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=100&h=60&fit=crop', deals: 41 },
    { name: 'Nissan', logo: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=100&h=60&fit=crop', deals: 34 },
    { name: 'Hyundai', logo: 'https://images.unsplash.com/photo-1551830820-330a71b99659?w=100&h=60&fit=crop', deals: 29 },
    { name: 'Kia', logo: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=100&h=60&fit=crop', deals: 31 },
    { name: 'Jaguar', logo: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=100&h=60&fit=crop', deals: 18 }
  ];

  const displayedBrands = showAll ? brands : brands.slice(0, 8);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Browse by Brand
          </h2>
          <p className="text-xl text-gray-600">
            Choose from the UK's most popular car manufacturers
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {displayedBrands.map((brand, index) => (
            <div
              key={brand.name}
              className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer group"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className="mb-4">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="w-16 h-10 mx-auto object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">{brand.name}</h3>
              <div className="bg-green-100 text-green-800 text-sm px-2 py-1 rounded-full">
                {brand.deals} deals
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center mx-auto transition-colors"
          >
            {showAll ? 'Show Less' : 'View All Brands'}
            {showAll ? <ChevronUp className="ml-2 w-5 h-5" /> : <ChevronDown className="ml-2 w-5 h-5" />}
          </button>
        </div>
      </div>
    </section>
  );
};

export default BrandGrid;
