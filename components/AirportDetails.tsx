
import React from 'react';
/* Added missing Navigation, Users, and ChevronRight icons to the lucide-react import list to resolve name resolution errors */
import { Plane, CalendarCheck, MapPin, PhoneCall, ShieldCheck, Home, Clock, Zap, Luggage, Star, Info, Wallet, CheckCircle2, ArrowRight, MousePointer2, TrendingDown, Timer, Navigation, Users, ChevronRight } from 'lucide-react';
import { ViewType } from '../App';

interface AirportDetailsProps {
  onNavigate: (view: ViewType) => void;
}

const AirportDetails: React.FC<AirportDetailsProps> = ({ onNavigate }) => {
  const airportCities = [
    "Airport Taxi in Bangalore", "Airport Taxi in Ahmedabad", "Airport Taxi in Delhi", 
    "Airport Taxi in Goa", "Airport Taxi in Hyderabad", "Airport Taxi in Chennai", 
    "Airport Taxi in Mumbai", "Airport Taxi in Kochi"
  ];

  const cabRates = [
    { type: 'AC Hatchback', seats: 4, label: 'Economy Cabs', rate: '₹8.5/km', image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=400' },
    { type: 'AC Sedan', seats: 4, label: 'Premium Economy', rate: '₹9/km', image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=400' },
    { type: 'AC SUV Large', seats: 7, label: 'Perfect for Families', rate: '₹13.5/km', image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=400' },
    { type: 'Full Size Van', seats: 12, label: 'Group Travel', rate: '₹25/km', image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=400' },
  ];

  const dropFares = [
    { locality: 'Indiranagar', sedan: '₹1066', suv: '₹1599', innova: '₹1695' },
    { locality: 'Jayanagar', sedan: '₹1066', suv: '₹1599', innova: '₹1695' },
    { locality: 'Whitefield', sedan: '₹1044', suv: '₹1599', innova: '₹1695' },
    { locality: 'Electronic City', sedan: '₹1303', suv: '₹1811', innova: 'Propeller' }, // Standardized key if needed, keeping original values
    { locality: 'Malleswaram', sedan: '₹898', suv: '₹1599', innova: '₹1695' },
  ];

  const pickupFares = [
    { locality: 'Koramangala', sedan: '₹1095', suv: '₹1642', innova: '₹1695' },
    { locality: 'Sarjapur', sedan: '₹1238', suv: '₹1854', innova: '₹1907' },
    { locality: 'Bannerghatta Road', sedan: '₹1095', suv: '₹1642', innova: '₹1695' },
    { locality: 'Banashankari', sedan: '₹1162', suv: '₹1854', innova: '₹1907' },
    { locality: 'Cox Town', sedan: '₹1000', suv: '₹1642', innova: '₹1695' },
  ];

  return (
    <div className="animate-in fade-in duration-500 bg-white">
      {/* Hero Section */}
      <div className="relative h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1600" 
            alt="Airport terminal gate" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white w-full">
          <button 
            onClick={() => onNavigate('home')}
            className="mb-8 inline-flex items-center gap-2 text-reroute-teal font-black text-xs uppercase tracking-widest hover:text-white transition-colors group"
          >
            <Home size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
          </button>
          
          <div className="flex flex-wrap gap-4 mb-10">
            <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/20">
               <p className="text-[10px] font-black text-reroute-teal uppercase tracking-widest mb-1">Distance</p>
               <p className="text-xl font-black">25-45 km</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/20">
               <p className="text-[10px] font-black text-reroute-teal uppercase tracking-widest mb-1">Time</p>
               <p className="text-xl font-black">1-2 Hours</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/20">
               <p className="text-[10px] font-black text-reroute-teal uppercase tracking-widest mb-1">Starting from</p>
               <p className="text-xl font-black text-reroute-teal">₹1059</p>
            </div>
          </div>

          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight">
            Stress-Free <br />
            <span className="text-reroute-teal">Airport Transfers</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl leading-relaxed font-medium">
            India's most reliable airport taxi network. Track flights, skip queues, and arrive in style.
          </p>
        </div>
      </div>

      {/* Network Hub Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-black text-gray-900 mb-8 flex items-center gap-2">
            <Plane className="text-reroute-teal" /> Airport Taxi Services
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {airportCities.map(city => (
              <button 
                key={city} 
                onClick={() => onNavigate('home')} 
                className="bg-white p-5 rounded-[1.5rem] border border-gray-100 text-left text-sm font-black text-gray-700 hover:border-reroute-teal hover:text-reroute-teal transition-all shadow-sm hover:shadow-md"
              >
                {city}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Matrix */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-gray-900 mb-4">Airport Pickup and Drop Rates</h2>
            <div className="w-24 h-1 bg-reroute-teal mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cabRates.map((p, i) => (
              <div key={i} className="bg-white rounded-[2.5rem] border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all">
                <div className="h-44 relative">
                  <img src={p.image} className="w-full h-full object-cover" alt={p.type} />
                  <div className="absolute top-4 left-4">
                     <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest text-gray-900">AC Fleet</span>
                  </div>
                </div>
                <div className="p-8">
                  <h4 className="text-xl font-black text-gray-900 mb-1">{p.type}</h4>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-6">{p.seats} Seats • {p.label}</p>
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase">Per KM Rate</p>
                      <p className="text-2xl font-black text-reroute-teal">{p.rate}</p>
                    </div>
                    <button onClick={() => onNavigate('home')} className="w-12 h-12 bg-gray-900 text-white rounded-xl flex items-center justify-center hover:bg-reroute-teal transition-colors shadow-lg">
                      <ArrowRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
          <Plane size={800} className="absolute -top-40 -right-40" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-black mb-8 leading-tight">Why book ReRoute for <br />Bangalore Airport?</h2>
              <p className="text-lg text-gray-400 leading-relaxed mb-8">
                Kempegowda International Airport is located about 40KM north of the city center. Pre-booking ensures a hassle-free arrival. Our vetted chauffeurs guarantee punctual service so you never miss a flight or arrive late.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "24/7 Availability", desc: "Round-the-clock service for late-night or early-morning flights." },
                  { title: "Expert Chauffeurs", desc: "Drivers well-versed in city routes and terminal traffic patterns." },
                  { title: "Zero Wait Time", desc: "Your driver is waiting before you even land. No more long queues." },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-5">
                    <div className="w-12 h-12 rounded-2xl bg-reroute-teal/20 flex items-center justify-center text-reroute-teal shrink-0">
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                      <h5 className="font-bold text-xl mb-1">{item.title}</h5>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-xl p-10 rounded-[3rem] border border-white/10">
               <h3 className="text-2xl font-black mb-8">Services Offered</h3>
               <div className="space-y-8">
                  <div className="flex gap-4">
                     <Timer className="text-reroute-teal shrink-0" />
                     <div>
                        <p className="font-bold">Airport Pickup Service</p>
                        <p className="text-xs text-gray-400 mt-1 leading-relaxed">Book up to 2 hours before. Door-to-door service with luggage assistance at the arrival gate.</p>
                     </div>
                  </div>
                  <div className="flex gap-4">
                     <Plane className="text-reroute-teal shrink-0 -rotate-45" />
                     <div>
                        <p className="font-bold">Airport Drop Service</p>
                        <p className="text-xs text-gray-400 mt-1 leading-relaxed">Punctual terminal drops from any locality. Guaranteed on-time arrival for your check-in.</p>
                     </div>
                  </div>
                  <div className="flex gap-4">
                     {/* Added missing Navigation icon component */}
                     <Navigation className="text-reroute-teal shrink-0" />
                     <div>
                        <p className="font-bold">Intercity Airport Transfers</p>
                        <p className="text-xs text-gray-400 mt-1 leading-relaxed">Direct rides to Mysore, Coorg, Hosur, or Chikmagalur right from the terminal.</p>
                     </div>
                  </div>
                  <div className="flex gap-4">
                     <Clock className="text-reroute-teal shrink-0" />
                     <div>
                        <p className="font-bold">Local Hourly Rentals</p>
                        <p className="text-xs text-gray-400 mt-1 leading-relaxed">Dedicated car for quick sightseeing or errands before your flight departure.</p>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-gray-900 mb-4">The ReRoute Edge</h2>
            <p className="text-gray-500">Why we are the preferred choice for Bangalore travelers.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              /* Added missing Users icon component */
              { icon: <Users />, title: "Expert Chauffeurs", desc: "Placard greeting, luggage help, and local insights." },
              { icon: <ShieldCheck />, title: "Single Booking", desc: "Covering airport, local, and outstation in one app." },
              { icon: <TrendingDown />, title: "No Surge Pricing", desc: "Prepaid facility helps avoid sell-outs and surges." },
              { icon: <MousePointer2 />, title: "Flexible Itineraries", desc: "Choose your own routes and stops with absolute freedom." }
            ].map((b, i) => (
              <div key={i} className="p-8 rounded-[2rem] bg-gray-50 border border-gray-100 hover:bg-reroute-light transition-all text-center">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-reroute-teal mx-auto mb-6 shadow-sm">
                  {b.icon}
                </div>
                <h5 className="font-black text-gray-900 mb-3">{b.title}</h5>
                <p className="text-xs text-gray-500 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fare Tables */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Drop Table */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                 <Plane className="text-reroute-teal -rotate-45" />
                 <h3 className="text-2xl font-black text-gray-900">Fare for Airport Drop</h3>
              </div>
              <div className="bg-white rounded-[2rem] shadow-xl border border-gray-100 overflow-hidden">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-gray-900 text-white">
                      <th className="px-6 py-5 text-[10px] font-black uppercase tracking-widest">From Locality</th>
                      <th className="px-6 py-5 text-[10px] font-black uppercase tracking-widest text-center">Sedan</th>
                      <th className="px-6 py-5 text-[10px] font-black uppercase tracking-widest text-center">SUV</th>
                      <th className="px-6 py-5 text-[10px] font-black uppercase tracking-widest text-center">Innova</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {dropFares.map((f, i) => (
                      <tr key={i} className="hover:bg-reroute-light transition-colors group">
                        <td className="px-6 py-5 font-bold text-gray-900 text-sm">{f.locality}</td>
                        <td className="px-6 py-5 text-center font-black text-gray-700 text-sm">{f.sedan}</td>
                        <td className="px-6 py-5 text-center font-black text-gray-700 text-sm">{f.suv}</td>
                        <td className="px-6 py-5 text-center font-black text-reroute-teal text-sm">{f.innova}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Pickup Table */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                 <Plane className="text-reroute-teal rotate-45" />
                 <h3 className="text-2xl font-black text-gray-900">Fare for Airport Pickup</h3>
              </div>
              <div className="bg-white rounded-[2rem] shadow-xl border border-gray-100 overflow-hidden">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-gray-900 text-white">
                      <th className="px-6 py-5 text-[10px] font-black uppercase tracking-widest">To Locality</th>
                      <th className="px-6 py-5 text-[10px] font-black uppercase tracking-widest text-center">Sedan</th>
                      <th className="px-6 py-5 text-[10px] font-black uppercase tracking-widest text-center">SUV</th>
                      <th className="px-6 py-5 text-[10px] font-black uppercase tracking-widest text-center">Innova</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {pickupFares.map((f, i) => (
                      <tr key={i} className="hover:bg-reroute-light transition-colors group">
                        <td className="px-6 py-5 font-bold text-gray-900 text-sm">{f.locality}</td>
                        <td className="px-6 py-5 text-center font-black text-gray-700 text-sm">{f.sedan}</td>
                        <td className="px-6 py-5 text-center font-black text-gray-700 text-sm">{f.suv}</td>
                        <td className="px-6 py-5 text-center font-black text-reroute-teal text-sm">{f.innova}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips & Guidance */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-reroute-light rounded-[3rem] p-12 md:p-20 border border-reroute-teal/10">
            <div className="flex flex-col lg:flex-row gap-16">
               <div className="lg:w-1/2">
                  <h3 className="text-3xl font-black text-gray-900 mb-8">Tips for a Smooth Transfer</h3>
                  <ul className="space-y-6">
                    {[
                      "Pre-book with ReRoute to avoid airport surge pricing.",
                      "Share your flight timings for better chauffeur coordination.",
                      "Keep buffer time if traveling during peak traffic hours.",
                      "Choose a suitable car type based on luggage volume."
                    ].map((tip, i) => (
                      <li key={i} className="flex gap-4 items-start">
                        <div className="w-6 h-6 bg-reroute-teal rounded-full flex items-center justify-center text-white text-xs font-black shrink-0 mt-1">
                          {i + 1}
                        </div>
                        <p className="text-gray-700 font-bold leading-relaxed">{tip}</p>
                      </li>
                    ))}
                  </ul>
               </div>
               <div className="lg:w-1/2 bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
                  <h4 className="text-xl font-black text-gray-900 mb-6">How to Book</h4>
                  <div className="space-y-6 relative">
                    <div className="absolute left-4 top-4 bottom-4 w-px bg-gray-100"></div>
                    {[
                      { s: "01", t: "Visit website or download app", d: "Login to your ReRoute account." },
                      { s: "02", t: "Go to Airport tab", d: "Select Pickup or Drop service." },
                      { s: "03", t: "Enter Details", d: "Mention terminal name and locality." },
                      { s: "04", t: "Explore Cabs", d: "Choose the perfect vehicle for your group." }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-8 relative z-10">
                        <div className="w-8 h-8 rounded-full bg-reroute-teal text-white flex items-center justify-center text-xs font-black shadow-md shrink-0">
                          {item.s}
                        </div>
                        <div>
                          <p className="font-bold text-gray-900 text-sm">{item.t}</p>
                          <p className="text-xs text-gray-400 mt-1">{item.d}</p>
                        </div>
                      </div>
                    ))}
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outstation Options */}
      <section className="pb-24 pt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <h3 className="text-2xl font-black text-gray-900 mb-10 text-center uppercase tracking-widest">Popular destinations from Bangalore Airport</h3>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { route: "Bangalore to Nandi Hills", dist: "35 km", time: "1h" },
                { route: "Bangalore to Mysore", dist: "180 km", time: "4h" },
                { route: "Bangalore to Coorg", dist: "280 km", time: "6h" },
                { route: "Bangalore to Tirupati", dist: "250 km", time: "5h" },
                { route: "Bangalore to Ooty", dist: "300 km", time: "7h" },
                { route: "Bangalore to Chennai", dist: "340 km", time: "7h" }
              ].map((r, i) => (
                <button key={i} onClick={() => onNavigate('home')} className="p-6 bg-white border border-gray-100 rounded-3xl text-left hover:border-reroute-teal hover:shadow-xl transition-all group">
                   <div className="flex justify-between items-start mb-4">
                      <p className="font-black text-gray-900 group-hover:text-reroute-teal">{r.route}</p>
                      {/* Added missing ChevronRight icon component usage */}
                      <ChevronRight className="text-gray-300 group-hover:text-reroute-teal" size={18} />
                   </div>
                   <div className="flex gap-4">
                      <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{r.dist}</span>
                      <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">•</span>
                      <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{r.time}</span>
                   </div>
                </button>
              ))}
           </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-reroute-teal rounded-[3rem] p-16 text-center text-white shadow-2xl relative overflow-hidden">
            <h3 className="text-4xl font-black mb-8 relative z-10">Ready for Departure?</h3>
            <button 
              onClick={() => onNavigate('home')}
              className="bg-white text-reroute-teal font-black py-5 px-14 rounded-2xl shadow-xl transition-all transform hover:scale-105 active:scale-95 relative z-10"
            >
              Book Your Airport Taxi Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AirportDetails;
