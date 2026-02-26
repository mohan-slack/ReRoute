
import React from 'react';
import { Clock, Navigation, Briefcase, CheckCircle2, Home, MapPin, MousePointer2, ShieldCheck, Wallet, ShoppingBag, Landmark, ArrowRight, Star, Building2 } from 'lucide-react';
import { ViewType } from '../App';

interface LocalDetailsProps {
  onNavigate: (view: ViewType) => void;
}

const LocalDetails: React.FC<LocalDetailsProps> = ({ onNavigate }) => {
  const cities: { name: string; view: ViewType }[] = [
    { name: 'Bangalore', view: 'bangalore' },
    { name: 'Hyderabad', view: 'hyderabad' },
    { name: 'Mumbai', view: 'mumbai' },
    { name: 'Delhi', view: 'delhi' },
    { name: 'Kolkata', view: 'kolkata' },
    { name: 'Chennai', view: 'chennai' },
    { name: 'Ahmedabad', view: 'ahmedabad' },
    { name: 'Goa', view: 'goa' }
  ];

  const cabOptions = [
    { type: 'AC Hatchback', seats: 4, desc: 'Economy Cabs', rate: '₹9/km', image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=400' },
    { type: 'AC Sedan', seats: 4, desc: 'Premium Economy Cabs', rate: '₹12/km', image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=400' },
    { type: 'AC SUV Large', seats: 7, desc: 'Perfect for Families', rate: '₹13.5/km', image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=400' },
    { type: 'Full Size Van', seats: 12, desc: 'Group Travel Friendly', rate: '₹25/km', image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=400' },
  ];

  return (
    <div className="animate-in fade-in duration-500 bg-white">
      {/* Hero Section */}
      <div className="relative h-[65vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&q=80&w=1600" 
            alt="City street with modern cars" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/30"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
          <button 
            onClick={() => onNavigate('home')}
            className="mb-8 flex items-center gap-2 text-reroute-teal font-bold hover:text-white transition-colors group"
          >
            <Home size={18} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
          </button>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6">
            <Clock size={14} className="text-reroute-teal" />
            <span className="text-xs font-bold uppercase tracking-widest">Premium City Mobility</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            Local Hourly Rentals
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl leading-relaxed">
            Trust us when we say: <span className="text-white font-black">Travel begins with ReRoute.</span> Your dedicated chauffeur for the ultimate city commute.
          </p>
        </div>
      </div>

      {/* City Network Hub */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-gray-900 mb-4">Car Rental Services</h2>
            <div className="w-24 h-1 bg-reroute-teal mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {cities.map((city) => (
              <button
                key={city.view}
                onClick={() => onNavigate(city.view)}
                className="group bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-reroute-teal transition-all text-center"
              >
                <MapPin className="mx-auto mb-4 text-gray-300 group-hover:text-reroute-teal transition-colors" size={28} />
                <span className="text-lg font-black text-gray-900 group-hover:text-reroute-teal transition-colors">Car rental in {city.name}</span>
                <div className="mt-4 flex items-center justify-center gap-1 text-[10px] font-black text-reroute-teal uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  Explore City <ArrowRight size={12} />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Cab Options & Rates */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-black text-gray-900 mb-2">Cab Options and Car Rental Rates</h2>
            <p className="text-gray-500">Transparent pricing for every group size.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cabOptions.map((opt, idx) => (
              <div key={idx} className="bg-white rounded-[2rem] border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all">
                <div className="h-48 overflow-hidden">
                  <img src={opt.image} alt={opt.type} className="w-full h-full object-cover" />
                </div>
                <div className="p-8">
                  <h4 className="text-xl font-black text-gray-900 mb-1">{opt.type}</h4>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">{opt.desc}</p>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="flex items-center gap-1.5 text-gray-600 font-bold text-sm">
                      <Briefcase size={16} className="text-reroute-teal" /> {opt.seats} Pax
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-600 font-bold text-sm">
                      <Clock size={16} className="text-reroute-teal" /> All-AC
                    </div>
                  </div>
                  <div className="flex items-end justify-between pt-6 border-t border-gray-50">
                    <div>
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Starts at</p>
                      <p className="text-2xl font-black text-reroute-teal">{opt.rate}</p>
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

      {/* Benefits Section */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4">Why choose chauffeur-driven car rental?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Maneuvering busy traffic is tough when you're unfamiliar with city routes. ReRoute promises you comfort.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <MapPin />, title: "Doorstep Pickup", desc: "Travel anywhere with guaranteed door-to-door service at no extra cost." },
              { icon: <ShieldCheck />, title: "Zero Liability", desc: "Pay no security deposits when booking a ReRoute car rental." },
              { icon: <Wallet />, title: "Affordable Price", desc: "Competitive rates including fuel, state/toll charges, and driver allowance." },
              { icon: <Star />, title: "Reliable Service", desc: "Leave the stress of last-minute cancellations behind. We always show up." }
            ].map((b, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 bg-reroute-teal/20 text-reroute-teal rounded-xl flex items-center justify-center mb-6">
                  {b.icon}
                </div>
                <h5 className="text-xl font-bold mb-3">{b.title}</h5>
                <p className="text-gray-400 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
               <h2 className="text-4xl font-black text-gray-900 mb-8">Service Guaranteed</h2>
               <p className="text-lg text-gray-600 leading-relaxed mb-8">
                 At ReRoute, we guarantee reliable service. Our cabs don't cancel on our customers unexpectedly, and our chauffeurs ensure to complete all trips with maximum efficiency and the best service quality.
               </p>
               <div className="space-y-4">
                 <div className="flex items-center gap-4 bg-gray-50 p-6 rounded-2xl border border-gray-100">
                    <div className="w-10 h-10 bg-reroute-teal text-white rounded-xl flex items-center justify-center">
                      <Clock size={20} />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">8 Hours / 80 KM</p>
                      <p className="text-xs text-gray-500">Perfect for full-day business or shopping.</p>
                    </div>
                 </div>
                 <div className="flex items-center gap-4 bg-gray-50 p-6 rounded-2xl border border-gray-100">
                    <div className="w-10 h-10 bg-reroute-teal text-white rounded-xl flex items-center justify-center">
                      <Clock size={20} />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">12 Hours / 120 KM</p>
                      <p className="text-xs text-gray-500">Ideal for extensive city tours or events.</p>
                    </div>
                 </div>
               </div>
            </div>
            <div className="md:w-1/2">
              <img src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=800" className="rounded-[3rem] shadow-2xl" alt="Chauffeur service" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-reroute-teal rounded-[3rem] p-16 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
            <h3 className="text-4xl font-black mb-8 relative z-10">Ready to Book Your Local Rental?</h3>
            <button 
              onClick={() => onNavigate('home')}
              className="bg-white text-reroute-teal font-black py-5 px-14 rounded-2xl shadow-xl transition-all transform hover:scale-105 active:scale-95 relative z-10"
            >
              Secure Your Ride Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LocalDetails;
