import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, CreditCard, Users, Briefcase, BarChart3, ShieldCheck, 
  Home, CheckCircle2, ChevronRight, Plane, ArrowRight, UserCheck, 
  Smartphone, Sparkles, Trophy, Settings, Headphones, Globe
} from 'lucide-react';
import { ViewType } from '../App';

interface CorporateDetailsProps {
  onNavigate: (view: ViewType) => void;
}

const CorporateDetails: React.FC<CorporateDetailsProps> = ({ onNavigate }) => {
  return (
    <div className="animate-in fade-in duration-500 bg-white">
      {/* 1. Hero Section: Refined for clarity */}
      <div className="relative h-[75vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600" 
            alt="Corporate skyscraper" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <button 
              onClick={() => onNavigate('home')}
              className="mb-8 flex items-center gap-2 text-reroute-teal font-black text-xs uppercase tracking-widest hover:text-white transition-colors group"
            >
              <Home size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
            </button>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-reroute-teal/20 backdrop-blur-md rounded-full border border-reroute-teal/30 mb-8">
              <Building2 size={14} className="text-reroute-teal" />
              <span className="text-[10px] font-black uppercase tracking-widest">Enterprise Mobility Tier-1</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[0.95] tracking-tighter">
              The Gold Standard <br />
              <span className="text-reroute-teal">for Business.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl leading-relaxed font-medium mb-10">
              India's most trusted executive fleet ecosystem. Seamlessly move your talent, clients, and assets with 100% accountability.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-reroute-teal hover:bg-teal-700 text-white font-black py-5 px-14 rounded-2xl shadow-2xl transition-all transform hover:scale-105 active:scale-95 flex items-center gap-3">
                Partner with ReRoute <ArrowRight size={20} />
              </button>
              <button className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-black py-5 px-10 rounded-2xl border border-white/20 transition-all">
                Download Brochure
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 2. Executive "At-a-Glance" Dashboard Widget */}
      <section className="py-24 -mt-20 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-[2.5rem] p-10 shadow-2xl border border-gray-100 flex flex-col items-center text-center group hover:border-reroute-teal transition-all">
               <div className="w-16 h-16 bg-reroute-light rounded-2xl flex items-center justify-center text-reroute-teal mb-6 group-hover:scale-110 transition-transform">
                  <Globe size={32} />
               </div>
               <h3 className="text-xl font-black text-gray-900 mb-2">Pan-India Presence</h3>
               <p className="text-gray-500 text-sm leading-relaxed">Active in 2000+ cities with unified billing across all zones.</p>
            </div>
            <div className="bg-white rounded-[2.5rem] p-10 shadow-2xl border border-gray-100 flex flex-col items-center text-center group hover:border-reroute-teal transition-all">
               <div className="w-16 h-16 bg-reroute-light rounded-2xl flex items-center justify-center text-reroute-teal mb-6 group-hover:scale-110 transition-transform">
                  <ShieldCheck size={32} />
               </div>
               <h3 className="text-xl font-black text-gray-900 mb-2">Zero-Wait Guarantee</h3>
               <p className="text-gray-500 text-sm leading-relaxed">Dedicated executive dispatch ensures your vehicle is 10 mins early.</p>
            </div>
            <div className="bg-white rounded-[2.5rem] p-10 shadow-2xl border border-gray-100 flex flex-col items-center text-center group hover:border-reroute-teal transition-all">
               <div className="w-16 h-16 bg-reroute-light rounded-2xl flex items-center justify-center text-reroute-teal mb-6 group-hover:scale-110 transition-transform">
                  <BarChart3 size={32} />
               </div>
               <h3 className="text-xl font-black text-gray-900 mb-2">Smart Dashboard</h3>
               <p className="text-gray-500 text-sm leading-relaxed">Real-time usage reports, carbon footprint tracking, and itemized billing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Features Bento Grid: Replaces text blocks */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
             <div className="max-w-2xl">
               <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-reroute-teal mb-4">The Advantage</h2>
               <p className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">Built for <span className="text-reroute-teal">Reliability & Scale.</span></p>
             </div>
             <p className="text-gray-500 font-bold max-w-sm">Every enterprise feature is designed to reduce logistical friction and enhance team efficiency.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Large Feature Card */}
            <div className="md:col-span-2 md:row-span-2 bg-gray-900 rounded-[3rem] p-12 text-white relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-12 opacity-5 text-reroute-teal">
                  <CreditCard size={280} />
               </div>
               <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-reroute-teal mb-8">
                      <CreditCard size={28} />
                    </div>
                    <h3 className="text-3xl font-black mb-6">Centralized Corporate Billing</h3>
                    <p className="text-gray-400 leading-relaxed text-lg">Simplify accounts with monthly consolidated invoices. Zero individual employee reimbursement paperwork, 100% automated GST compliance.</p>
                  </div>
                  <div className="mt-12 flex gap-4">
                    <span className="px-4 py-2 bg-white/5 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10">30-Day Credit</span>
                    <span className="px-4 py-2 bg-white/5 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10">Automated Invoicing</span>
                  </div>
               </div>
            </div>

            {/* Medium Feature Card */}
            <div className="md:col-span-2 bg-white rounded-[3rem] p-10 border border-gray-100 flex flex-col justify-between group hover:shadow-xl transition-all">
               <div className="flex justify-between items-start mb-8">
                  <div className="w-14 h-14 bg-reroute-light rounded-2xl flex items-center justify-center text-reroute-teal">
                    <UserCheck size={28} />
                  </div>
                  <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Priority Support</div>
               </div>
               <div>
                  <h3 className="text-2xl font-black text-gray-900 mb-4">Dedicated Account Concierge</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">A specialized manager for your firm to handle complex itineraries, group bookings, and priority terminal pickups.</p>
               </div>
            </div>

            {/* Small Feature Card */}
            <div className="bg-white rounded-[3rem] p-10 border border-gray-100 flex flex-col justify-between group hover:shadow-xl transition-all">
               <div className="w-14 h-14 bg-reroute-light rounded-2xl flex items-center justify-center text-reroute-teal mb-8">
                  <ShieldCheck size={28} />
               </div>
               <div>
                  <h3 className="text-xl font-black text-gray-900 mb-2">Rigid Compliance</h3>
                  <p className="text-gray-400 text-xs font-bold leading-relaxed">50-point background checks for all executive chauffeurs.</p>
               </div>
            </div>

            {/* Small Feature Card */}
            <div className="bg-white rounded-[3rem] p-10 border border-gray-100 flex flex-col justify-between group hover:shadow-xl transition-all">
               <div className="w-14 h-14 bg-reroute-light rounded-2xl flex items-center justify-center text-reroute-teal mb-8">
                  <Smartphone size={28} />
               </div>
               <div>
                  <h3 className="text-xl font-black text-gray-900 mb-2">Fleet Diversity</h3>
                  <p className="text-gray-400 text-xs font-bold leading-relaxed">From executive Sedans to Tempo Travellers for site visits.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Onboarding Process Flow: Replaced text list with visual roadmap */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
           <img 
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1600" 
            className="w-full h-full object-cover opacity-[0.03]"
            alt="Office handshake background"
           />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-sm font-black text-reroute-teal uppercase tracking-[0.3em] mb-4">Seamless Launch</h2>
            <p className="text-4xl md:text-5xl font-black text-gray-900">Get Mobile in <span className="text-reroute-teal">5 Easy Steps.</span></p>
          </div>

          <div className="relative">
            {/* Decorative Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 -z-10"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {[
                { s: "01", i: <Building2 />, t: "Organization KYC", d: "Brief registration of your corporate legal entity." },
                { s: "02", i: <Settings />, t: "Policy Setup", d: "Define ride limits, zones, and approval workflows." },
                { s: "03", i: <Users />, t: "User Onboarding", d: "Import your employee roster via bulk CSV or API." },
                { s: "04", i: <Smartphone />, t: "Instant Booking", d: "Employees book via app; company pays centrally." },
                { s: "05", i: <BarChart3 />, t: "Analytics Insight", d: "Download unified audit-ready expense reports." }
              ].map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm flex flex-col items-center text-center group hover:border-reroute-teal transition-all hover:shadow-xl"
                >
                  <div className="w-16 h-16 rounded-full bg-gray-50 text-gray-400 flex items-center justify-center mb-6 group-hover:bg-reroute-teal group-hover:text-white transition-colors border-2 border-transparent group-hover:border-reroute-teal/10 shadow-inner">
                    {/* Fix: Cast i to React.ReactElement with any props to allow 'size' property assignment during cloneElement */}
                    {React.cloneElement(step.i as React.ReactElement<any>, { size: 24 })}
                  </div>
                  <div className="text-[10px] font-black text-reroute-teal uppercase tracking-widest mb-3">Step {step.s}</div>
                  <h4 className="text-lg font-black text-gray-900 mb-3">{step.t}</h4>
                  <p className="text-gray-500 text-xs font-bold leading-relaxed">{step.d}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Mobility Scenarios Bento Grid: Contextualized use cases */}
      <section className="py-24 bg-gray-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Built for Every <span className="text-reroute-teal">Scenerio.</span></h2>
            <p className="text-gray-400 max-w-xl font-medium">From daily office commutes to luxury airport hospitality, our infrastructure scales with your needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=600",
                title: "VIP Airport Hospitality",
                desc: "Placard greetings and real-time flight tracking for your high-value guests.",
                icon: <Plane size={20}/>
              },
              { 
                img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600",
                title: "Multi-Hub Site Visits",
                desc: "Full-day rentals for project audits and multi-location client meetings.",
                icon: <Building2 size={20}/>
              },
              { 
                img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=600",
                title: "Executive Outstation",
                desc: "Intercity luxury for regional meetings without the hassle of flights.",
                icon: <Briefcase size={20}/>
              }
            ].map((card, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white/5 rounded-[3rem] overflow-hidden border border-white/10 group"
              >
                <div className="h-64 relative">
                   <img src={card.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={card.title} />
                   <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                   <div className="absolute bottom-6 left-8">
                      <div className="w-10 h-10 bg-reroute-teal rounded-xl flex items-center justify-center text-white shadow-lg">
                        {card.icon}
                      </div>
                   </div>
                </div>
                <div className="p-10">
                   <h3 className="text-2xl font-black mb-3">{card.title}</h3>
                   <p className="text-gray-400 text-sm leading-relaxed">{card.desc}</p>
                   <button className="mt-8 text-reroute-teal font-black text-xs uppercase tracking-widest flex items-center gap-2 group/btn">
                      Request Solution <ChevronRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                   </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Performance & Trust Metrics Widget */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-[3rem] p-12 md:p-20 border border-gray-200 shadow-inner flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2">
               <h2 className="text-3xl font-black text-gray-900 mb-6">Proven Enterprise Reliability.</h2>
               <p className="text-gray-500 font-medium mb-10 leading-relaxed">We maintain the strictest SLAs in the Indian mobility market. Our uptime and driver verification metrics are audited monthly.</p>
               <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="text-4xl font-black text-gray-900 mb-1">99.8%</div>
                    <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">On-Time Pickup</div>
                  </div>
                  <div>
                    <div className="text-4xl font-black text-gray-900 mb-1">&lt; 3 Years</div>
                    <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Average Fleet Age</div>
                  </div>
               </div>
            </div>
            <div className="md:w-1/2 w-full">
              <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-100">
                 <div className="flex items-center gap-4 mb-8 pb-6 border-b border-gray-50">
                    <div className="w-12 h-12 bg-reroute-light rounded-2xl flex items-center justify-center text-reroute-teal">
                      <Headphones size={24} />
                    </div>
                    <div>
                      <h4 className="font-black text-gray-900">24/7 Corporate Command</h4>
                      <p className="text-xs text-gray-400 font-bold uppercase tracking-tight">Real-time Intervention Center</p>
                    </div>
                 </div>
                 <div className="space-y-6">
                    <div className="flex items-center justify-between">
                       <span className="text-sm font-bold text-gray-600">Avg. Support Response</span>
                       <span className="text-sm font-black text-reroute-teal">45 Seconds</span>
                    </div>
                    <div className="flex items-center justify-between">
                       <span className="text-sm font-black text-reroute-teal">Booking Fulfilment Rate</span>
                       <span className="text-sm font-black text-reroute-teal">100% Guaranteed</span>
                    </div>
                    <div className="flex items-center justify-between">
                       <span className="text-sm font-bold text-gray-600">Compliance Audit Score</span>
                       <span className="text-sm font-black text-reroute-teal">4.9 / 5.0</span>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Call to Action: Strong Finish */}
      <section className="pb-32 pt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-reroute-teal rounded-[4rem] p-12 md:p-24 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/10 rounded-full blur-[120px] translate-x-1/4 translate-y-1/4"></div>
            
            <div className="relative z-10">
              <h3 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Ready to Modernize Your <br /> Corporate Logistics?</h3>
              <p className="text-white/80 max-w-2xl mx-auto mb-16 text-xl font-medium">
                Join the network of elite organizations already benefiting from ReRoute's premium infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <button className="bg-gray-900 hover:bg-black text-white font-black py-6 px-16 rounded-[2rem] shadow-2xl transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-3">
                  Schedule a Consultation <Trophy size={20} className="text-reroute-teal" />
                </button>
                <button className="bg-white text-reroute-teal font-black py-6 px-16 rounded-[2rem] shadow-2xl hover:bg-gray-50 transition-all transform hover:scale-105 active:scale-95">
                  Talk to Sales
                </button>
              </div>
              <p className="mt-12 text-white/40 text-xs font-black uppercase tracking-[0.3em]">Direct Concierge: +91 9353830316 • Available 24/7</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CorporateDetails;