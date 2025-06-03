
import React from 'react';

export interface Car {
  id: number;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  fuelType: string;
  transmission: string;
  image: string;
  condition: string;
}

interface CarCardProps {
  car: Car;
  onCarClick: (car: Car) => void;
}

const CarCard: React.FC<CarCardProps> = ({ car, onCarClick }) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const formatMileage = (mileage: number) => {
    return new Intl.NumberFormat('en-US').format(mileage);
  };

  return (
    <div 
      className="bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border border-slate-700"
      onClick={() => onCarClick(car)}
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={car.image}
          alt={`${car.year} ${car.make} ${car.model}`}
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            {car.condition}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <span className="bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
            {car.year}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-white mb-1">
            {car.year} {car.make} {car.model}
          </h3>
          <p className="text-2xl font-bold text-blue-400 mb-2">
            {formatPrice(car.price)}
          </p>
        </div>

        {/* Details */}
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex flex-col">
            <span className="text-slate-400">Mileage</span>
            <span className="text-white font-semibold">{formatMileage(car.mileage)} miles</span>
          </div>
          <div className="flex flex-col">
            <span className="text-slate-400">Fuel Type</span>
            <span className="text-white font-semibold">{car.fuelType}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-slate-400">Transmission</span>
            <span className="text-white font-semibold">{car.transmission}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-slate-400">Condition</span>
            <span className="text-white font-semibold">{car.condition}</span>
          </div>
        </div>

        {/* Action Button */}
        <button className="w-full mt-6 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
          View Details
        </button>
      </div>
    </div>
  );
};

export default CarCard;
