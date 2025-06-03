
import React from 'react';
import { Car } from '../types/car';
import { X, Fuel, Calendar, Settings, MapPin, Phone, Mail } from 'lucide-react';

interface CarModalProps {
  car: Car;
  onClose: () => void;
}

const CarModal: React.FC<CarModalProps> = ({ car, onClose }) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="relative">
          <img
            src={car.image}
            alt={`${car.year} ${car.make} ${car.model}`}
            className="w-full h-64 object-cover rounded-t-2xl"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="absolute bottom-4 left-4">
            <span className="bg-green-500 text-white px-4 py-2 rounded-full font-semibold">
              {car.condition}
            </span>
          </div>
        </div>

        <div className="p-8">
          {/* Title and Price */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {car.year} {car.make} {car.model}
            </h2>
            <div className="flex items-baseline space-x-3 mb-4">
              <span className="text-4xl font-bold text-blue-600">
                {formatPrice(car.monthlyPrice)}
              </span>
              <span className="text-gray-500">/month</span>
            </div>
            <div className="text-gray-600">
              <p>Initial payment: <span className="font-semibold">{formatPrice(car.initialPayment)}</span></p>
              <p>Contract length: <span className="font-semibold">{car.term} months</span></p>
            </div>
          </div>

          {/* Specifications */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Specifications</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Fuel className="w-5 h-5 text-gray-400 mr-3" />
                  <span className="text-gray-600">Fuel Type:</span>
                  <span className="ml-auto font-semibold">{car.fuelType}</span>
                </div>
                <div className="flex items-center">
                  <Settings className="w-5 h-5 text-gray-400 mr-3" />
                  <span className="text-gray-600">Transmission:</span>
                  <span className="ml-auto font-semibold">{car.transmission}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 text-gray-400 mr-3" />
                  <span className="text-gray-600">Body Type:</span>
                  <span className="ml-auto font-semibold">{car.bodyType}</span>
                </div>
                {car.mpg > 0 && (
                  <div className="flex items-center">
                    <span className="text-gray-600">MPG:</span>
                    <span className="ml-auto font-semibold">{car.mpg}</span>
                  </div>
                )}
                <div className="flex items-center">
                  <span className="text-gray-600">CO2 Emissions:</span>
                  <span className="ml-auto font-semibold">{car.co2}g/km</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Features</h3>
              <div className="space-y-2">
                {car.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Description</h3>
            <p className="text-gray-600 leading-relaxed">{car.description}</p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-lg font-semibold transition-colors flex items-center justify-center">
              <Phone className="w-5 h-5 mr-2" />
              Call for Quote
            </button>
            <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-semibold transition-colors flex items-center justify-center">
              <Mail className="w-5 h-5 mr-2" />
              Email Enquiry
            </button>
            <button className="flex-1 border-2 border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-600 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center">
              <MapPin className="w-5 h-5 mr-2" />
              Find Dealer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarModal;
