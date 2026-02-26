
import React from 'react';
import { CheckCircle2, MapPin, Car, ShieldCheck, PhoneCall, ArrowRight, Home, Users, Zap, Star, Info, Clock, Building2 } from 'lucide-react';
import { ViewType } from '../App';

interface OutstationDetailsProps {
  onNavigate: (view: ViewType) => void;
}

const OutstationDetails: React.FC<OutstationDetailsProps> = ({ onNavigate }) => {
  const taxiServices = [
    "Bangalore Taxi Service", "Mumbai Taxi Service", "Delhi Taxi Service", "Hyderabad Taxi Service",
    "Goa Taxi Service", "Jaipur Taxi Service", "Dehradhun Taxi Service", "Ahmedabad Taxi Service"
  ];

  const ttServices = [
    "Tempo Traveller in Bangalore", "Tempo Traveller in Chennai", "Tempo Traveller in Tirupati",
    "Tempo Traveller in Ahmedabad", "Minibus for rent in Bangalore", "Minibus for rent in Chennai",
    "Minibus for hire in Mumbai", "Mini bus in Kolkata"
  ];

  const pricing = [
    { type: 'AC Hatchback', seats: 4, label: 'Economy Cabs', rate: '₹9/km', image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=400' },
    { type: 'AC Sedan', seats: 4, label: 'Premium Economy', rate: '₹12/km', image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=400' },
    { type: 'AC SUV Large', seats: 7, label: 'Perfect for Families', rate: '₹16/km', image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=400' },
    { type: 'Full Size Van', seats: 12, label: 'Group Travel', rate: '₹22/km', image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=400' },
  ];

  return (
    <div className="animate-in fade-in duration-500 bg-white">
      {/* Hero Section */}
      <div className="relative h-[65vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1600" 
            alt="Scenic mountain road trip" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
          <button 
            onClick={() => onNavigate('home')}
            className="mb-8 flex items-center gap-2 text-reroute-teal font-bold hover:text-white transition-colors group"
          >
            <Home size={18} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
          </button>
          <div className="flex gap-4 mb-8">
            <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20">
               <p className="text-[10px] font-black text-reroute-teal uppercase tracking-widest">Since</p>
               <p className="text-lg font-black">2006</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20">
               <p className="text-[10px] font-black text-reroute-teal uppercase tracking-widest">Support</p>
               <p className="text-lg font-black">24X7</p>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">Outstation Cabs</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl leading-relaxed">
            Premium intercity travel starting from <span className="text-white font-black">₹9/km.</span> Your trusted road companion for over 2000 cities.
          </p>
        </div>
      </div>

      {/* Service Selection Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-black text-gray-900 mb-8 flex items-center gap-2">
                <Car className="text-reroute-teal" /> Book Taxi Services
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {taxiServices.map(city => (
                  <button key={city} onClick={() => onNavigate('home')} className="bg-white p-4 rounded-2xl border border-gray-100 text-left text-sm font-bold text-gray-700 hover:border-reroute-teal hover:text-reroute-teal transition-all shadow-sm">
                    {city}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-black text-gray-900 mb-8 flex items-center gap-2">
                <Users className="text-reroute-teal" /> Tempo Traveller & Minibus
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {ttServices.map(tt => (
                  <button key={tt} onClick={() => onNavigate('home')} className="bg-white p-4 rounded-2xl border border-gray-100 text-left text-sm font-bold text-gray-700 hover:border-reroute-teal hover:text-reroute-teal transition-all shadow-sm">
                    {tt}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Options */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-gray-900 mb-4">Outstation Cab Options & Rates</h2>
            <div className="w-24 h-1 bg-reroute-teal mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricing.map((p, i) => (
              <div key={i} className="bg-white rounded-[2.5rem] border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all">
                <div className="h-44">
                  <img src={p.image} className="w-full h-full object-cover" alt={p.type} />
                </div>
                <div className="p-8">
                  <h4 className="text-xl font-black text-gray-900 mb-1">{p.type}</h4>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-6">{p.seats} Seats • {p.label}</p>
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase">Starts from</p>
                      <p className="text-2xl font-black text-reroute-teal">{p.rate}</p>
                    </div>
                    <button onClick={() => onNavigate('home')} className="w-12 h-12 bg-gray-900 text-white rounded-xl flex items-center justify-center hover:bg-reroute-teal transition-colors">
                      <ArrowRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Trust Section */}
      <section className="py-24 bg-gray-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-reroute-teal/10 rounded-full blur-[100px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-black mb-8 leading-tight">What makes ReRoute the most <br /> trusted cab service?</h2>
              <p className="text-lg text-gray-400 leading-relaxed mb-8">
                With nearly two decades of expertise, we are a leading company for chauffeur-driven taxi service across 2000+ cities. We specialise in clean cabs, reliable on-time service, and verified drivers.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4 bg-white/5 p-6 rounded-3xl border border-white/10">
                  <ShieldCheck className="text-reroute-teal shrink-0" size={28} />
                  <div>
                    <h5 className="font-bold text-xl mb-1">100% Service Guaranteed</h5>
                    <p className="text-sm text-gray-400">No last-minute cancellations. We complete every trip with maximum efficiency.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-white/5 p-6 rounded-3xl border border-white/10">
                  <Star className="text-reroute-teal shrink-0" size={28} />
                  <div>
                    <h5 className="font-bold text-xl mb-1">Top-Rated Drivers</h5>
                    <p className="text-sm text-gray-400">Chauffeurs consistently rated 4.5+ based on premier service quality.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <img src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=600" className="rounded-[3rem] h-80 w-full object-cover shadow-2xl" alt="Chauffeur" />
              <div className="space-y-6 pt-12">
                 <div className="bg-reroute-teal p-8 rounded-[3rem] text-center">
                    <p className="text-4xl font-black">2000+</p>
                    <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">Cities Covered</p>
                 </div>
                 <img src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=400" className="rounded-[2.5rem] h-48 w-full object-cover shadow-2xl" alt="Premium sedan" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tempo Traveller Specialized Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-reroute-light rounded-[3rem] p-12 md:p-20 border border-reroute-teal/10">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2">
                <h3 className="text-3xl font-black text-gray-900 mb-6">Hire a Tempo Traveller</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Perfect for groups larger than 8 members. Our tempo travellers offer additional leg space and are much more economical per head compared to multiple cabs.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                  <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                    <p className="text-reroute-teal font-black text-xl mb-1">12 Seater</p>
                    <p className="text-xs text-gray-500 font-bold uppercase mb-4">Starting from ₹29/km</p>
                    <p className="text-sm font-bold text-gray-700">Ideal for family reunions</p>
                  </div>
                  <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                    <p className="text-reroute-teal font-black text-xl mb-1">16 Seater</p>
                    <p className="text-xs text-gray-500 font-bold uppercase mb-4">Starting from ₹33/km</p>
                    <p className="text-sm font-bold text-gray-700">Perfect for corporate offsites</p>
                  </div>
                </div>
                <button onClick={() => onNavigate('home')} className="bg-gray-900 text-white font-black py-4 px-10 rounded-2xl hover:bg-black transition-all shadow-xl">
                  Book a Tempo Traveller
                </button>
              </div>
              <div className="lg:w-1/2">
                <img src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800" className="rounded-[3rem] shadow-2xl" alt="Tempo Traveller" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-reroute-teal rounded-[3rem] p-16 text-center text-white shadow-2xl relative overflow-hidden">
            <h3 className="text-4xl font-black mb-8">Ready for your Road Trip?</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => onNavigate('home')}
                className="bg-white text-reroute-teal font-black py-5 px-14 rounded-2xl shadow-xl transition-all transform hover:scale-105 active:scale-95"
              >
                Secure Your Outstation Cab
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OutstationDetails;
