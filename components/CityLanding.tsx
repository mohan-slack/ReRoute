
import React from 'react';
import { MapPin, Plane, Car, Clock, ShieldCheck, Star, ChevronRight, Home, Building2, Map, Navigation, CheckCircle2, Wallet, Users, Info, Briefcase } from 'lucide-react';
import { ViewType } from '../App';

interface CityContent {
  name: string;
  heroImage: string;
  title: string;
  intro: string;
  overview: string;
  hubs: string[];
  routes: { route: string; type: string }[];
  highlights: string[];
  popularAreas: string[];
}

const CITY_DATA: Record<string, CityContent> = {
  bangalore: {
    name: "Bangalore",
    heroImage: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&q=80&w=1600",
    title: "Premium Car Rental in Bangalore",
    intro: "As a cosmopolitan city attracting thousands for work and vacation, Bangalore faces traffic challenges. ReRoute saves you time and stress.",
    overview: "Maneuvering Bangalore's busy traffic is tough if you opt for self-drive cabs. ReRoute's chauffeur-driven car hire promises comfort for business travelers and tourists alike.",
    hubs: ["Kempegowda Int'l Airport (BLR)", "Manyata Tech Park", "Whitefield IT Corridor", "MG Road Business District"],
    popularAreas: ["Koramangala", "Indiranagar", "Jayanagar", "Malleshwaram", "Whitefield", "Electronic City", "Bellandur"],
    routes: [
      { route: "Bangalore to Mysore", type: "Outstation" },
      { route: "Bangalore to Coorg", type: "Weekend Getaway" },
      { route: "Indiranagar to BLR Airport", type: "Airport Transfer" },
      { route: "Electronic City Local", type: "8h Rental" }
    ],
    highlights: ["Doorstep pickup and drop", "Zero liability - No deposits", "Verified expert chauffeurs"]
  },
  hyderabad: {
    name: "Hyderabad",
    heroImage: "https://images.unsplash.com/photo-1615460541234-2972479f6481?auto=format&fit=crop&q=80&w=1600",
    title: "Executive Car Rental in Hyderabad",
    intro: "Explore the City of Pearls with total luxury. From Cyber City to Charminar, move through traffic with an expert navigator.",
    overview: "Hyderabad's rapid growth makes driving complex. Our chauffeurs are well-versed in the twin cities' shortcuts and landmarks.",
    hubs: ["Rajiv Gandhi Int'l Airport (HYD)", "HITEC City", "Gachibowli Financial District", "Secunderabad"],
    popularAreas: ["Banjara Hills", "Jubilee Hills", "Madhapur", "Kukatpally", "Manikonda", "Begumpet"],
    routes: [
      { route: "Hyderabad to Warangal", type: "Day Trip" },
      { route: "Hyderabad to Srisailam", type: "Outstation" },
      { route: "HITEC City to HYD Airport", type: "Airport Transfer" }
    ],
    highlights: ["24/7 Airport Support", "Premium Luxury Fleet", "Clean & Sanitized Cabs"]
  },
  delhi: {
    name: "Delhi",
    heroImage: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&q=80&w=1600",
    title: "Premium Car Rental in Delhi NCR",
    intro: "Experience the capital's grandeur from the comfort of a chauffeur-driven sedan. Zero stress, maximum reliability.",
    overview: "Navigating Delhi, Noida, and Gurgaon requires expertise. Avoid parking hassles and traffic fatigue with ReRoute.",
    hubs: ["Indira Gandhi Int'l Airport (DEL)", "Gurgaon Cyber City", "Connaught Place", "Noida Sector 62"],
    popularAreas: ["South Delhi", "Vasant Kunj", "Civil Lines", "Chanakyapuri", "Dwarka", "Janakpuri"],
    routes: [
      { route: "Delhi to Agra", type: "Heritage Tour" },
      { route: "Delhi to Jaipur", type: "Road Trip" },
      { route: "Gurgaon to IGI Airport", type: "Airport Transfer" }
    ],
    highlights: ["NCR Intercity connectivity", "Reliable Highway Drivers", "Punctual Terminal Transfers"]
  },
  mumbai: {
    name: "Mumbai",
    heroImage: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?auto=format&fit=crop&q=80&w=1600",
    title: "Luxury Car Rental in Mumbai",
    intro: "In the city that never sleeps, time is money. Move through the financial capital with elegance and precision.",
    overview: "Mumbai's dense traffic demands professional handling. ReRoute provides sanctuary in the chaos of BKC and South Mumbai.",
    hubs: ["Chhatrapati Shivaji Airport (BOM)", "BKC Financial Hub", "Nariman Point", "Andheri Business District"],
    popularAreas: ["Colaba", "Bandra West", "Juhu", "Worli", "Powai", "Kolkata"],
    routes: [
      { route: "Mumbai to Pune", type: "Intercity" },
      { route: "Mumbai to Lonavala", type: "Hill Station" },
      { route: "South Mumbai to BOM Airport", type: "Airport Transfer" }
    ],
    highlights: ["Sea Link expert drivers", "BKC Corporate specialized", "Punctual Airport Pickups"]
  },
  kolkata: {
    name: "Kolkata",
    heroImage: "https://images.unsplash.com/photo-1558431382-bb7270ec1814?auto=format&fit=crop&q=80&w=1600",
    title: "Heritage Car Rental in Kolkata",
    intro: "Navigate the cultural capital's lanes with ease. From Salt Lake to Howrah, experience tradition with modern comfort.",
    overview: "Kolkata's unique geography benefits from local knowledge. Our drivers ensure you reach your destination without the hassle of narrow streets.",
    hubs: ["Netaji Subhas Chandra Bose Airport (CCU)", "Salt Lake IT Hub", "Park Street", "New Town"],
    popularAreas: ["Ballygunge", "Alipore", "Salt Lake", "Jadavpur", "Behala", "New Town"],
    routes: [
      { route: "Kolkata to Digha", type: "Beach Getaway" },
      { route: "Kolkata to Shantiniketan", type: "Cultural Trip" },
      { route: "Park Street to CCU Airport", type: "Airport Transfer" }
    ],
    highlights: ["Professional local chauffeurs", "24/7 Support in CCU", "Verified Safe Rides"]
  },
  chennai: {
    name: "Chennai",
    heroImage: "https://images.unsplash.com/photo-1582512353193-9114accf9fd1?auto=format&fit=crop&q=80&w=1600",
    title: "Executive Car Rental in Chennai",
    intro: "From IT corridors to scenic coastal drives, Chennai is best explored with a professional chauffeur.",
    overview: "Avoid the heat and traffic of OMR and Anna Salai. ReRoute provides air-conditioned luxury for every trip.",
    hubs: ["Chennai Int'l Airport (MAA)", "OMR IT Corridor", "T-Nagar", "Guindy"],
    popularAreas: ["Adyar", "Mylapore", "Nungambakkam", "Besant Nagar", "Anna Nagar", "Velachery"],
    routes: [
      { route: "Chennai to Pondicherry", type: "Coastal Trip" },
      { route: "Chennai to Mahabalipuram", type: "Day Trip" },
      { route: "OMR to MAA Airport", type: "Airport Transfer" }
    ],
    highlights: ["OMR Specialized Service", "Highway Expert Drivers", "Transparent Pricing"]
  },
  ahmedabad: {
    name: "Ahmedabad",
    heroImage: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=1600",
    title: "Business Car Rental in Ahmedabad",
    intro: "The growth engine of Gujarat. Move between business hubs with the efficiency you deserve.",
    overview: "Ahmedabad and GIFT City require precise timing. Our corporate-ready fleet is always on time.",
    hubs: ["Sardar Vallabhbhai Patel Airport (AMD)", "GIFT City", "S.G. Highway", "Manek Chowk"],
    popularAreas: ["Satellite", "Prahlad Nagar", "Navrangpura", "Vastrapur", "Bodakdev", "Bopal"],
    routes: [
      { route: "Ahmedabad to Vadodara", type: "Intercity" },
      { route: "Ahmedabad to Statue of Unity", type: "Tourist Trip" },
      { route: "S.G. Highway to AMD Airport", type: "Airport Transfer" }
    ],
    highlights: ["GIFT City corporate service", "Fixed Fare Guarantees", "Expert Local Knowledge"]
  },
  goa: {
    name: "Goa",
    heroImage: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&q=80&w=1600",
    title: "Premium Car Rental in Goa",
    intro: "Trade the scooter for luxury. Explore North and South Goa without the stress of local transport.",
    overview: "Goa's distance between attractions can be tiring. ReRoute provides the ultimate comfort for beach hopping.",
    hubs: ["Dabolim Airport (GOI)", "Mopa Airport (GOX)", "Panjim", "Madgaon"],
    popularAreas: ["Calangute", "Candolim", "Assagao", "Palolem", "Vagator", "Anjuna"],
    routes: [
      { route: "Dabolim to North Goa", type: "Transfer" },
      { route: "Mopa to South Goa", type: "Transfer" },
      { route: "Panjim Sightseeing", type: "Full Day" }
    ],
    highlights: ["Dual Airport Support", "Expert Beach Navigation", "Premium AC Comfort"]
  }
};

