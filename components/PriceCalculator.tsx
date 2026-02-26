import React, { useState, useMemo } from 'react';
import { VEHICLES } from '../constants';
import { TripType } from '../types';
// Fixed: Added missing Wallet import from lucide-react
import { Calculator, Car, ChevronRight, Info, MapPin, Search, Loader2, Navigation, Wallet } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const MOCK_DISTANCES: Record<string, number> = {
  "bangalore-mysore": 145,
  "bangalore-coorg": 250,
  "delhi-agra": 230,
  "delhi-jaipur": 280,
  "mumbai-pune": 150,
  "mumbai-lonavala": 85,
  "chennai-pondicherry": 155,
  "hyderabad-warangal": 150,
  "bangalore-chennai": 350,
  "mumbai-goa": 590,
  "delhi-chandigarh": 245
};

const PriceCalculator: React.FC = () => {
  const [tripType, setTripType] = useState<TripType>(TripType.OUTSTATION_ONEWAY);
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');
  const [isCalculating, setIsCalculating] = useState(false);
  const [isCalculated, setIsCalculated] = useState(false);
  const [distance, setDistance] = useState(0);
  const [vehicleId, setVehicleId] = useState(VEHICLES[1].id); // Default to Swift
  const [localPackage, setLocalPackage] = useState<'4h' | '8h' | '12h'>('8h');

  const selectedVehicle = useMemo(() => VEHICLES.find(v => v.id === vehicleId)!, [vehicleId]);

  const calculateDistance = (from: string, to: string) => {
    const key = `${from.toLowerCase().trim()}-${to.toLowerCase().trim()}`;
    const reverseKey = `${to.toLowerCase().trim()}-${from.toLowerCase().trim()}`;
    
    if (MOCK_DISTANCES[key]) return MOCK_DISTANCES[key];
    if (MOCK_DISTANCES[reverseKey]) return MOCK_DISTANCES[reverseKey];
    
    // Deterministic mock distance for unknown pairs
    const seed = (from.length * 7) + (to.length * 3);
    return 100 + (seed % 400); 
  };

  const handleCalculate = () => {
    if (!fromLocation || !toLocation) return;
    
    setIsCalculating(true);
    setIsCalculated(false);
    
    // Simulate API delay
    setTimeout(() => {
      const dist = calculateDistance(fromLocation, toLocation);
      setDistance(dist);
      setIsCalculating(false);
      setIsCalculated(true);
    }, 1200);
  };

  const estimation = useMemo(() => {
    let base = selectedVehicle.basePrice;
    let perKm = selectedVehicle.pricePerKm;
    let total = 0;

    switch (tripType) {
      case TripType.OUTSTATION_ONEWAY:
        total = base + (distance * perKm);
        break;
      case TripType.OUTSTATION_ROUND:
        total = (base * 1.5) + (distance * 2 * perKm);
        break;
      case TripType.LOCAL:
        const localMultipliers = { '4h': 0.6, '8h': 1, '12h': 1.4 };
        total = base * localMultipliers[localPackage];
        break;
      case TripType.AIRPORT:
        total = base * 0.85; 
        break;
    }

    return Math.round(total);
  }, [tripType, distance, selectedVehicle, localPackage]);

  return (
    <section className="py-24 bg-reroute-light overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-reroute-teal/5 -skew-x-12 transform origin-top translate-x-1/2 -z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-reroute-teal/10 rounded-full border border-reroute-teal/20 mb-6">
              <Calculator size={16} className="text-reroute-teal" />
              <span className="text-xs font-black uppercase tracking-widest text-reroute-teal">Transparent Estimator</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Estimate Your Journey</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">Get precise fare estimates instantly. Enter your pickup and destination to see your premium travel cost.</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Controls Panel */}
          <div className="lg:col-span-7 bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-gray-100 flex flex-col justify-between">
            <div className="space-y-10">
              {/* Trip Type Selector */}
              <div className="space-y-4">
                <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest pl-2">Trip Category</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { id: TripType.OUTSTATION_ONEWAY, label: 'One Way' },
                    { id: TripType.OUTSTATION_ROUND, label: 'Round Trip' },
                    { id: TripType.LOCAL, label: 'Local' },
                    { id: TripType.AIRPORT, label: 'Airport' }
                  ].map((t) => (
                    <button
                      key={t.id}
                      onClick={() => {
                        setTripType(t.id);
                        setIsCalculated(false);
                      }}
                      className={`py-4 px-2 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all ${
                        tripType === t.id 
                        ? 'bg-reroute-teal text-white shadow-lg' 
                        : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Location Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest pl-2">Pickup Location</label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input 
                      type="text"
                      placeholder="Ex: Bangalore"
                      className="w-full bg-gray-50 border-none rounded-2xl py-4 pl-12 pr-6 font-bold text-gray-900 focus:ring-2 focus:ring-reroute-teal outline-none transition-all"
                      value={fromLocation}
                      onChange={(e) => setFromLocation(e.target.value)}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest pl-2">Destination</label>
                  <div className="relative">
                    <Navigation className="absolute left-4 top-1/2 -translate-y-1/2 text-reroute-teal" size={18} />
                    <input 
                      type="text"
                      placeholder="Ex: Mysore"
                      className="w-full bg-gray-50 border-none rounded-2xl py-4 pl-12 pr-6 font-bold text-gray-900 focus:ring-2 focus:ring-reroute-teal outline-none transition-all"
                      value={toLocation}
                      onChange={(e) => setToLocation(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* Vehicle Selector */}
              <div className="space-y-4">
                <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest pl-2">Select Vehicle</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {VEHICLES.filter(v => v.type !== 'Tempo Traveller').slice(0, 8).map(v => (
                    <button
                      key={v.id}
                      onClick={() => setVehicleId(v.id)}
                      className={`p-4 rounded-2xl border-2 transition-all flex flex-col items-center gap-2 ${
                        vehicleId === v.id 
                        ? 'border-reroute-teal bg-reroute-light/50 shadow-md' 
                        : 'border-transparent bg-gray-50 hover:bg-gray-100'
                      }`}
                    >
                      <img src={v.image} className="w-16 h-10 object-cover rounded-lg shadow-sm" alt={v.name} />
                      <span className="text-[10px] font-black uppercase tracking-tighter text-gray-900 truncate w-full text-center">{v.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button 
              onClick={handleCalculate}
              disabled={!fromLocation || !toLocation || isCalculating}
              className="mt-10 w-full bg-gray-900 hover:bg-black disabled:bg-gray-200 text-white font-black py-5 rounded-2xl shadow-xl transition-all flex items-center justify-center gap-3 active:scale-95 group"
            >
              {isCalculating ? (
                <><Loader2 className="animate-spin" size={20} /> Estimating Fare...</>
              ) : (
                <><Search size={20} /> Calculate Fare <ChevronRight className="group-hover:translate-x-1 transition-transform" size={18} /></>
              )}
            </button>
          </div>

          {/* Results Card */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="bg-gray-900 rounded-[2.5rem] p-10 md:p-12 text-white shadow-2xl h-full flex flex-col relative overflow-hidden min-h-[500px]">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Car size={120} className="rotate-12" />
              </div>
              
              <AnimatePresence mode="wait">
                {isCalculated ? (
                  <motion.div 
                    key="result"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="relative z-10 flex flex-col h-full"
                  >
                    <div className="flex-grow">
                      <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-reroute-teal mb-2">Estimated Premium Fare</h4>
                      <div className="flex items-baseline gap-2 mb-8">
                        <span className="text-6xl font-black text-white">₹{estimation.toLocaleString()}</span>
                        <span className="text-gray-400 font-bold">approx.</span>
                      </div>

                      <div className="space-y-6 mb-10">
                         <div className="flex justify-between items-center py-4 border-b border-white/10">
                           <span className="text-gray-400 font-bold text-sm">Vehicle Class</span>
                           <span className="text-white font-black">{selectedVehicle.type}</span>
                         </div>
                         <div className="flex justify-between items-center py-4 border-b border-white/10">
                           <span className="text-gray-400 font-bold text-sm">Trip Distance</span>
                           <span className="text-white font-black">{distance} KM</span>
                         </div>
                         <div className="flex justify-between items-center py-4 border-b border-white/10">
                           <span className="text-gray-400 font-bold text-sm">Base Rate</span>
                           <span className="text-white font-black">₹{selectedVehicle.pricePerKm}/KM</span>
                         </div>
                      </div>

                      <div className="bg-white/5 rounded-2xl p-4 mb-8 flex items-start gap-3">
                        <Info className="text-reroute-teal shrink-0 mt-0.5" size={16} />
                        <p className="text-[10px] text-gray-400 font-bold leading-relaxed uppercase tracking-widest">
                          Estimate includes driver allowance and fuel. Tolls, state taxes, and parking will be extra as per actuals.
                        </p>
                      </div>
                    </div>

                    <button className="w-full bg-reroute-teal hover:bg-teal-700 text-white font-black py-5 rounded-2xl shadow-xl transition-all flex items-center justify-center gap-3 group active:scale-95">
                      Secure This Booking <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </motion.div>
                ) : (
                  <motion.div 
                    key="placeholder"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center justify-center h-full text-center space-y-6"
                  >
                    <div className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center text-gray-500">
                      <Wallet size={40} />
                    </div>
                    <div>
                      <h4 className="text-xl font-black text-white mb-2">Ready to Plan?</h4>
                      <p className="text-gray-400 text-sm max-w-[240px] mx-auto">Enter your locations and click calculate to see our premium rates.</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceCalculator;