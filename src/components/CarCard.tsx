
import React from 'react';
import { Car } from '../types/car';
import { Fuel, Calendar, Settings, ArrowRight } from 'lucide-react';

interface CarCardProps {
  car: Car;
  onCarClick: (car: Car) => void;
}

const CarCard: React.FC<CarCardProps> = ({ car, onCarClick }) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div 
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
      onClick={() => onCarClick(car)}
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={car.image}
          alt={`${car.year} ${car.make} ${car.model}`}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            {car.condition}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            {car.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            {car.year} {car.make} {car.model}
          </h3>
          <div className="flex items-baseline space-x-2">
            <span className="text-3xl font-bold text-blue-600">
              {formatPrice(car.monthlyPrice)}
            </span>
            <span className="text-gray-500 text-sm">/month</span>
          </div>
          <p className="text-sm text-gray-500 mt-1">
            Initial payment: {formatPrice(car.initialPayment)}
          </p>
        </div>

        {/* Details */}
        <div className="grid grid-cols-3 gap-4 text-sm mb-6">
          <div className="flex flex-col items-center text-center">
            <Fuel className="w-5 h-5 text-gray-400 mb-1" />
            <span className="text-gray-600 font-medium">{car.fuelType}</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <Settings className="w-5 h-5 text-gray-400 mb-1" />
            <span className="text-gray-600 font-medium">{car.transmission}</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <Calendar className="w-5 h-5 text-gray-400 mb-1" />
            <span className="text-gray-600 font-medium">{car.term}m</span>
          </div>
        </div>

        {/* Action Button */}
        <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform group-hover:scale-105 flex items-center justify-center">
          View Deal
          <ArrowRight className="ml-2 w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default CarCard;
