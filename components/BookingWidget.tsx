
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { TripType, BookingDetails } from '../types';
import { MapPin, Calendar, Clock, ChevronDown, Plane, LocateFixed, Search, Loader2, ArrowRight } from 'lucide-react';
import { SOUTH_INDIAN_CITIES, SOUTH_INDIAN_AIRPORTS } from '../constants';

interface BookingWidgetProps {
  bookingDetails: BookingDetails;
  onUpdate: (details: Partial<BookingDetails>) => void;
  onExplore: () => void;
}

const CarAnimation = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-[60] hidden md:block">
       <motion.div
         className="absolute w-32 h-16"
         style={{
           offsetPath: "inset(0 round 3rem)",
           offsetRotate: "none", // Keeps the car level as it drives around the box
           y: -32 // Adjusted for better vertical centering on the border
         }}
         animate={{
           offsetDistance: ["0%", "100%"]
         }}
         transition={{
           duration: 18,
           repeat: Infinity,
           ease: "linear"
         }}
       >
         {/* Driving Bounce Animation */}
         <motion.g
            animate={{ y: [0, -1.5, 0] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-full"
         >
           <svg viewBox="0 0 160 80" className="w-32 h-16 drop-shadow-md overflow-visible">
             <defs>
               <linearGradient id="suvGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                 <stop offset="0%" style={{ stopColor: '#1e293b' }} />
                 <stop offset="100%" style={{ stopColor: '#020617' }} />
               </linearGradient>
               <linearGradient id="alloyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                 <stop offset="0%" style={{ stopColor: '#f1f5f9' }} />
                 <stop offset="100%" style={{ stopColor: '#64748b' }} />
               </linearGradient>
             </defs>

             {/* Dynamic Shadow */}
             <ellipse cx="80" cy="76" rx="55" ry="1.5" fill="black" fillOpacity="0.25" />

             {/* Front Wheel Group - Corrected Position */}
             <g transform="translate(42, 62)">
               {/* Tire: The outer part that should NOT rotate */}
               <circle r="14" fill="#0a0a0a" />
               <circle r="13.5" fill="none" stroke="#1a1a1a" strokeWidth="0.5" />
               
               {/* Rim: The rolling alloy part */}
               <motion.g
                 animate={{ rotate: 360 }}
                 transition={{ duration: 0.4, repeat: Infinity, ease: "linear" }}
               >
                 <circle r="9.5" fill="url(#alloyGrad)" />
                 {[0, 45, 90, 135, 180, 225, 270, 315].map(deg => (
                   <rect key={deg} x="-0.8" y="-9" width="1.6" height="18" fill="#0f172a" transform={`rotate(${deg})`} rx="0.2" />
                 ))}
                 <circle r="3" fill="#020617" />
               </motion.g>
             </g>

             {/* Rear Wheel Group - Corrected Position */}
             <g transform="translate(118, 62)">
               {/* Tire: The outer part that should NOT rotate */}
               <circle r="14" fill="#0a0a0a" />
               <circle r="13.5" fill="none" stroke="#1a1a1a" strokeWidth="0.5" />
               
               {/* Rim: The rolling alloy part */}
               <motion.g
                 animate={{ rotate: 360 }}
                 transition={{ duration: 0.4, repeat: Infinity, ease: "linear" }}
               >
                 <circle r="9.5" fill="url(#alloyGrad)" />
                 {[0, 45, 90, 135, 180, 225, 270, 315].map(deg => (
                   <rect key={deg} x="-0.8" y="-9" width="1.6" height="18" fill="#0f172a" transform={`rotate(${deg})`} rx="0.2" />
                 ))}
                 <circle r="3" fill="#020617" />
               </motion.g>
             </g>

             {/* Car Body - Sitting slightly above wheel centers */}
             <path 
               d="M10,55 
                  L10,45 C10,36 18,34 25,34 
                  L28,34 
                  A16,16 0 0 1 56,34 
                  L104,34 
                  A16,16 0 0 1 132,34 
                  L135,34 
                  C145,34 150,40 150,45 
                  L150,55 
                  C150,60 145,62 135,62 
                  L25,62 
                  C15,62 10,60 10,55 Z" 
               fill="url(#suvGrad)" 
             />
             
             <text 
                x="80" 
                y="52" 
                textAnchor="middle" 
                fill="white" 
                fontSize="11" 
                fontWeight="900" 
                style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.05em', pointerEvents: 'none' }}
                className="select-none"
             >
               ReRoute
             </text>
             
             {/* Windows and Accents */}
             <path d="M55,18 L105,18 C115,18 120,22 125,28 L130,34 L45,34 L55,18 Z" fill="#f8fafc" />
             <path d="M58,20 L85,20 L85,34 L53,34 Z" fill="#020617" fillOpacity="0.85" /> 
             <path d="M90,20 L118,20 L125,34 L90,34 Z" fill="#020617" fillOpacity="0.85" /> 
             
             <rect x="145" y="44" width="5" height="8" fill="#fff" rx="1.5" />
             <rect x="10" y="46" width="2" height="6" fill="#dc2626" rx="1" />
           </svg>
         </motion.g>
       </motion.div>
    </div>
  );
};

