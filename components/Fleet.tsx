
import React from 'react';
import { VEHICLES } from '../constants';
import { Users, Zap, ChevronRight, ArrowUpRight, Navigation, MapPin, Shield, Compass } from 'lucide-react';
import { ViewType } from '../App';
import { motion } from 'framer-motion';

interface FleetProps {
  onNavigate: (view: ViewType) => void;
}

const Fleet: React.FC<FleetProps> = ({ onNavigate }) => {
  const featuredVehicles = [
    { ...VEHICLES.find(v => v.id === 'h3')!, ghostIcon: <Zap size={320} /> },      // i20 (Hatchback) - Requested replacement for duplicate E-Class
    { ...VEHICLES.find(v => v.id === 's1')!, ghostIcon: <Navigation size={320} /> }, // Dzire (Sedan)
    { ...VEHICLES.find(v => v.id === 'm2')!, ghostIcon: <MapPin size={320} /> },     // Innova Crysta (SUV)
    { ...VEHICLES.find(v => v.id === 'l4')!, ghostIcon: <Shield size={320} /> },     // S-Class (VIP Luxury)
  ];

  return (
    <section className="py-32 bg-gray-50/50 relative overflow-hidden">
      {/* Section Background Decorative Element */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none select-none">
        <Navigation size={800} className="absolute -top-40 -left-40 rotate-12" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-reroute-teal/10 rounded-full border border-reroute-teal/20 mb-6">
              <span className="text-[10px] font-black uppercase tracking-widest text-reroute-teal">Executive Selection</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
              The Premium Fleet
            </h2>
            <p className="text-xl text-gray-500 leading-relaxed">
              Meticulously maintained. Perfectly presented. We select only the highest-rated models to ensure your journey matches your standards.
            </p>
          </motion.div>
          <motion.button 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onClick={() => onNavigate('fleet')}
            className="mt-8 md:mt-0 px-8 py-4 bg-white border-2 border-gray-100 rounded-2xl text-gray-900 text-sm font-black hover:border-reroute-teal hover:text-reroute-teal transition-all flex items-center gap-3 group shadow-sm"
          >
            View Entire Catalog <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {featuredVehicles.map((vehicle, idx) => (
            <motion.div 
              key={vehicle.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-white rounded-[3rem] overflow-hidden border border-gray-100 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] transition-all duration-500"
            >
              <div className="flex flex-col lg:flex-row h-full">
                {/* Visual Side */}
                <div className="lg:w-1/2 relative overflow-hidden h-64 lg:h-auto">
                  <img 
                    src={vehicle.image} 
                    alt={vehicle.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute top-6 left-6 flex flex-col gap-2">
                    <span className="bg-white/90 backdrop-blur-md text-gray-900 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
                      {vehicle.type}
                    </span>
                  </div>
                </div>

                {/* Content Side with Ghost Icon */}
                <div className="lg:w-1/2 p-10 flex flex-col justify-between bg-gradient-to-br from-white to-gray-50/50 relative overflow-hidden">
                  {/* Ghost Background Icon */}
                  <div className="absolute -bottom-10 -right-10 opacity-[0.03] text-gray-900 pointer-events-none transform group-hover:-translate-y-4 group-hover:-translate-x-4 transition-transform duration-700">
                    {vehicle.ghostIcon}
                  </div>

                  <div className="relative z-10">
                    <h3 className="text-3xl font-black text-gray-900 mb-2 leading-tight group-hover:text-reroute-teal transition-colors">
                      {vehicle.name}
                    </h3>
                    <p className="text-sm text-gray-400 font-bold mb-8 uppercase tracking-widest">
                      {vehicle.type === 'Luxury' ? 'VIP Luxury Class' : 'Premium Travel Class'}
                    </p>

                    <div className="flex flex-col gap-4 mb-10">
                      <div className="flex items-center gap-4 text-gray-600">
                        <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-reroute-teal border border-gray-50">
                          <Users size={18} />
                        </div>
                        <span className="text-sm font-black">{vehicle.seats} Executive Seats</span>
                      </div>
                      <div className="flex items-center gap-4 text-gray-600">
                        <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-reroute-teal border border-gray-50">
                          <Zap size={18} />
                        </div>
                        <span className="text-sm font-black">Climate Controlled</span>
                      </div>
                    </div>
                  </div>

                  <div className="relative z-10 pt-8 border-t border-gray-100 flex items-end justify-between">
                    <div>
                      <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest mb-1">Elite Rate</p>
                      <p className="text-3xl font-black text-gray-900">₹{vehicle.pricePerKm}<span className="text-sm text-gray-400 font-bold ml-1">/KM</span></p>
                    </div>
                    <button 
                      onClick={() => onNavigate('home')}
                      className="w-14 h-14 bg-gray-900 text-white rounded-2xl flex items-center justify-center group-hover:bg-reroute-teal transition-all duration-300 shadow-xl active:scale-90"
                    >
                      <ArrowUpRight size={24} className="group-hover:rotate-45 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Interactive Detail Overlay - On Hover */}
              <div className="absolute inset-x-0 bottom-0 bg-reroute-teal py-4 px-10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 hidden lg:flex items-center justify-between z-20">
                 <span className="text-white text-xs font-black uppercase tracking-widest">Pristine Condition • GPS Verified • 5★ Driver</span>
                 <span className="text-white/60 text-[10px] font-black uppercase tracking-widest">Base Booking: ₹{vehicle.basePrice}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Fleet Footnote */}
        <div className="mt-20 text-center">
           <p className="text-gray-400 font-bold text-sm flex items-center justify-center gap-3">
             <span className="w-12 h-px bg-gray-200"></span>
             All vehicles are model year 2022 or newer
             <span className="w-12 h-px bg-gray-200"></span>
           </p>
        </div>
      </div>
    </section>
  );
};

export default Fleet;
