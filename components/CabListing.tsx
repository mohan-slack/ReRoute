
import React from 'react';
import { motion } from 'framer-motion';
import { VEHICLES } from '../constants';
import { BookingDetails, TripType } from '../types';
import { Users, Briefcase, Zap, Star, ShieldCheck, ChevronRight, X, Info, MapPin, Calendar, Clock } from 'lucide-react';

interface CabListingProps {
  booking: BookingDetails;
  onClose: () => void;
  onSelect: (cabId: string) => void;
}

const CabListing: React.FC<CabListingProps> = ({ booking, onClose, onSelect }) => {
  // Filter context-relevant cabs
  const availableCabs = VEHICLES.filter(v => {
    if (booking.tripType === TripType.LOCAL) {
      // For local, show budget to mid-range
      return ['h2', 's1', 's3', 'm2', 'l1'].includes(v.id);
    }
    if (booking.tripType === TripType.OUTSTATION_ROUND) {
      // For round trips, show comfortable long-distance SUVs and Sedans
      return ['s3', 'm1', 'm2', 'm3', 't1'].includes(v.id);
    }
    // For others, show standard mix
    return ['s1', 'm2', 'm3', 'l1', 't1'].includes(v.id);
  });

  const getPriceEstimate = (cab: typeof VEHICLES[0]) => {
    switch (booking.tripType) {
      case TripType.LOCAL:
        return cab.basePrice;
      case TripType.AIRPORT:
        return Math.round(cab.basePrice * 0.65);
      case TripType.OUTSTATION_ONEWAY:
        return cab.basePrice + 1200;
      case TripType.OUTSTATION_ROUND:
        return (cab.basePrice * 2) + 500;
      default:
        return cab.basePrice;
    }
  };

  const getPickupLabel = () => {
    if (booking.tripType === TripType.AIRPORT) {
      return booking.airportTripSubtype === 'DROP' ? booking.pickupAddress : booking.to;
    }
    return booking.from || 'Current Location';
  };

  const getDropLabel = () => {
    if (booking.tripType === TripType.AIRPORT) {
      return booking.airportTripSubtype === 'DROP' ? booking.to : booking.pickupAddress;
    }
    return booking.to || (booking.tripType === TripType.LOCAL ? 'Local Coverage' : 'Destination');
  };

  return (
    <section className="bg-white min-h-screen py-24 animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <button 
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-400 hover:text-gray-900"
              >
                <X size={24} />
              </button>
              <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-reroute-teal">Search Results</h2>
            </div>
            <h3 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
              Select your <span className="text-reroute-teal">ReRoute</span> Chauffeur
            </h3>
            <div className="mt-6 flex flex-wrap gap-4">
              <div className="px-4 py-2 bg-gray-50 border border-gray-100 rounded-xl text-xs font-bold text-gray-600 flex items-center gap-2">
                <MapPin size={14} className="text-reroute-teal" /> 
                <span className="truncate max-w-[150px]">{getPickupLabel()}</span>
                <ChevronRight size={10} className="text-gray-300" />
                <span className="truncate max-w-[150px]">{getDropLabel()}</span>
              </div>
              <div className="px-4 py-2 bg-gray-50 border border-gray-100 rounded-xl text-xs font-bold text-gray-600 flex items-center gap-2">
                <Calendar size={14} className="text-reroute-teal" /> {booking.pickupDate || 'Today'}
              </div>
              <div className="px-4 py-2 bg-gray-50 border border-gray-100 rounded-xl text-xs font-bold text-gray-600 flex items-center gap-2">
                <Clock size={14} className="text-reroute-teal" /> {booking.pickupTime || 'Immediate'}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-reroute-light p-6 rounded-[2rem] border border-reroute-teal/10">
             <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-reroute-teal shadow-sm">
                <ShieldCheck size={24} />
             </div>
             <div>
                <p className="text-xs font-black text-gray-900 uppercase tracking-widest">ReRoute Verified</p>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-tight">Pristine cars • Trained Chauffeurs</p>
             </div>
          </div>
        </div>

        <div className="space-y-8">
          {availableCabs.map((cab, idx) => (
            <motion.div
              key={cab.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 group overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row items-stretch">
                {/* Visual Section */}
                <div className="lg:w-1/4 relative overflow-hidden h-64 lg:h-auto">
                   <img 
                    src={cab.image} 
                    alt={cab.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                   />
                   <div className="absolute top-6 left-6">
                      <span className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-gray-900 shadow-lg">
                        {cab.type}
                      </span>
                   </div>
                </div>

                {/* Info Section */}
                <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                   <div className="flex items-center gap-2 mb-2">
                      {[1,2,3,4,5].map(i => <Star key={i} size={12} className="fill-yellow-400 text-yellow-400" />)}
                      <span className="text-[10px] font-black text-gray-400 uppercase ml-2 tracking-widest">Top Rated Choice</span>
                   </div>
                   <h4 className="text-3xl font-black text-gray-900 mb-2 group-hover:text-reroute-teal transition-colors">{cab.name}</h4>
                   <p className="text-sm text-gray-500 font-medium leading-relaxed mb-8 max-w-md">
                     {cab.description}
                   </p>

                   <div className="flex flex-wrap gap-8 items-center pt-8 border-t border-gray-50">
                      <div className="flex items-center gap-3">
                         <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-reroute-teal">
                            <Users size={18} />
                         </div>
                         <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                           <span className="text-sm text-gray-900 block">{cab.seats} Seats</span>
                           Capacity
                         </div>
                      </div>
                      <div className="flex items-center gap-3">
                         <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-reroute-teal">
                            <Briefcase size={18} />
                         </div>
                         <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                           <span className="text-sm text-gray-900 block">{cab.type === 'SUV' ? '4 Bags' : '2 Bags'}</span>
                           Luggage
                         </div>
                      </div>
                      <div className="flex items-center gap-3">
                         <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-reroute-teal">
                            <Zap size={18} />
                         </div>
                         <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                           <span className="text-sm text-gray-900 block">All-AC</span>
                           Climate
                         </div>
                      </div>
                   </div>
                </div>

                {/* Price Section */}
                <div className="lg:w-1/4 p-8 lg:p-12 bg-gray-50/50 flex flex-col justify-center items-center lg:items-end border-t lg:border-t-0 lg:border-l border-gray-100">
                   <div className="text-center lg:text-right mb-8">
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-1">Estimated Base Fare</p>
                      <div className="flex items-baseline justify-center lg:justify-end gap-1">
                        <span className="text-4xl font-black text-gray-900">₹{getPriceEstimate(cab).toLocaleString()}</span>
                        <span className="text-gray-400 font-bold text-xs">all-in*</span>
                      </div>
                   </div>

                   <button 
                    onClick={() => onSelect(cab.id)}
                    className="w-full bg-gray-900 text-white font-black py-4 px-8 rounded-2xl hover:bg-reroute-teal transition-all shadow-xl hover:shadow-reroute-teal/20 flex items-center justify-center gap-3 group/btn active:scale-95"
                   >
                     Select Vehicle
                     <ChevronRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                   </button>
                   
                   <div className="mt-6 flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-tight">
                      <Info size={12} className="text-reroute-teal" />
                      Tolls & State Taxes Extra
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
           <p className="text-gray-400 font-bold text-sm">Can't find what you need? Our concierge can help with custom group bookings.</p>
           <button className="mt-4 text-reroute-teal font-black text-xs uppercase tracking-widest hover:underline">
             Contact 24/7 Support
           </button>
        </div>
      </div>
    </section>
  );
};

export default CabListing;