interface InputWrapperProps {
  label: string;
  helper?: string;
  children: React.ReactNode;
  fieldId?: string;
  isLiveLocationEnabled?: boolean;
  className?: string;
  activeDropdown: string | null;
  suggestions: string[];
  isLocating: boolean;
  onUpdate: (details: any) => void;
  setActiveDropdown: (id: string | null) => void;
  handleLiveLocation: (field: string) => void;
  dropdownRef: React.RefObject<HTMLDivElement | null>;
}

const InputWrapper: React.FC<InputWrapperProps> = ({ 
  label, 
  helper, 
  children, 
  fieldId, 
  isLiveLocationEnabled,
  className = "",
  activeDropdown,
  suggestions,
  isLocating,
  onUpdate,
  setActiveDropdown,
  handleLiveLocation,
  dropdownRef
}) => {
  const isActive = activeDropdown === fieldId;
  
  return (
    <div className={`relative flex flex-col w-full h-full p-4 md:p-6 border-b md:border-b-0 md:border-r last:border-r-0 border-gray-100 hover:bg-white transition-all group ${isActive ? 'z-[100] bg-white ring-2 ring-reroute-teal/20' : 'z-10'} ${className}`}>
      <div className="flex justify-between items-center mb-2 shrink-0">
        <label className="text-[10px] md:text-[11px] font-black text-gray-400 uppercase tracking-[0.15em] whitespace-nowrap overflow-hidden text-ellipsis">{label}</label>
        {isLiveLocationEnabled && (
          <button 
            type="button"
            onClick={() => handleLiveLocation(fieldId!)}
            className="flex items-center gap-1.5 text-[10px] font-black text-reroute-teal uppercase tracking-widest hover:text-teal-700 transition-colors shrink-0"
          >
            {isLocating ? <Loader2 size={10} className="animate-spin" /> : <LocateFixed size={10} />}
            GPS
          </button>
        )}
      </div>
      <div className="flex-grow flex items-center min-h-[44px] md:min-h-[48px] min-w-0">
        {children}
      </div>
      <span className="text-[10px] text-reroute-teal/70 font-bold mt-2 h-4 truncate whitespace-nowrap shrink-0 group-hover:text-reroute-teal transition-colors">{helper}</span>
      
      {isActive && (
        <div 
          ref={dropdownRef} 
          className="absolute left-0 right-0 top-full mt-3 bg-white border border-gray-100 shadow-[0_30px_70px_-10px_rgba(0,0,0,0.3)] rounded-[2rem] z-[110] overflow-hidden animate-in fade-in zoom-in-95 duration-200 min-w-[320px]"
        >
          <div className="p-4 border-b border-gray-50 bg-gray-50/50 flex items-center gap-3">
            <Search size={14} className="text-gray-400" />
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Select {label}</span>
          </div>
          <div className="max-h-[400px] overflow-y-auto py-2">
            {isLiveLocationEnabled && (
              <button 
                type="button"
                onMouseDown={(e) => {
                  e.preventDefault();
                  handleLiveLocation(fieldId!);
                }}
                className="w-full text-left px-6 py-4 hover:bg-reroute-light flex items-center gap-4 transition-colors border-b border-gray-50"
              >
                <div className="p-2.5 bg-reroute-teal/10 rounded-xl text-reroute-teal">
                  <LocateFixed size={18} />
                </div>
                <div>
                  <div className="text-sm font-black text-gray-900">Current Location</div>
                  <div className="text-[10px] text-gray-400 uppercase font-black tracking-tight">Use My GPS Position</div>
                </div>
              </button>
            )}
            {suggestions.length > 0 ? (
              suggestions.map((item, idx) => (
                <button 
                  key={item + idx}
                  type="button"
                  onMouseDown={(e) => {
                    e.preventDefault();
                    onUpdate({ [fieldId!]: item });
                    setActiveDropdown(null);
                  }}
                  className="w-full text-left px-6 py-3.5 hover:bg-gray-50 flex items-center gap-4 transition-all group/item"
                >
                  <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-300 group-hover/item:bg-reroute-teal/10 group-hover/item:text-reroute-teal transition-colors">
                    {label.toLowerCase().includes('airport') ? <Plane size={16} /> : <MapPin size={16} />}
                  </div>
                  <span className="text-sm font-bold text-gray-700 truncate group-hover/item:text-gray-900">{item}</span>
                </button>
              ))
            ) : (
              <div className="p-10 text-center flex flex-col items-center gap-4">
                <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-200">
                   <Search size={24} />
                </div>
                <p className="text-sm font-bold text-gray-400">No matching locations found</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const BookingWidget: React.FC<BookingWidgetProps> = ({ bookingDetails, onUpdate, onExplore }) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isLocating, setIsLocating] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLiveLocation = (field: string) => {
    setIsLocating(true);
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const detectedLocation = "My Location (Bangalore Central)";
          onUpdate({ [field]: detectedLocation });
          setIsLocating(false);
          setActiveDropdown(null);
        },
        () => {
          alert("GPS Permission Denied. Please enable it in browser settings.");
          setIsLocating(false);
        }
      );
    } else {
      alert("Geolocation not supported.");
      setIsLocating(false);
    }
  };

  const getSourceList = (field: string) => {
    const isAirportTrip = bookingDetails.tripType === TripType.AIRPORT;
    if (isAirportTrip) {
      if (field === 'to') return SOUTH_INDIAN_AIRPORTS;
      if (field === 'pickupAddress') return SOUTH_INDIAN_CITIES;
    }
    return SOUTH_INDIAN_CITIES;
  };

  const handleInputChange = (field: string, value: string) => {
    onUpdate({ [field]: value });
    const sourceList = getSourceList(field);
    const filtered = sourceList.filter(item => 
      item.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(value.trim() === '' ? sourceList.slice(0, 10) : filtered);
    setActiveDropdown(field);
  };

  const handleFocus = (field: string) => {
    const sourceList = getSourceList(field);
    const currentValue = (bookingDetails as any)[field] || '';
    const filtered = sourceList.filter(item => 
      item.toLowerCase().includes(currentValue.toLowerCase())
    );
    setSuggestions(currentValue.trim() === '' ? sourceList.slice(0, 10) : filtered);
    setActiveDropdown(field);
  };

  const tabs = [
    { id: TripType.OUTSTATION_ONEWAY, label: 'One Way' },
    { id: TripType.OUTSTATION_ROUND, label: 'Round Trip' },
    { id: TripType.LOCAL, label: 'Local' },
    { id: TripType.AIRPORT, label: 'Airport' }
  ];

  const commonProps = {
    activeDropdown,
    suggestions,
    isLocating,
    onUpdate,
    setActiveDropdown,
    handleLiveLocation,
    dropdownRef
  };

  return (
    <div className="relative w-full max-w-6xl">
      <CarAnimation />

      <div className="w-full bg-white rounded-[2.5rem] md:rounded-[3rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.18),0_0_40px_-10px_rgba(0,150,171,0.15)] border border-gray-100 overflow-visible transition-all relative z-10">
        <div className="flex bg-gray-100/60 p-1.5 md:p-2 border-b border-gray-100 rounded-t-[2.5rem] md:rounded-t-[3rem] relative">
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
          {tabs.map((tab) => {
            const isActive = bookingDetails.tripType === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  onUpdate({ tripType: tab.id });
                  setActiveDropdown(null);
                }}
                className={`flex-1 py-4 md:py-5 px-1 md:px-4 text-[10px] md:text-[12px] font-black uppercase tracking-[0.15em] md:tracking-[0.2em] transition-all rounded-xl md:rounded-2xl relative flex items-center justify-center gap-2 ${
                  isActive
                    ? 'bg-white text-reroute-teal shadow-[0_10px_25px_-5px_rgba(0,150,171,0.2)]'
                    : 'text-gray-400 hover:text-gray-600 hover:bg-white/40'
                }`}
              >
                {tab.label === 'Airport' && <Plane size={14} className={isActive ? 'text-reroute-teal' : 'text-gray-300'} />}
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="p-4 md:p-8 lg:p-10 overflow-visible">
          <div className="mb-8 md:mb-10 bg-gray-50/40 rounded-[1.5rem] md:rounded-[2rem] border border-gray-100/80 overflow-visible shadow-inner relative">
            {bookingDetails.tripType === TripType.OUTSTATION_ONEWAY && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full overflow-visible">
                <InputWrapper {...commonProps} label="From" fieldId="from" helper="Pickup City" isLiveLocationEnabled>
                  <MapPin className="text-gray-400 mr-3 shrink-0" size={20} />
                  <input 
                    className="bg-transparent border-none outline-none w-full font-black text-lg text-gray-900 placeholder:text-gray-300 min-w-0" 
                    placeholder="Enter City"
                    value={bookingDetails.from || ''}
                    onFocus={() => handleFocus('from')}
                    onClick={() => handleFocus('from')}
                    onChange={(e) => handleInputChange('from', e.target.value)}
                    autoComplete="off"
                  />
                </InputWrapper>
                <InputWrapper {...commonProps} label="To" fieldId="to" helper="Drop City">
                  <MapPin className="text-reroute-teal mr-3 shrink-0" size={20} />
                  <input 
                    className="bg-transparent border-none outline-none w-full font-black text-lg text-gray-900 placeholder:text-gray-300 min-w-0" 
                    placeholder="Where to?"
                    value={bookingDetails.to || ''}
                    onFocus={() => handleFocus('to')}
                    onClick={() => handleFocus('to')}
                    onChange={(e) => handleInputChange('to', e.target.value)}
                    autoComplete="off"
                  />
                </InputWrapper>
                <InputWrapper {...commonProps} label="Date" helper="Travel Date">
                  <Calendar className="text-gray-400 mr-3 shrink-0" size={20} />
                  <input 
                    type="date"
                    className="bg-transparent border-none outline-none w-full font-black text-lg text-gray-900 min-w-0 cursor-pointer"
                    value={bookingDetails.pickupDate || ''}
                    onChange={(e) => onUpdate({ pickupDate: e.target.value })}
                  />
                </InputWrapper>
                <InputWrapper {...commonProps} label="Time" helper="Pickup Time" className="lg:border-r-0">
                  <Clock className="text-gray-400 mr-3 shrink-0" size={20} />
                  <div className="relative flex-grow min-w-0">
                    <select 
                      className="bg-transparent border-none outline-none w-full font-black text-lg text-gray-900 appearance-none cursor-pointer pr-8 truncate"
                      value={bookingDetails.pickupTime || ''}
                      onChange={(e) => onUpdate({ pickupTime: e.target.value })}
                    >
                      <option value="">Select Time</option>
                      {Array.from({ length: 24 }).map((_, i) => (
                        <option key={i} value={`${i}:00`}>{`${i}:00`}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                  </div>
                </InputWrapper>
              </div>
            )}

            {bookingDetails.tripType === TripType.OUTSTATION_ROUND && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 w-full overflow-visible">
                <InputWrapper {...commonProps} label="From" fieldId="from" helper="Pickup City" isLiveLocationEnabled>
                  <MapPin className="text-gray-400 mr-3 shrink-0" size={20} />
                  <input 
                    className="bg-transparent border-none outline-none w-full font-black text-lg text-gray-900 placeholder:text-gray-300 min-w-0" 
                    placeholder="Enter City"
                    value={bookingDetails.from || ''}
                    onFocus={() => handleFocus('from')}
                    onClick={() => handleFocus('from')}
                    onChange={(e) => handleInputChange('from', e.target.value)}
                    autoComplete="off"
                  />
                </InputWrapper>
                <InputWrapper {...commonProps} label="To" fieldId="to" helper="Drop City">
                  <MapPin className="text-reroute-teal mr-3 shrink-0" size={20} />
                  <input 
                    className="bg-transparent border-none outline-none w-full font-black text-lg text-gray-900 placeholder:text-gray-300 min-w-0" 
                    placeholder="Where to?"
                    value={bookingDetails.to || ''}
                    onFocus={() => handleFocus('to')}
                    onClick={() => handleFocus('to')}
                    onChange={(e) => handleInputChange('to', e.target.value)}
                    autoComplete="off"
                  />
                </InputWrapper>
                <InputWrapper {...commonProps} label="Start Date">
                  <Calendar className="text-gray-400 mr-3 shrink-0" size={20} />
                  <input 
                    type="date"
                    className="bg-transparent border-none outline-none w-full font-black text-lg text-gray-900 min-w-0 cursor-pointer"
                    value={bookingDetails.pickupDate || ''}
                    onChange={(e) => onUpdate({ pickupDate: e.target.value })}
                  />
                </InputWrapper>
                <InputWrapper {...commonProps} label="Return Date">
                  <Calendar className="text-reroute-teal mr-3 shrink-0" size={20} />
                  <input 
                    type="date"
                    className="bg-transparent border-none outline-none w-full font-black text-lg text-gray-900 min-w-0 cursor-pointer"
                    value={bookingDetails.returnDate || ''}
                    onChange={(e) => onUpdate({ returnDate: e.target.value })}
                  />
                </InputWrapper>
                <InputWrapper {...commonProps} label="Time" className="xl:border-r-0">
                  <Clock className="text-gray-400 mr-3 shrink-0" size={20} />
                  <div className="relative flex-grow min-w-0">
                    <select 
                      className="bg-transparent border-none outline-none w-full font-black text-lg text-gray-900 appearance-none cursor-pointer pr-8 truncate"
                      value={bookingDetails.pickupTime || ''}
                      onChange={(e) => onUpdate({ pickupTime: e.target.value })}
                    >
                      <option value="">Select Time</option>
                      {Array.from({ length: 24 }).map((_, i) => (
                        <option key={i} value={`${i}:00`}>{`${i}:00`}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                  </div>
                </InputWrapper>
              </div>
            )}

            {bookingDetails.tripType === TripType.LOCAL && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full overflow-visible">
                <InputWrapper {...commonProps} label="City" fieldId="from" helper="Select City" isLiveLocationEnabled>
                  <MapPin className="text-gray-400 mr-3 shrink-0" size={20} />
                  <input 
                    className="bg-transparent border-none outline-none w-full font-black text-lg text-gray-900 placeholder:text-gray-300 min-w-0" 
                    placeholder="Enter City"
                    value={bookingDetails.from || ''}
                    onFocus={() => handleFocus('from')}
                    onClick={() => handleFocus('from')}
                    onChange={(e) => handleInputChange('from', e.target.value)}
                    autoComplete="off"
                  />
                </InputWrapper>
                <InputWrapper {...commonProps} label="Date">
                  <Calendar className="text-gray-400 mr-3 shrink-0" size={20} />
                  <input 
                    type="date"
                    className="bg-transparent border-none outline-none w-full font-black text-lg text-gray-900 min-w-0 cursor-pointer"
                    value={bookingDetails.pickupDate || ''}
                    onChange={(e) => onUpdate({ pickupDate: e.target.value })}
                  />
                </InputWrapper>
                <InputWrapper {...commonProps} label="Time" className="lg:border-r-0">
                  <Clock className="text-gray-400 mr-3 shrink-0" size={20} />
                  <div className="relative flex-grow min-w-0">
                    <select 
                      className="bg-transparent border-none outline-none w-full font-black text-lg text-gray-900 appearance-none cursor-pointer pr-8 truncate"
                      value={bookingDetails.pickupTime || ''}
                      onChange={(e) => onUpdate({ pickupTime: e.target.value })}
                    >
                      <option value="">Select Time</option>
                      {Array.from({ length: 24 }).map((_, i) => (
                        <option key={i} value={`${i}:00`}>{`${i}:00`}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                  </div>
                </InputWrapper>
              </div>
            )}

            {bookingDetails.tripType === TripType.AIRPORT && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 w-full overflow-visible">
                <InputWrapper {...commonProps} label="Service" helper="Select Sub-Type">
                  <Plane className="text-gray-400 mr-3 shrink-0" size={20} />
                  <div className="relative flex-grow min-w-0">
                    <select 
                      className="bg-transparent border-none outline-none w-full font-black text-lg text-gray-900 appearance-none cursor-pointer pr-8 truncate"
                      value={bookingDetails.airportTripSubtype || 'DROP'}
                      onChange={(e) => onUpdate({ airportTripSubtype: e.target.value as any })}
                    >
                      <option value="DROP">Drop to Airport</option>
                      <option value="PICKUP">Pickup from Airport</option>
                    </select>
                    <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                  </div>
                </InputWrapper>
                <InputWrapper 
                  {...commonProps} 
                  label={bookingDetails.airportTripSubtype === 'DROP' ? "Pickup Area" : "Drop Area"} 
                  fieldId="pickupAddress" 
                  helper="Locality / Address" 
                  isLiveLocationEnabled
                >
                  <MapPin className="text-gray-400 mr-3 shrink-0" size={20} />
                  <input 
                    className="bg-transparent border-none outline-none w-full font-black text-lg text-gray-900 placeholder:text-gray-300 min-w-0" 
                    placeholder="Enter Locality"
                    value={bookingDetails.pickupAddress || ''}
                    onFocus={() => handleFocus('pickupAddress')}
                    onClick={() => handleFocus('pickupAddress')}
                    onChange={(e) => handleInputChange('pickupAddress', e.target.value)}
                    autoComplete="off"
                  />
                </InputWrapper>
                <InputWrapper 
                  {...commonProps} 
                  label="Airport" 
                  fieldId="to" 
                  helper="Terminal Name"
                >
                  <Plane className="text-reroute-teal mr-3 shrink-0" size={20} />
                  <input 
                    className="bg-transparent border-none outline-none w-full font-black text-lg text-gray-900 placeholder:text-gray-300 min-w-0" 
                    placeholder="Search Airport"
                    value={bookingDetails.to || ''}
                    onFocus={() => handleFocus('to')}
                    onClick={() => handleFocus('to')}
                    onChange={(e) => handleInputChange('to', e.target.value)}
                    autoComplete="off"
                  />
                </InputWrapper>
                <InputWrapper {...commonProps} label="Date">
                  <Calendar className="text-gray-400 mr-3 shrink-0" size={20} />
                  <input 
                    type="date"
                    className="bg-transparent border-none outline-none w-full font-black text-lg text-gray-900 min-w-0 cursor-pointer"
                    value={bookingDetails.pickupDate || ''}
                    onChange={(e) => onUpdate({ pickupDate: e.target.value })}
                  />
                </InputWrapper>
                <InputWrapper {...commonProps} label="Time" className="xl:border-r-0">
                  <Clock className="text-gray-400 mr-3 shrink-0" size={20} />
                  <div className="relative flex-grow min-w-0">
                    <select 
                      className="bg-transparent border-none outline-none w-full font-black text-lg text-gray-900 appearance-none cursor-pointer pr-8 truncate"
                      value={bookingDetails.pickupTime || ''}
                      onChange={(e) => onUpdate({ pickupTime: e.target.value })}
                    >
                      <option value="">Select Time</option>
                      {Array.from({ length: 24 }).map((_, i) => (
                        <option key={i} value={`${i}:00`}>{`${i}:00`}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                  </div>
                </InputWrapper>
              </div>
            )}
          </div>

          <div className="flex justify-center md:justify-end">
            <button 
              type="button" 
              onClick={onExplore}
              className="w-full md:w-auto bg-reroute-teal hover:bg-teal-700 text-white font-black py-4 md:py-4.5 px-10 md:px-14 rounded-2xl md:rounded-[1.25rem] shadow-[0_20px_40px_-12px_rgba(0,150,171,0.4)] hover:shadow-[0_25px_50px_-12px_rgba(0,150,171,0.5)] transition-all transform hover:scale-[1.02] active:scale-95 text-sm md:text-base uppercase tracking-[0.15em] flex items-center justify-center gap-3 md:gap-4"
            >
              Explore Cabs
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingWidget;
