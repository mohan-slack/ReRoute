
import React from 'react';
import { BadgePercent, MapPin, Car, ShieldCheck, Wallet, CheckCircle2, Home, ArrowRight, Info, Star, ChevronRight, TrendingDown, Users } from 'lucide-react';
import { ViewType } from '../App';

interface OneWayDetailsProps {
  onNavigate: (view: ViewType) => void;
}

const OneWayDetails: React.FC<OneWayDetailsProps> = ({ onNavigate }) => {
  const routes = [
    { from: "Bangalore", to: "Mysore", kms: "144 Km", sedan: "₹2495", suv: "₹3778", tt: "₹22/km" },
    { from: "Bangalore", to: "Coorg", kms: "252 Km", sedan: "₹4636", suv: "₹6465", tt: "₹22/km" },
    { from: "Bangalore", to: "Chennai", kms: "347 Km", sedan: "₹5943", suv: "₹8297", tt: "₹22/km" },
    { from: "Bangalore", to: "Goa", kms: "568 Km", sedan: "₹9940", suv: "₹17,030", tt: "₹22/km" },
    { from: "Bangalore", to: "Nandi Hills", kms: "57 Km", sedan: "₹1597", suv: "₹2171", tt: "₹22/km" },
  ];

  const oneWayTaxiServices = [
    { name: "One-Way Taxi in Bangalore", view: "bangalore" as ViewType },
    { name: "One-Way Taxi in Mumbai", view: "mumbai" as ViewType },
    { name: "One-Way Taxi in Delhi", view: "delhi" as ViewType },
    { name: "One-Way Taxi in Hyderabad", view: "hyderabad" as ViewType },
    { name: "One-Way Taxi in Goa", view: "goa" as ViewType },
    { name: "One-Way Taxi in Chennai", view: "chennai" as ViewType },
    { name: "One-Way Taxi in Ahmedabad", view: "ahmedabad" as ViewType },
    { name: "One-Way Taxi in Pune", view: "home" as ViewType }
  ];

  const oneWayTTServices = [
    { name: "Tempo Traveller in Bangalore", view: "bangalore" as ViewType },
    { name: "Tempo Traveller in Chennai", view: "chennai" as ViewType },
    { name: "Tempo Traveller in Delhi", view: "delhi" as ViewType },
    { name: "Tempo Traveller in Mumbai", view: "mumbai" as ViewType },
    { name: "Minibus for hire in Hyderabad", view: "hyderabad" as ViewType },
    { name: "Minibus for rent in Pune", view: "home" as ViewType }
  ];

  return (
    <div className="animate-in fade-in duration-500 bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=1600" 
            alt="One way open road travel" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
          <button 
            onClick={() => onNavigate('home')}
            className="mb-8 flex items-center gap-2 text-reroute-teal font-bold hover:text-white transition-colors group"
          >
            <Home size={18} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
          </button>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-reroute-teal/20 backdrop-blur-md rounded-full border border-reroute-teal/30 mb-6">
            <TrendingDown size={14} className="text-reroute-teal" />
            <span className="text-xs font-bold uppercase tracking-widest text-reroute-teal">Save up to 50%</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6">One-Way Drops</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl leading-relaxed">
            Smart point-to-point travel. Pay only for the distance you go, <span className="text-white font-black">zero return overheads.</span>
          </p>
        </div>
      </div>

      {/* Service Network Section */}
      <section className="py-24 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-black text-gray-900 mb-8 flex items-center gap-3">
                <Car className="text-reroute-teal" size={24} />
                One-Way Taxi Services
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {oneWayTaxiServices.map((service, idx) => (
                  <button
                    key={idx}
                    onClick={() => onNavigate(service.view)}
                    className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100 hover:border-reroute-teal hover:shadow-md transition-all group"
                  >
                    <span className="text-sm font-bold text-gray-700 group-hover:text-reroute-teal">{service.name}</span>
                    <ChevronRight size={14} className="text-gray-300 group-hover:text-reroute-teal group-hover:translate-x-1 transition-all" />
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-black text-gray-900 mb-8 flex items-center gap-3">
                <Users className="text-reroute-teal" size={24} />
                Tempo Traveller & Minibus
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {oneWayTTServices.map((service, idx) => (
                  <button
                    key={idx}
                    onClick={() => onNavigate(service.view)}
                    className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100 hover:border-reroute-teal hover:shadow-md transition-all group"
                  >
                    <span className="text-sm font-bold text-gray-700 group-hover:text-reroute-teal">{service.name}</span>
                    <ChevronRight size={14} className="text-gray-300 group-hover:text-reroute-teal group-hover:translate-x-1 transition-all" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Savings Block */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 bg-gray-900 text-white p-10 rounded-[3rem] shadow-xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-reroute-teal/10 rounded-full blur-3xl"></div>
               <BadgePercent className="text-reroute-teal mb-6" size={48} />
               <h3 className="text-3xl font-black mb-4">Pay Only for What You Use</h3>
               <p className="text-gray-400 mb-8 leading-relaxed">Eliminate return fare costs and save significantly on long-distance drops. What you see is what you pay.</p>
               <div className="flex items-center gap-2 text-reroute-teal font-black text-xs uppercase tracking-widest cursor-pointer hover:underline">
                 Learn more <ChevronRight size={16} />
               </div>
            </div>
            <div className="lg:col-span-2 bg-gray-50 p-10 rounded-[3rem] border border-gray-100">
               <h3 className="text-2xl font-black text-gray-900 mb-8">What makes ReRoute different?</h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 {[
                   { icon: <ShieldCheck />, title: "Inclusive Fares", desc: "GST, driver allowance, fuel, and tolls included." },
                   { icon: <Wallet />, title: "Transparent Billing", desc: "No hidden or additional costs added to the final bill." },
                   { icon: <Star />, title: "Verified Safety", desc: "Rigorous cleaning and background checks for every ride." },
                   { icon: <Info />, title: "24/7 Support", desc: "Dedicated concierge for terminal and station pickups." }
                 ].map((item, i) => (
                   <div key={i} className="flex gap-4">
                      <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-reroute-teal shadow-sm border border-gray-100 shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h5 className="font-bold text-gray-900">{item.title}</h5>
                        <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                      </div>
                   </div>
                 ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Routes Table */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-gray-900">Top One-way cab routes from Bangalore</h2>
            <p className="text-gray-500 mt-2">Transparent point-to-point pricing for popular destinations.</p>
          </div>
          
          <div className="bg-white rounded-[3rem] shadow-xl overflow-hidden border border-gray-100">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gray-900 text-white">
                    <th className="px-8 py-6 text-sm font-black uppercase tracking-widest">Route</th>
                    <th className="px-8 py-6 text-sm font-black uppercase tracking-widest">Distance</th>
                    <th className="px-8 py-6 text-sm font-black uppercase tracking-widest">Sedan Rate</th>
                    <th className="px-8 py-6 text-sm font-black uppercase tracking-widest">SUV Rate</th>
                    <th className="px-8 py-6 text-sm font-black uppercase tracking-widest">Tempo Traveller</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {routes.map((r, i) => (
                    <tr key={i} className="hover:bg-reroute-light transition-colors group">
                      <td className="px-8 py-6 font-bold text-gray-900">
                        <div className="flex items-center gap-2">
                           <MapPin size={14} className="text-reroute-teal" />
                           {r.from} to {r.to}
                        </div>
                      </td>
                      <td className="px-8 py-6 text-gray-500 font-medium">{r.kms}</td>
                      <td className="px-8 py-6 font-black text-gray-900">{r.sedan}</td>
                      <td className="px-8 py-6 font-black text-gray-900">{r.suv}</td>
                      <td className="px-8 py-6 text-reroute-teal font-black">{r.tt}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Guide Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-black text-gray-900 mb-8 leading-tight">Best options for <br /> taxi services in Bangalore</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Select from a diverse range of cars when booking with ReRoute. We offer budget hatchbacks, comfortable sedans, and luxury tempo travellers.
              </p>
              <div className="space-y-4">
                {[
                  { type: "AC Sedans", models: "Etios, Amaze, Dzire", pax: "4 Pax", ideal: "Small families" },
                  { type: "AC SUVs", models: "Innova, Ertiga, Xylo", pax: "6-7 Pax", ideal: "Large families" },
                  { type: "Premium SUVs", models: "Innova Crysta", pax: "6-7 Pax", ideal: "Executive group travel" },
                  { type: "AC Minivans", models: "Tempo Travellers", pax: "12-16 Pax", ideal: "Groups of friends" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-reroute-teal transition-all">
                    <div>
                      <h5 className="font-black text-gray-900">{item.type}</h5>
                      <p className="text-xs text-gray-400 font-bold uppercase tracking-tight">{item.models}</p>
                    </div>
                    <div className="text-right">
                       <p className="text-sm font-black text-reroute-teal">{item.pax}</p>
                       <p className="text-[10px] text-gray-400 font-bold uppercase">{item.ideal}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
               <img src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=400" className="rounded-[2.5rem] h-64 w-full object-cover shadow-2xl" alt="Sedan" />
               <img src="https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=400" className="rounded-[2.5rem] h-64 w-full object-cover shadow-2xl mt-12" alt="SUV" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 rounded-[3rem] p-16 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-reroute-teal/5"></div>
            <h3 className="text-4xl font-black mb-8 relative z-10">Save Big on One-Way Drops</h3>
            <button 
              onClick={() => onNavigate('home')}
              className="bg-reroute-teal text-white font-black py-5 px-14 rounded-2xl shadow-xl transition-all transform hover:scale-105 active:scale-95 relative z-10"
            >
              Check Fares for My Route
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OneWayDetails;
