import React, { useState } from 'react';
import { Car } from '../types/car';
import CarCard from './CarCard';
import CarModal from './CarModal';
import { Filter, SlidersHorizontal } from 'lucide-react';

interface DealsSectionProps {
  cars: Car[];
}

const DealsSection: React.FC<DealsSectionProps> = ({ cars }) => {
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [filterType, setFilterType] = useState<'all' | 'personal' | 'business'>('all');
  const [showFilters, setShowFilters] = useState(false);

  const filteredCars = cars.filter(car => 
    filterType === 'all' || car.category === filterType
  );

  const handleCarClick = (car: Car) => {
    setSelectedCar(car);
  };

  return (
    <section id="deals-section" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Latest Car Deals
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Discover our hand-picked selection of the best leasing deals available today
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="flex bg-gray-100 p-1 rounded-lg">
              <button
                onClick={() => setFilterType('all')}
                className={`px-6 py-2 rounded-md font-medium transition-all ${
                  filterType === 'all' 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                All Deals
              </button>
              <button
                onClick={() => setFilterType('personal')}
                className={`px-6 py-2 rounded-md font-medium transition-all ${
                  filterType === 'personal' 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Personal
              </button>
              <button
                onClick={() => setFilterType('business')}
                className={`px-6 py-2 rounded-md font-medium transition-all ${
                  filterType === 'business' 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Business
              </button>
            </div>

            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center px-6 py-2 border border-gray-300 rounded-lg hover:border-blue-500 transition-colors"
            >
              <SlidersHorizontal className="w-5 h-5 mr-2" />
              Advanced Filters
            </button>
          </div>
        </div>

        {/* Cars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.map((car) => (
            <CarCard
              key={car.id}
              car={car}
              onCarClick={handleCarClick}
            />
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors">
            View All {cars.length}+ Deals
          </button>
        </div>
      </div>

      {/* Car Modal */}
      {selectedCar && (
        <CarModal
          car={selectedCar}
          onClose={() => setSelectedCar(null)}
        />
      )}
    </section>
  );
};

export default DealsSection;
