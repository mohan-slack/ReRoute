
import React, { useState, useMemo } from 'react';
import { VEHICLES } from '../constants';
import { ViewType } from '../App';
import { Home, Users, Zap, Briefcase, ChevronRight, Info, Filter } from 'lucide-react';
import { VehicleCategory } from '../types';

type PriceRange = 'All' | 'Budget' | 'Premium' | 'Luxury';

interface FleetPageProps {
  onNavigate: (view: ViewType) => void;
}

const FleetPage: React.FC<FleetPageProps> = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState<VehicleCategory | 'All'>('All');
  const [activePriceRange, setActivePriceRange] = useState<PriceRange>('All');

  const categories: (VehicleCategory | 'All')[] = ['All', 'Hatchback', 'Sedan', 'SUV', 'Luxury', 'Tempo Traveller'];
  const priceRanges: PriceRange[] = ['All', 'Budget', 'Premium', 'Luxury'];

  const filteredVehicles = useMemo(() => {
    return VEHICLES.filter(v => {
      const categoryMatch = activeCategory === 'All' || v.type === activeCategory;
      
      let priceMatch = true;
      if (activePriceRange === 'Budget') {
        priceMatch = v.pricePerKm < 12;
      } else if (activePriceRange === 'Premium') {
        priceMatch = v.pricePerKm >= 12 && v.pricePerKm <= 40;
      } else if (activePriceRange === 'Luxury') {
        priceMatch = v.pricePerKm > 40;
      }
      
      return categoryMatch && priceMatch;
    });
  }, [activeCategory, activePriceRange]);

  return (
    <div className="animate-in fade-in duration-500 bg-white min-h-screen">
      {/* Hero Header */}
      <div className="bg-gray-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-reroute-teal rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <button 
            onClick={() => onNavigate('home')}
            className="mb-8 inline-flex items-center gap-2 text-reroute-teal font-bold hover:text-white transition-colors group"
          >
            <Home size={18} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
          </button>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">Our Premium Fleet</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            From agile city hatchbacks to the pinnacle of luxury, find the perfect vehicle for your journey across India.
          </p>
        </div>
      </div>

      {/* Dual Filter Controls */}
      <div className="sticky top-20 z-40 bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
          {/* Category Filter */}
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-widest shrink-0">
              <Filter size={14} /> Category:
            </div>
            <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide pb-1 md:pb-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`flex-shrink-0 px-5 py-2 rounded-full text-xs font-bold transition-all ${
                    activeCategory === cat
                      ? 'bg-reroute-teal text-white shadow-md'
                      : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Price Range Filter */}
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-widest shrink-0">
              <Zap size={14} /> Price Tier:
            </div>
            <div className="flex items-center gap-3">
              {priceRanges.map((range) => (
                <button
                  key={range}
                  onClick={() => setActivePriceRange(range)}
                  className={`flex-shrink-0 px-5 py-2 rounded-full text-xs font-bold transition-all ${
                    activePriceRange === range
                      ? 'bg-gray-900 text-white shadow-md'
                      : 'bg-gray-50 text-gray-400 hover:bg-gray-100 border border-gray-100'
                  }`}
                >
                  {range}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Fleet Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h3 className="text-2xl font-black text-gray-900">
              {activeCategory !== 'All' ? activeCategory : 'All Vehicles'} 
              {activePriceRange !== 'All' && <span className="text-reroute-teal"> • {activePriceRange} Range</span>}
              <span className="text-gray-400 font-normal ml-3 text-lg">({filteredVehicles.length})</span>
            </h3>
            <div className="text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
              <Info size={14} /> Prices inclusive of fuel and driver
            </div>
          </div>

          {filteredVehicles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredVehicles.map((vehicle) => (
                <div key={vehicle.id} className="group bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all flex flex-col overflow-hidden">
                  {/* Image Section */}
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={vehicle.image} 
                      alt={vehicle.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="bg-white/90 backdrop-blur-md text-gray-900 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tight shadow-sm">
                        {vehicle.type}
                      </span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-xl font-black text-gray-900 group-hover:text-reroute-teal transition-colors">
                        {vehicle.name}
                      </h4>
                    </div>
                    <p className="text-gray-500 text-xs leading-relaxed mb-4 line-clamp-2">
                      {vehicle.description}
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-6 pt-4 border-t border-gray-50">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-reroute-teal">
                          <Users size={16} />
                        </div>
                        <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                          {vehicle.seats} Seats
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-reroute-teal">
                          <Zap size={16} />
                        </div>
                        <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                          Air Conditioned
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {vehicle.features.map((f, i) => (
                        <span key={i} className="bg-reroute-light text-reroute-teal text-[9px] font-black px-2 py-0.5 rounded uppercase">
                          {f}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto pt-6 border-t flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-gray-400 uppercase font-black block tracking-widest">Starts from</span>
                        <span className="text-xl font-black text-gray-900">₹{vehicle.pricePerKm} <span className="text-xs font-normal text-gray-400">/ km</span></span>
                      </div>
                      <button 
                        onClick={() => onNavigate('home')}
                        className="bg-gray-900 text-white p-3 rounded-2xl hover:bg-reroute-teal transition-all shadow-xl active:scale-90"
                      >
                        <Briefcase size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-24 text-center">
              <div className="w-20 h-20 bg-gray-50 rounded-3xl flex items-center justify-center mx-auto mb-6 text-gray-300">
                <Filter size={40} />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-2">No vehicles found</h3>
              <p className="text-gray-500">Try adjusting your category or price filters.</p>
              <button 
                onClick={() => { setActiveCategory('All'); setActivePriceRange('All'); }}
                className="mt-8 text-reroute-teal font-black text-sm uppercase tracking-widest hover:underline"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-12 rounded-[3rem] border border-gray-100 flex flex-col md:flex-row items-center gap-12 shadow-sm">
            <div className="md:w-1/2">
              <h3 className="text-3xl font-black mb-6">Reliability Guaranteed</h3>
              <p className="text-gray-500 leading-relaxed">
                All vehicles in our fleet are under 3 years old and undergo a 40-point quality inspection every month. We ensure the highest standards of safety and hygiene for every ride.
              </p>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-6 rounded-3xl text-center">
                <div className="text-3xl font-black text-reroute-teal mb-1">20+</div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Car Models</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-3xl text-center">
                <div className="text-3xl font-black text-reroute-teal mb-1">100%</div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">AC Fleet</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black text-gray-900 mb-8">Found the Perfect Car?</h2>
          <button 
            onClick={() => onNavigate('home')}
            className="bg-reroute-teal hover:bg-teal-700 text-white font-black py-5 px-14 rounded-2xl shadow-2xl transition-all transform hover:scale-105 active:scale-95 flex items-center gap-2 mx-auto"
          >
            Start Your Booking Now <ChevronRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default FleetPage;
