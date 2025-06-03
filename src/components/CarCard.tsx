
import React from 'react';
import { Car } from '../types/car';
import { Fuel, Calendar, Settings, ArrowRight, Heart, Share2, Eye } from 'lucide-react';

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

  const handleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    alert(`Added ${car.make} ${car.model} to favorites!`);
  };

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (navigator.share) {
      navigator.share({
        title: `${car.year} ${car.make} ${car.model}`,
        text: `Check out this amazing car deal: ${formatPrice(car.monthlyPrice)}/month`,
        url: window.location.href,
      });
    } else {
      alert('Share feature - URL copied to clipboard!');
    }
  };

  const handleViewDeal = (e: React.MouseEvent) => {
    e.stopPropagation();
    onCarClick(car);
  };

  return (
    <div 
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 cursor-pointer group animate-fade-in"
      onClick={() => onCarClick(car)}
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={car.image}
          alt={`${car.year} ${car.make} ${car.model}`}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Badges */}
        <div className="absolute top-4 left-4">
          <span className="bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
            {car.condition}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <span className="bg-gradient-to-r from-slate-700 to-slate-800 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
            {car.category}
          </span>
        </div>

        {/* Action Buttons Overlay */}
        <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button
            onClick={handleFavorite}
            className="p-2 bg-white/90 hover:bg-white rounded-full shadow-lg transform hover:scale-110 transition-all duration-300"
          >
            <Heart className="w-4 h-4 text-slate-600 hover:text-red-500" />
          </button>
          <button
            onClick={handleShare}
            className="p-2 bg-white/90 hover:bg-white rounded-full shadow-lg transform hover:scale-110 transition-all duration-300"
          >
            <Share2 className="w-4 h-4 text-slate-600 hover:text-blue-500" />
          </button>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-4">
          <button
            onClick={handleViewDeal}
            className="flex items-center space-x-2 bg-white/90 hover:bg-white text-slate-800 px-4 py-2 rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
          >
            <Eye className="w-4 h-4" />
            <span>Quick View</span>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-orange-600 transition-colors duration-300">
            {car.year} {car.make} {car.model}
          </h3>
          <div className="flex items-baseline space-x-2">
            <span className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              {formatPrice(car.monthlyPrice)}
            </span>
            <span className="text-slate-500 text-sm">/month</span>
          </div>
          <p className="text-sm text-slate-500 mt-1">
            Initial payment: {formatPrice(car.initialPayment)}
          </p>
        </div>

        {/* Details */}
        <div className="grid grid-cols-3 gap-4 text-sm mb-6">
          <div className="flex flex-col items-center text-center group/detail">
            <div className="p-2 bg-slate-100 rounded-full mb-2 group-hover/detail:bg-orange-100 transition-colors duration-300">
              <Fuel className="w-5 h-5 text-slate-400 group-hover/detail:text-orange-500 transition-colors duration-300" />
            </div>
            <span className="text-slate-600 font-medium">{car.fuelType}</span>
          </div>
          <div className="flex flex-col items-center text-center group/detail">
            <div className="p-2 bg-slate-100 rounded-full mb-2 group-hover/detail:bg-orange-100 transition-colors duration-300">
              <Settings className="w-5 h-5 text-slate-400 group-hover/detail:text-orange-500 transition-colors duration-300" />
            </div>
            <span className="text-slate-600 font-medium">{car.transmission}</span>
          </div>
          <div className="flex flex-col items-center text-center group/detail">
            <div className="p-2 bg-slate-100 rounded-full mb-2 group-hover/detail:bg-orange-100 transition-colors duration-300">
              <Calendar className="w-5 h-5 text-slate-400 group-hover/detail:text-orange-500 transition-colors duration-300" />
            </div>
            <span className="text-slate-600 font-medium">{car.term}m</span>
          </div>
        </div>

        {/* Action Button */}
        <button 
          onClick={handleViewDeal}
          className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform group-hover:scale-105 flex items-center justify-center group/button"
        >
          View Deal
          <ArrowRight className="ml-2 w-5 h-5 group-hover/button:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
    </div>
  );
};

export default CarCard;
