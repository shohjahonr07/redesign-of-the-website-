
import React, { useState, useMemo } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import CarCard, { Car } from '../components/CarCard';
import CarModal from '../components/CarModal';
import FilterSection from '../components/FilterSection';
import { cars } from '../data/cars';

const Index = () => {
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    make: '',
    priceRange: '',
    fuelType: '',
    transmission: ''
  });

  const handleCarClick = (car: Car) => {
    setSelectedCar(car);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCar(null);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleFilterChange = (filterType: string, value: string) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const filteredCars = useMemo(() => {
    return cars.filter(car => {
      // Search filter
      const matchesSearch = searchQuery === '' || 
        car.make.toLowerCase().includes(searchQuery.toLowerCase()) ||
        car.model.toLowerCase().includes(searchQuery.toLowerCase());

      // Make filter
      const matchesMake = filters.make === '' || car.make === filters.make;

      // Price range filter
      const matchesPriceRange = filters.priceRange === '' || (() => {
        if (filters.priceRange === '0-15000') return car.price < 15000;
        if (filters.priceRange === '15000-25000') return car.price >= 15000 && car.price < 25000;
        if (filters.priceRange === '25000-35000') return car.price >= 25000 && car.price < 35000;
        if (filters.priceRange === '35000-50000') return car.price >= 35000 && car.price < 50000;
        if (filters.priceRange === '50000+') return car.price >= 50000;
        return true;
      })();

      // Fuel type filter
      const matchesFuelType = filters.fuelType === '' || car.fuelType === filters.fuelType;

      // Transmission filter
      const matchesTransmission = filters.transmission === '' || car.transmission === filters.transmission;

      return matchesSearch && matchesMake && matchesPriceRange && matchesFuelType && matchesTransmission;
    });
  }, [searchQuery, filters]);

  return (
    <div className="min-h-screen bg-slate-900">
      <Header onSearch={handleSearch} />
      <Hero />
      
      <main className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Featured Cars</h2>
          <p className="text-slate-300">Discover our hand-picked selection of quality vehicles</p>
        </div>

        <FilterSection filters={filters} onFilterChange={handleFilterChange} />

        <div className="mb-6">
          <p className="text-slate-300">
            Showing {filteredCars.length} of {cars.length} cars
          </p>
        </div>

        {filteredCars.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-slate-400 text-xl mb-4">No cars found matching your criteria</div>
            <button 
              onClick={() => {
                setSearchQuery('');
                setFilters({
                  make: '',
                  priceRange: '',
                  fuelType: '',
                  transmission: ''
                });
              }}
              className="text-blue-400 hover:text-blue-300 underline"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCars.map((car) => (
              <CarCard key={car.id} car={car} onCarClick={handleCarClick} />
            ))}
          </div>
        )}
      </main>

      <CarModal
        car={selectedCar}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />

      {/* Footer */}
      <footer className="bg-slate-800 border-t border-slate-700 py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">W</span>
                </div>
                <span className="text-xl font-bold text-white">WheelWise</span>
              </div>
              <p className="text-slate-400 text-sm">
                Your trusted partner in finding the perfect car. Quality vehicles, transparent pricing, exceptional service.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Buy a Car</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sell Your Car</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Financing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Trade-In</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Warranty</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Service</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-slate-400 text-sm">
                <div>📞 (555) 123-4567</div>
                <div>📧 info@wheelwise.com</div>
                <div>📍 123 Auto Lane<br />Car City, CC 12345</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400 text-sm">
            <p>&copy; 2024 WheelWise. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
