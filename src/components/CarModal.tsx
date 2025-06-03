
import React from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Car } from './CarCard';

interface CarModalProps {
  car: Car | null;
  isOpen: boolean;
  onClose: () => void;
}

const CarModal: React.FC<CarModalProps> = ({ car, isOpen, onClose }) => {
  if (!isOpen || !car) return null;

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

  // Sample additional images for the gallery
  const galleryImages = [
    car.image,
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&h=400&fit=crop",
  ];

  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <div className="fixed inset-0 bg-black/75 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-slate-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden border border-slate-700">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-700">
          <h2 className="text-2xl font-bold text-white">
            {car.year} {car.make} {car.model}
          </h2>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors p-2"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
          <div className="grid lg:grid-cols-2 gap-8 p-6">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative">
                <img
                  src={galleryImages[currentImageIndex]}
                  alt={`${car.make} ${car.model}`}
                  className="w-full h-80 object-cover rounded-xl"
                />
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
              
              {/* Thumbnail Gallery */}
              <div className="flex gap-2 overflow-x-auto">
                {galleryImages.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`View ${index + 1}`}
                    className={`w-20 h-16 object-cover rounded cursor-pointer border-2 transition-all ${
                      index === currentImageIndex 
                        ? 'border-blue-500' 
                        : 'border-slate-600 hover:border-slate-500'
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            </div>

            {/* Car Details */}
            <div className="space-y-6">
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">
                  {formatPrice(car.price)}
                </div>
                <div className="text-slate-300">
                  Market value estimate: {formatPrice(car.price + 2000)}
                </div>
              </div>

              {/* Key Details */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-800 p-4 rounded-lg">
                  <div className="text-slate-400 text-sm">Mileage</div>
                  <div className="text-white font-semibold">{formatMileage(car.mileage)} miles</div>
                </div>
                <div className="bg-slate-800 p-4 rounded-lg">
                  <div className="text-slate-400 text-sm">Fuel Type</div>
                  <div className="text-white font-semibold">{car.fuelType}</div>
                </div>
                <div className="bg-slate-800 p-4 rounded-lg">
                  <div className="text-slate-400 text-sm">Transmission</div>
                  <div className="text-white font-semibold">{car.transmission}</div>
                </div>
                <div className="bg-slate-800 p-4 rounded-lg">
                  <div className="text-slate-400 text-sm">Condition</div>
                  <div className="text-white font-semibold">{car.condition}</div>
                </div>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Key Features</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="text-slate-300">• Air Conditioning</div>
                  <div className="text-slate-300">• Power Windows</div>
                  <div className="text-slate-300">• Bluetooth</div>
                  <div className="text-slate-300">• Backup Camera</div>
                  <div className="text-slate-300">• Cruise Control</div>
                  <div className="text-slate-300">• Alloy Wheels</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-3 rounded-lg font-semibold transition-all duration-300">
                  Schedule Test Drive
                </button>
                <button className="w-full border border-slate-600 text-white py-3 rounded-lg font-semibold hover:bg-slate-800 transition-all duration-300">
                  Get Financing
                </button>
                <button className="w-full bg-slate-800 text-white py-3 rounded-lg font-semibold hover:bg-slate-700 transition-all duration-300">
                  Save to Favorites
                </button>
              </div>

              {/* Contact Info */}
              <div className="bg-slate-800 p-4 rounded-lg">
                <h4 className="font-semibold text-white mb-2">Contact Dealer</h4>
                <div className="text-slate-300 text-sm space-y-1">
                  <div>📞 (555) 123-4567</div>
                  <div>📍 123 Auto Lane, Car City, CC 12345</div>
                  <div>🕒 Mon-Sat: 9AM-8PM, Sun: 11AM-6PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarModal;