interface CityLandingProps {
  city: string;
  onNavigate: (view: ViewType) => void;
}

const CityLanding: React.FC<CityLandingProps> = ({ city, onNavigate }) => {
  const data = CITY_DATA[city] || CITY_DATA.bangalore;

  const cabOptions = [
    { type: 'AC Hatchback', seats: 4, desc: 'Economy Cabs', rate: '₹9/km' },
    { type: 'AC Sedan', seats: 4, desc: 'Premium Economy Cabs', rate: '₹12/km' },
    { type: 'AC SUV Large', seats: 7, desc: 'Perfect for Families', rate: '₹13.5/km' },
    { type: 'Full Size Van', seats: 12, desc: 'Group Travel Friendly', rate: '₹25/km' },
  ];

  return (
    <div className="animate-in fade-in duration-500 bg-white">
      {/* Hero Section */}
      <div className="relative h-[65vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src={data.heroImage} 
            alt={`${data.name} city view`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
          <button 
            onClick={() => onNavigate('home')}
            className="mb-8 flex items-center gap-2 text-reroute-teal font-bold hover:text-white transition-colors group"
          >
            <Home size={18} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
          </button>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            Taxi Service in <br />
            <span className="text-reroute-teal">{data.name}</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl leading-relaxed">
            {data.intro}
          </p>
        </div>
      </div>

      {/* Pricing Matrix */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-gray-900 mb-12">Cab Options and Rates in {data.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {cabOptions.map((opt, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h4 className="font-black text-gray-900 mb-1">{opt.type}</h4>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-4">{opt.seats} Seats • {opt.desc}</p>
                <div className="text-2xl font-black text-reroute-teal">{opt.rate}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* City Overview & Comparison */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-3xl font-black text-gray-900 mb-6">Why hire a car rental in {data.name}?</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {data.overview}
              </p>
              <h3 className="text-xl font-black text-gray-900 mb-6">Benefits over self-drive cabs</h3>
              <div className="space-y-4">
                {[
                  "Doorstep pickup and drop at no extra cost",
                  "Zero liability - Pay no security deposits",
                  "Budget-friendly rates including fuel and allowance",
                  "Reliable service with zero cancellation worries"
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-600">
                    <CheckCircle2 size={18} className="text-reroute-teal" />
                    <span className="font-bold">{text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-reroute-light p-10 rounded-[3rem] border border-reroute-teal/10">
               <h3 className="text-2xl font-black text-gray-900 mb-8">Popular Locations in {data.name}</h3>
               <div className="grid grid-cols-2 gap-4">
                 {data.popularAreas.map((area, i) => (
                   <div key={i} className="bg-white px-6 py-4 rounded-2xl border border-gray-100 flex items-center gap-3 shadow-sm">
                      <MapPin size={16} className="text-reroute-teal" />
                      <span className="text-sm font-bold text-gray-700">Car rental in {area}</span>
                   </div>
                 ))}
               </div>
               <button onClick={() => onNavigate('home')} className="w-full mt-10 bg-gray-900 text-white font-black py-5 rounded-2xl hover:bg-black transition-all shadow-xl">
                 Book a Cab in {data.name}
               </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Hub */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-black text-gray-900">Services Offered in {data.name}</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <Clock className="text-reroute-teal mb-4" size={32} />
              <h4 className="text-xl font-bold mb-2">Local Hourly Rentals</h4>
              <p className="text-gray-500 text-sm mb-6">Perfect for errands or shopping. Packages: 4h/40km, 8h/80km, 12h/120km.</p>
              <button onClick={() => onNavigate('local')} className="text-reroute-teal font-black text-xs flex items-center gap-1 uppercase">Learn More <ChevronRight size={14} /></button>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <Car className="text-reroute-teal mb-4" size={32} />
              <h4 className="text-xl font-bold mb-2">Outstation Cabs</h4>
              <p className="text-gray-500 text-sm mb-6">Expert drivers for your weekend getaways or intercity round trips.</p>
              <button onClick={() => onNavigate('outstation')} className="text-reroute-teal font-black text-xs flex items-center gap-1 uppercase">Learn More <ChevronRight size={14} /></button>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <Plane className="text-reroute-teal mb-4" size={32} />
              <h4 className="text-xl font-bold mb-2">Airport Transfers</h4>
              <p className="text-gray-500 text-sm mb-6">Punctual pickup and drop-off with live flight tracking support.</p>
              <button onClick={() => onNavigate('airport')} className="text-reroute-teal font-black text-xs flex items-center gap-1 uppercase">Learn More <ChevronRight size={14} /></button>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Routes */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 text-white rounded-[3rem] p-12 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-reroute-teal/10 rounded-full blur-[80px]"></div>
            <h3 className="text-3xl font-black mb-8 relative z-10">Popular Routes from {data.name}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
              {data.routes.map((route, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                  <div className="text-reroute-teal text-[10px] font-black uppercase tracking-widest mb-1">{route.type}</div>
                  <div className="font-bold flex items-center justify-between">{route.route} <ChevronRight size={14} /></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust & CTA */}
      <section className="pb-24 pt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-reroute-light p-12 rounded-3xl border border-reroute-teal/10 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-2/3">
              <h3 className="text-2xl font-black text-gray-900 mb-4">Why ReRoute is the best in {data.name}</h3>
              <p className="text-gray-500 mb-8">Industry leader since 2006. Complete satisfaction with 24x7 concierge support and transparent billing.</p>
              <div className="flex flex-wrap gap-4">
                 <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-100 text-[10px] font-black text-gray-600 uppercase">
                    <ShieldCheck size={14} className="text-reroute-teal" /> Verified Chauffeurs
                 </div>
                 <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-100 text-[10px] font-black text-gray-600 uppercase">
                    <Star size={14} className="text-reroute-teal" /> Top Rated
                 </div>
              </div>
            </div>
            <div className="md:w-1/3 text-center">
              <button onClick={() => onNavigate('home')} className="bg-reroute-teal text-white font-black py-4 px-12 rounded-2xl shadow-xl hover:bg-teal-700 transition-all transform hover:scale-105">
                Book in {data.name}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CityLanding;
