
import React, { useEffect, useRef } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import BookingWidget from './BookingWidget';
import { BookingDetails } from '../types';
import { Navigation } from 'lucide-react';

interface RollingNumberProps {
  value: number;
  suffix: string;
  delay?: number;
}

const RollingNumber = ({ value, suffix, delay = 0 }: RollingNumberProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const springValue = useSpring(0, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001
  });

  const displayValue = useTransform(springValue, (current) => 
    Math.floor(current).toLocaleString()
  );

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        springValue.set(value);
      }, delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [isInView, value, springValue, delay]);

  return (
    <span ref={ref} className="flex items-baseline">
      <motion.span>{displayValue}</motion.span>
      <span>{suffix}</span>
    </span>
  );
};

interface HeroProps {
  bookingDetails: BookingDetails;
  onUpdate: (details: Partial<BookingDetails>) => void;
  onExplore: () => void;
}

const Hero: React.FC<HeroProps> = ({ bookingDetails, onUpdate, onExplore }) => {
  return (
    <div className="relative overflow-hidden min-h-[95vh] flex items-center pt-20 pb-24 lg:pt-28 lg:pb-40">
      {/* Premium Background Image with Dynamic Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=2000" 
          alt="Premium car on highway" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/10"></div>
      </div>

      <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-[0.03] text-white pointer-events-none select-none z-0">
        <Navigation size={1200} className="rotate-45" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-left max-w-4xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-reroute-teal/20 backdrop-blur-md rounded-full border border-reroute-teal/30 mb-8 animate-in fade-in slide-in-from-left-4 duration-700">
            <span className="w-2 h-2 rounded-full bg-reroute-teal animate-pulse"></span>
            <span className="text-xs font-black uppercase tracking-[0.2em] text-reroute-teal">India's #1 Premium Chauffeur Service</span>
          </div>
          
          <h1 className="text-5xl tracking-tight font-black text-white sm:text-7xl md:text-8xl leading-[1.1] drop-shadow-2xl animate-in fade-in slide-in-from-bottom-6 duration-1000">
            <span className="block">Premium travel</span>{' '}
            <span className="block">
              starts with <span className="text-reroute-gray">Re</span><span className="text-reroute-teal">Route.</span>
            </span>
          </h1>
          
          <p className="mt-8 text-xl text-gray-200 sm:text-2xl max-w-2xl leading-relaxed drop-shadow-md animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            Reliable outstation cabs, punctual airport transfers, and flexible hourly rentals. 
            Elite fleet and expert chauffeurs at your service.
          </p>
        </div>
        
        <div className="relative w-full max-w-6xl transform animate-in fade-in zoom-in-95 duration-1000 delay-300">
          <BookingWidget 
            bookingDetails={bookingDetails} 
            onUpdate={onUpdate} 
            onExplore={onExplore}
          />
        </div>

        <div className="mt-20 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 w-full animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-500">
           <div className="w-full md:w-[30%] flex justify-start">
             <div className="flex items-center gap-4 bg-white/10 backdrop-blur-2xl px-8 py-5 rounded-[2.5rem] border border-white/20 shadow-2xl transition-all hover:bg-white/15 hover:scale-105 group w-full sm:w-auto">
                <div className="flex flex-col">
                  <span className="text-3xl md:text-4xl lg:text-5xl font-black text-white group-hover:text-reroute-teal transition-colors">
                    <RollingNumber value={1} suffix="M+" delay={0} />
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-reroute-teal">Happy Users</span>
                </div>
             </div>
           </div>
           
           <div className="w-full md:w-[30%] flex justify-center">
             <div className="flex items-center gap-4 bg-white/10 backdrop-blur-2xl px-8 py-5 rounded-[2.5rem] border border-white/20 shadow-2xl transition-all hover:bg-white/15 hover:scale-105 group w-full sm:w-auto">
                <div className="flex flex-col text-center">
                  <span className="text-3xl md:text-4xl lg:text-5xl font-black text-white group-hover:text-reroute-teal transition-colors">
                    <RollingNumber value={2000} suffix="+" delay={0.3} />
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-reroute-teal">Cities Covered</span>
                </div>
             </div>
           </div>
           
           <div className="w-full md:w-[30%] flex justify-end">
             <div className="flex items-center gap-4 bg-white/10 backdrop-blur-2xl px-8 py-5 rounded-[2.5rem] border border-white/20 shadow-2xl transition-all hover:bg-white/15 hover:scale-105 group w-full sm:w-auto">
                <div className="flex flex-col text-right">
                  <span className="text-3xl md:text-4xl lg:text-5xl font-black text-white group-hover:text-reroute-teal transition-colors">
                    <RollingNumber value={5} suffix="L+" delay={0.6} />
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-reroute-teal">Routes Active</span>
                </div>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
