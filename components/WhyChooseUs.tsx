
import React from 'react';
import { motion } from 'framer-motion';
// Added Map icon to lucide-react imports to fix conflict with global Map constructor
import { ShieldCheck, Clock, MapPin, BadgeCheck, PhoneCall, Wallet, Smartphone, Sparkles, CheckCircle2, Star, TrendingUp, Users, Map } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-32 bg-gray-50/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-reroute-teal/10 rounded-full border border-reroute-teal/20 mb-6"
          >
            <Sparkles size={14} className="text-reroute-teal" />
            <span className="text-[10px] font-black uppercase tracking-widest text-reroute-teal">The ReRoute Standard</span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
            Designed for <span className="text-reroute-teal">Excellence.</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-medium">
            We've built a mobility ecosystem where every detail is engineered for your comfort, safety, and peace of mind.
          </p>
        </div>

        {/* Widgets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Widget: Main Driver Profile (Large 8-col) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-8 bg-white rounded-[3rem] p-10 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-10 items-center group hover:shadow-xl transition-all duration-500"
          >
            <div className="w-full md:w-2/5 h-64 rounded-[2.5rem] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=600" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                alt="Verified Driver"
              />
            </div>
            <div className="flex-1">
              <div className="w-12 h-12 bg-reroute-teal text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-reroute-teal/20">
                <BadgeCheck size={24} />
              </div>
              <h3 className="text-3xl font-black text-gray-900 mb-4">Verified Professional Chauffeurs</h3>
              <p className="text-gray-500 font-medium leading-relaxed mb-6">
                Not just drivers, but expert road companions. Every chauffeur undergoes rigorous 50-point background checks and hospitality training.
              </p>
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1,2,3].map(i => (
                    <img key={i} src={`https://i.pravatar.cc/100?img=${i+20}`} className="w-8 h-8 rounded-full border-2 border-white shadow-sm" alt="Rating" />
                  ))}
                </div>
                <span className="text-xs font-black text-gray-900 uppercase tracking-widest">Top Rated in 2024</span>
              </div>
            </div>
          </motion.div>

          {/* Widget: Support (Standard 4-col) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-4 bg-white rounded-[3rem] p-10 shadow-sm border border-gray-100 flex flex-col justify-between group hover:shadow-xl transition-all duration-500"
          >
            <div>
              <div className="w-12 h-12 bg-gray-900 text-white rounded-2xl flex items-center justify-center mb-8 group-hover:bg-reroute-teal transition-colors">
                <PhoneCall size={24} />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-4">Elite 24/7 Concierge</h3>
              <p className="text-gray-500 text-sm font-medium leading-relaxed">
                Real human support, anytime. From route changes to emergency assistance, our team is one tap away.
              </p>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-50 flex items-center justify-between">
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Response Time</span>
              <span className="text-reroute-teal font-black text-sm">&lt; 60 Seconds</span>
            </div>
          </motion.div>

          {/* Widget: Pricing (Standard 4-col) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-4 bg-gray-900 rounded-[3rem] p-10 shadow-xl border border-white/5 flex flex-col justify-between group"
          >
            <div>
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-8 text-reroute-teal">
                <Wallet size={24} />
              </div>
              <h3 className="text-2xl font-black text-white mb-4 leading-tight">Zero-Surge <br/>Guaranteed</h3>
              <p className="text-gray-400 text-sm font-medium leading-relaxed">
                Transparency is our core. Fixed fares that include fuel, driver allowances, and tolls.
              </p>
            </div>
            <div className="mt-10 bg-white/5 rounded-2xl p-4 flex items-center gap-3">
              <TrendingUp size={16} className="text-reroute-teal" />
              <span className="text-[10px] font-black text-white uppercase tracking-widest">No Hidden Charges</span>
            </div>
          </motion.div>

          {/* Widget: Coverage & Scale (Wide 8-col) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-8 bg-white rounded-[3rem] p-10 shadow-sm border border-gray-100 flex flex-col justify-between group hover:shadow-xl transition-all duration-500 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-1/3 h-full opacity-[0.03] pointer-events-none">
              <Map size={300} className="text-gray-900 -translate-y-1/4 translate-x-1/4" />
            </div>
            
            <div className="relative z-10 flex flex-col md:flex-row gap-12 items-end justify-between">
              <div className="max-w-md">
                <div className="w-12 h-12 bg-reroute-light text-reroute-teal rounded-2xl flex items-center justify-center mb-8">
                  <MapPin size={24} />
                </div>
                <h3 className="text-3xl font-black text-gray-900 mb-4">Unrivaled Pan-India Network</h3>
                <p className="text-gray-500 font-medium leading-relaxed">
                  Connecting more than 2,000 cities with a massive fleet that's always ready to ReRoute your journey.
                </p>
              </div>
              
              <div className="flex gap-4 w-full md:w-auto">
                <div className="flex-1 md:w-32 bg-gray-50 p-6 rounded-[2rem] text-center border border-gray-100">
                  <div className="text-2xl font-black text-gray-900">2K+</div>
                  <div className="text-[9px] font-black text-gray-400 uppercase tracking-widest mt-1">Cities</div>
                </div>
                <div className="flex-1 md:w-32 bg-gray-50 p-6 rounded-[2rem] text-center border border-gray-100">
                  <div className="text-2xl font-black text-gray-900">5L+</div>
                  <div className="text-[9px] font-black text-gray-400 uppercase tracking-widest mt-1">Routes</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Widget: Experience (Standard 6-col) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-6 bg-reroute-light rounded-[3rem] p-10 border border-reroute-teal/10 flex flex-col md:flex-row gap-8 items-center group hover:bg-white hover:shadow-xl transition-all duration-500"
          >
             <div className="w-20 h-20 bg-white rounded-[1.5rem] shadow-sm flex items-center justify-center text-reroute-teal shrink-0 transform group-hover:rotate-12 transition-transform">
                <Smartphone size={32} />
             </div>
             <div>
                <h3 className="text-2xl font-black text-gray-900 mb-2">Effortless Digital Booking</h3>
                <p className="text-gray-500 text-sm font-medium">Book, track, and pay in under 60 seconds with our intuitive interface.</p>
             </div>
          </motion.div>

          {/* Widget: Quality (Standard 6-col) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-6 bg-white rounded-[3rem] p-10 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8 items-center group hover:shadow-xl transition-all duration-500"
          >
             <div className="w-20 h-20 bg-reroute-teal/10 rounded-[1.5rem] flex items-center justify-center text-reroute-teal shrink-0 transform group-hover:scale-110 transition-transform">
                <Sparkles size={32} />
             </div>
             <div>
                <h3 className="text-2xl font-black text-gray-900 mb-2">Pristine Fleet Hygiene</h3>
                <p className="text-gray-500 text-sm font-medium">Every vehicle is deep-cleaned and quality-audited before every single trip starts.</p>
             </div>
          </motion.div>
        </div>

        {/* Footer Rating Widget */}
        <div className="mt-20 flex flex-col md:flex-row items-center justify-center gap-12">
           <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1,2,3,4,5].map(i => (
                  <img key={i} src={`https://i.pravatar.cc/100?img=${i+30}`} className="w-10 h-10 rounded-full border-2 border-white object-cover" alt="User" />
                ))}
              </div>
              <p className="text-gray-400 font-bold text-sm tracking-tight">Trusted by 1M+ active travelers</p>
           </div>
           
           <div className="flex items-center gap-6 py-4 px-10 bg-white rounded-3xl border border-gray-100 shadow-sm">
             <div className="text-3xl font-black text-gray-900 flex items-center gap-2">
               4.8 <Star size={24} className="fill-yellow-400 text-yellow-400" />
             </div>
             <div className="w-px h-8 bg-gray-100"></div>
             <div className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] leading-tight">Average <br/>User Rating</div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
