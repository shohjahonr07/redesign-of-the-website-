
import React from 'react';

interface FilterSectionProps {
  filters: {
    make: string;
    priceRange: string;
    fuelType: string;
    transmission: string;
  };
  onFilterChange: (filterType: string, value: string) => void;
}

const FilterSection: React.FC<FilterSectionProps> = ({ filters, onFilterChange }) => {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-8">
      <h3 className="text-xl font-semibold text-white mb-6">Filter Cars</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Make Filter */}
        <div>
          <label className="block text-slate-300 text-sm font-medium mb-2">Make</label>
          <select
            value={filters.make}
            onChange={(e) => onFilterChange('make', e.target.value)}
            className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Makes</option>
            <option value="Toyota">Toyota</option>
            <option value="Honda">Honda</option>
            <option value="Ford">Ford</option>
            <option value="BMW">BMW</option>
            <option value="Mercedes">Mercedes</option>
            <option value="Audi">Audi</option>
          </select>
        </div>

        {/* Price Range Filter */}
        <div>
          <label className="block text-slate-300 text-sm font-medium mb-2">Price Range</label>
          <select
            value={filters.priceRange}
            onChange={(e) => onFilterChange('priceRange', e.target.value)}
            className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Prices</option>
            <option value="0-15000">Under $15,000</option>
            <option value="15000-25000">$15,000 - $25,000</option>
            <option value="25000-35000">$25,000 - $35,000</option>
            <option value="35000-50000">$35,000 - $50,000</option>
            <option value="50000+">$50,000+</option>
          </select>
        </div>

        {/* Fuel Type Filter */}
        <div>
          <label className="block text-slate-300 text-sm font-medium mb-2">Fuel Type</label>
          <select
            value={filters.fuelType}
            onChange={(e) => onFilterChange('fuelType', e.target.value)}
            className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Fuel Types</option>
            <option value="Gasoline">Gasoline</option>
            <option value="Hybrid">Hybrid</option>
            <option value="Electric">Electric</option>
            <option value="Diesel">Diesel</option>
          </select>
        </div>

        {/* Transmission Filter */}
        <div>
          <label className="block text-slate-300 text-sm font-medium mb-2">Transmission</label>
          <select
            value={filters.transmission}
            onChange={(e) => onFilterChange('transmission', e.target.value)}
            className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Transmissions</option>
            <option value="Automatic">Automatic</option>
            <option value="Manual">Manual</option>
            <option value="CVT">CVT</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
