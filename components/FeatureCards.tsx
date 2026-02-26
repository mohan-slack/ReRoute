
import React from 'react';
import { motion } from 'framer-motion';
import { Check, Clock, ShieldCheck } from 'lucide-react';

const FeatureCards: React.FC = () => {
  const cards = [
    {
      title: "Book Now",
      subtitle: "at zero cost",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800",
      icon: (
        <div className="relative w-16 h-16 bg-reroute-teal rounded-full flex items-center justify-center text-white border-4 border-white/30 shadow-lg">
          <span className="text-2xl font-black">0</span>
          <div className="absolute -right-1 -top-1 bg-green-500 rounded-full p-1 border-2 border-white">
            <Check size={12} className="text-white" />
          </div>
        </div>
      ),
      gradient: "from-black/10 via-black/20 to-black/60"
    },
    {
      title: "Book up to 1 hour",
      subtitle: "before your trip starts",
      image: "https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&q=80&w=800",
      icon: (
        <div className="relative w-16 h-16 bg-reroute-teal rounded-full flex items-center justify-center text-white border-4 border-white/30 shadow-lg">
          <div className="flex flex-col items-center">
            <Clock size={20} className="mb-0.5" />
            <span className="text-[10px] font-black uppercase tracking-tighter">1 HR</span>
          </div>
        </div>
      ),
      gradient: "from-black/40 via-black/60 to-black/80"
    },
    {
      title: "Free Cancellations",
      subtitle: "up to 1 hour before your trip",
      image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800",
      icon: (
        <div className="relative w-16 h-16 bg-reroute-teal rounded-full flex items-center justify-center text-white border-4 border-white/30 shadow-lg">
           <ShieldCheck size={28} />
           <span className="absolute text-[10px] font-black top-1/2 left-1/2 -translate-x-1/2 -translate-y-[2px]">₹</span>
        </div>
      ),
      gradient: "from-black/10 via-black/30 to-black/70"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative h-64 md:h-80 rounded-[2.5rem] overflow-hidden group shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-b ${card.gradient}`}></div>
              </div>

              {/* Content */}
              <div className="relative h-full p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl font-black text-white leading-tight drop-shadow-md">
                    {card.title}
                  </h3>
                  <p className="text-xl font-bold text-gray-200 mt-1 drop-shadow-md">
                    {card.subtitle}
                  </p>
                </div>

                <div className="flex items-center gap-4">
                   <div className="transform group-hover:scale-110 transition-transform duration-500">
                     {card.icon}
                   </div>
                   <div className="flex-1 h-0.5 bg-white/20 rounded-full relative overflow-hidden">
                     <div className="absolute inset-0 bg-reroute-teal/60 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700"></div>
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
