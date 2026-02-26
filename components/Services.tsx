
import React from 'react';
import { Car, Map, Plane, Clock, Building2, ChevronRight, Navigation, Building } from 'lucide-react';
import { ViewType } from '../App';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  icon: React.ReactNode;
  ghostIcon: React.ReactNode;
  title: string;
  desc: string;
  bgImage: string;
  onClick: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, ghostIcon, title, desc, bgImage, onClick }) => (
  <motion.button 
    whileHover={{ y: -8, scale: 1.02 }}
    onClick={onClick}
    className="relative h-[340px] w-full min-w-[280px] md:min-w-0 rounded-[2.5rem] overflow-hidden group text-left focus:outline-none transition-all shadow-lg snap-center"
  >
    {/* Background Image */}
    <div className="absolute inset-0">
      <img 
        src={bgImage} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 group-hover:via-black/50 transition-colors duration-500"></div>
    </div>

    {/* X-Style Ghost Motif - Repositioned for medium cards */}
    <div className="absolute top-1/2 -right-12 -translate-y-1/2 text-white opacity-[0.04] group-hover:opacity-[0.08] transition-all duration-700 transform group-hover:-translate-x-4 rotate-12">
      {/* Fix: Cast ghostIcon to React.ReactElement with any props to allow 'size' property assignment during cloneElement */}
      {React.cloneElement(ghostIcon as React.ReactElement<any>, { size: 280 })}
    </div>

    {/* Content */}
    <div className="relative h-full p-8 flex flex-col justify-between z-10">
      <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-white border border-white/20 group-hover:bg-reroute-teal group-hover:border-transparent transition-all duration-500">
        {/* Fix: Cast icon to React.ReactElement with any props to allow 'size' property assignment during cloneElement */}
        {React.cloneElement(icon as React.ReactElement<any>, { size: 28 })}
      </div>
      
      <div>
        <h3 className="text-2xl font-black text-white mb-3 tracking-tight">
          {title}
        </h3>
        
        <p className="text-gray-300 leading-relaxed text-sm mb-6 line-clamp-2 group-hover:line-clamp-none transition-all">
          {desc}
        </p>

        <div className="flex items-center gap-2 text-reroute-teal font-black text-xs tracking-widest uppercase">
          Explore <ChevronRight size={16} className="group-hover:translate-x-2 transition-transform" />
        </div>
      </div>
    </div>
  </motion.button>
);

interface ServicesProps {
  onNavigate: (view: ViewType) => void;
}

const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  const services = [
    {
      id: 'outstation',
      icon: <Car />,
      ghostIcon: <Map />,
      title: "Outstation Cabs",
      desc: "Intercity luxury with expert chauffeurs for round-trips or weekend getaways.",
      bgImage: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 'oneway',
      icon: <Navigation />,
      ghostIcon: <Map />,
      title: "One-Way Drops",
      desc: "Smart point-point travel. Pay only for the distance you go, zero return overheads.",
      bgImage: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 'local',
      icon: <Clock />,
      ghostIcon: <Building />,
      title: "Local Rentals",
      desc: "Your dedicated car and driver by the hour. Total city flexibility for meetings or leisure.",
      bgImage: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 'airport',
      icon: <Plane />,
      ghostIcon: <Plane />,
      title: "Airport Transfers",
      desc: "Punctual arrivals and stress-free terminal departures with live flight tracking.",
      bgImage: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 'corporate',
      icon: <Building2 />,
      ghostIcon: <Building2 />,
      title: "Corporate Hub",
      desc: "Executive mobility solutions with consolidated billing for high-growth enterprises.",
      bgImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-gray-50 to-white -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm text-reroute-teal font-black tracking-widest uppercase mb-4">Elite Offerings</h2>
            <p className="text-4xl md:text-6xl font-black text-gray-900 leading-tight">
              Curated Mobility Experiences
            </p>
            <div className="mt-8 flex justify-center">
              <div className="h-1.5 w-24 bg-reroute-teal rounded-full"></div>
            </div>
          </motion.div>
        </div>

        {/* Mobile: Horizontal Cards View | Desktop: 3-Col X-Grid */}
        <div className="relative">
          <div className="flex overflow-x-auto snap-x snap-mandatory pb-12 gap-6 scrollbar-hide md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible md:pb-0">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="w-[85%] flex-shrink-0 snap-center md:w-full"
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <ServiceCard
                    icon={service.icon}
                    ghostIcon={service.ghostIcon}
                    title={service.title}
                    desc={service.desc}
                    bgImage={service.bgImage}
                    onClick={() => onNavigate(service.id as ViewType)}
                  />
                </motion.div>
              </div>
            ))}
          </div>
          
          {/* Subtle Mobile Indicator */}
          <div className="flex md:hidden justify-center gap-1.5 mt-2">
            {services.map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-gray-200"></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
