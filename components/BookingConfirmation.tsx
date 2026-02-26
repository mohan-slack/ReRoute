
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Home, ListOrdered, Calendar, ShieldCheck, Share2, Sparkles } from 'lucide-react';
import { ViewType } from '../App';

interface BookingConfirmationProps {
  onNavigate: (view: ViewType) => void;
}

const BookingConfirmation: React.FC<BookingConfirmationProps> = ({ onNavigate }) => {
  const bookingId = `RR-${Math.floor(10000 + Math.random() * 90000)}`;

  return (
    <section className="bg-white min-h-screen py-24 flex items-center overflow-hidden relative">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03] pointer-events-none">
        <Sparkles size={800} className="text-reroute-teal" />
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', damping: 12, stiffness: 200 }}
            className="w-24 h-24 bg-reroute-teal text-white rounded-[2rem] flex items-center justify-center mx-auto mb-10 shadow-2xl shadow-reroute-teal/30"
          >
            <CheckCircle2 size={48} />
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
              Ride <span className="text-reroute-teal">Scheduled.</span>
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-12 font-medium">
              Your premium chauffeur has been reserved. You'll receive vehicle and driver details 2-4 hours before your journey.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-gray-50 rounded-[3rem] p-10 border border-gray-100 max-w-lg mx-auto mb-16 shadow-inner"
          >
            <div className="flex flex-col items-center gap-6">
              <div>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-1">Booking Confirmation ID</p>
                <p className="text-3xl font-black text-gray-900">{bookingId}</p>
              </div>
              
              <div className="flex gap-4 w-full pt-6 border-t border-gray-200">
                <div className="flex-1 text-center">
                   <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1">Status</p>
                   <div className="flex items-center justify-center gap-1.5 text-reroute-teal font-black text-xs uppercase">
                      <div className="w-1.5 h-1.5 rounded-full bg-reroute-teal animate-pulse"></div>
                      Confirmed
                   </div>
                </div>
                <div className="w-px h-10 bg-gray-200"></div>
                <div className="flex-1 text-center">
                   <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1">Trip Class</p>
                   <p className="text-xs font-black text-gray-900 uppercase">Premium Select</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button 
              onClick={() => onNavigate('bookings')}
              className="w-full sm:w-auto bg-gray-900 text-white font-black py-5 px-12 rounded-2xl shadow-xl hover:bg-black transition-all flex items-center justify-center gap-3 active:scale-95"
            >
              <ListOrdered size={20} /> View My Bookings
            </button>
            <button 
              onClick={() => onNavigate('home')}
              className="w-full sm:w-auto bg-white border-2 border-gray-100 text-gray-900 font-black py-5 px-12 rounded-2xl shadow-sm hover:border-reroute-teal hover:text-reroute-teal transition-all flex items-center justify-center gap-3 active:scale-95"
            >
              <Home size={20} /> Return Home
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-20 pt-10 border-t border-gray-50 flex flex-wrap justify-center gap-10 opacity-60"
          >
            <div className="flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-widest">
               <ShieldCheck size={14} className="text-reroute-teal" /> 24/7 Concierge Support
            </div>
            <div className="flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-widest">
               <Calendar size={14} className="text-reroute-teal" /> Easy Rescheduling
            </div>
            <div className="flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-widest">
               <Share2 size={14} className="text-reroute-teal" /> Share Trip Info
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookingConfirmation;
