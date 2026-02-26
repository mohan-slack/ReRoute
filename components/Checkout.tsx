
import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { VEHICLES } from '../constants';
import { BookingDetails, User, TripType } from '../types';
import { ChevronLeft, ShieldCheck, MapPin, Calendar, Clock, CreditCard, Wallet, Landmark, ArrowRight, Info, CheckCircle2, Navigation } from 'lucide-react';

interface CheckoutProps {
  booking: BookingDetails;
  cabId: string;
  user: User;
  onBack: () => void;
  onConfirm: () => void;
}

const Checkout: React.FC<CheckoutProps> = ({ booking, cabId, user, onBack, onConfirm }) => {
  const [paymentMethod, setPaymentMethod] = useState<'CARD' | 'UPI' | 'PAY_LATER'>('UPI');
  const [isProcessing, setIsProcessing] = useState(false);

  const vehicle = useMemo(() => VEHICLES.find(v => v.id === cabId)!, [cabId]);

  const baseFare = useMemo(() => {
    switch (booking.tripType) {
      case TripType.LOCAL:
        return vehicle.basePrice; // Standard full day rental
      case TripType.AIRPORT:
        return Math.round(vehicle.basePrice * 0.65); // Specific airport transfer rate
      case TripType.OUTSTATION_ONEWAY:
        return vehicle.basePrice + 1200; // Base + estimated distance premium
      case TripType.OUTSTATION_ROUND:
        return (vehicle.basePrice * 2) + 500; // Multi-day round trip estimate
      default:
        return vehicle.basePrice;
    }
  }, [vehicle, booking]);

  const gst = baseFare * 0.05;
  const total = baseFare + gst;

  const handleFinalConfirm = () => {
    setIsProcessing(true);
    // Simulate payment gateway
    setTimeout(() => {
      setIsProcessing(false);
      onConfirm();
    }, 2000);
  };

  return (
    <section className="bg-gray-50 min-h-screen py-16 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={onBack}
          className="mb-8 flex items-center gap-2 text-gray-500 font-bold hover:text-reroute-teal transition-colors group"
        >
          <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> 
          Back to Results
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Form Area */}
          <div className="lg:col-span-8 space-y-8">
            {/* Trip Summary Card */}
            <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-sm border border-gray-100">
               <div className="flex items-center gap-4 mb-8 pb-6 border-b border-gray-50">
                  <div className="w-12 h-12 bg-reroute-light rounded-2xl flex items-center justify-center text-reroute-teal">
                    <MapPin size={24} />
                  </div>
                  <h2 className="text-2xl font-black text-gray-900">Trip Summary</h2>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-6">
                    <div>
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Route Details</p>
                      <div className="flex items-start gap-3">
                         <div className="flex flex-col items-center pt-1.5">
                            <div className="w-2 h-2 rounded-full bg-reroute-teal"></div>
                            <div className="w-px h-8 border-l-2 border-dashed border-gray-200 my-1"></div>
                            <div className="w-2 h-2 rounded-full bg-gray-900"></div>
                         </div>
                         <div>
                            <p className="font-bold text-gray-900">
                              {booking.tripType === TripType.AIRPORT 
                                ? (booking.airportTripSubtype === 'DROP' ? booking.pickupAddress : booking.to)
                                : (booking.from || 'Current Location')}
                            </p>
                            <p className="font-bold text-gray-900 mt-4">
                              {booking.tripType === TripType.AIRPORT
                                ? (booking.airportTripSubtype === 'DROP' ? booking.to : booking.pickupAddress)
                                : (booking.to || 'City Destination')}
                            </p>
                         </div>
                      </div>
                    </div>
                    <div className="inline-flex px-3 py-1 bg-reroute-light rounded-full border border-reroute-teal/10">
                       <span className="text-[9px] font-black text-reroute-teal uppercase tracking-widest">
                         {booking.tripType.replace('_', ' ')} Service
                       </span>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400">
                        <Calendar size={18} />
                      </div>
                      <div>
                        <p className="text-[9px] font-black text-gray-400 uppercase tracking-tight">Pickup Date</p>
                        <p className="text-sm font-bold text-gray-900">{booking.pickupDate || 'Today'}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400">
                        <Clock size={18} />
                      </div>
                      <div>
                        <p className="text-[9px] font-black text-gray-400 uppercase tracking-tight">Pickup Time</p>
                        <p className="text-sm font-bold text-gray-900">{booking.pickupTime || 'Immediate'}</p>
                      </div>
                    </div>
                  </div>
               </div>
            </div>

            {/* Payment Options */}
            <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-sm border border-gray-100">
               <div className="flex items-center gap-4 mb-8 pb-6 border-b border-gray-50">
                  <div className="w-12 h-12 bg-gray-900 text-white rounded-2xl flex items-center justify-center">
                    <CreditCard size={24} />
                  </div>
                  <h2 className="text-2xl font-black text-gray-900">Payment Mode</h2>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { id: 'UPI', label: 'Instant UPI', desc: 'Secure App Payment', icon: <Landmark size={20} /> },
                    { id: 'CARD', label: 'Credit/Debit', desc: 'Visa, Master, Amex', icon: <CreditCard size={20} /> },
                    { id: 'PAY_LATER', label: 'Pay After Trip', desc: 'Cash or Online to Driver', icon: <Wallet size={20} /> },
                  ].map((method) => (
                    <button
                      key={method.id}
                      onClick={() => setPaymentMethod(method.id as any)}
                      className={`p-6 rounded-3xl border-2 text-left transition-all group ${
                        paymentMethod === method.id 
                        ? 'border-reroute-teal bg-reroute-light/50' 
                        : 'border-gray-100 hover:border-gray-200 bg-white'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-colors ${
                        paymentMethod === method.id ? 'bg-reroute-teal text-white' : 'bg-gray-50 text-gray-400'
                      }`}>
                        {method.icon}
                      </div>
                      <p className="font-black text-gray-900 text-sm mb-1">{method.label}</p>
                      <p className="text-[10px] text-gray-500 font-bold uppercase tracking-tight">{method.desc}</p>
                    </button>
                  ))}
               </div>

               <div className="mt-8 p-4 bg-gray-50 rounded-2xl flex items-center gap-3 border border-gray-100">
                  <ShieldCheck className="text-green-500 shrink-0" size={20} />
                  <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest">
                    Secure 256-bit encrypted transaction
                  </p>
               </div>
            </div>
          </div>

          {/* Sidebar / Price Breakdown */}
          <div className="lg:col-span-4 space-y-8 sticky top-24">
            <div className="bg-gray-900 rounded-[2.5rem] p-8 md:p-10 text-white shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 p-8 opacity-5">
                  <ShieldCheck size={120} />
               </div>

               <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                     <img src={vehicle.image} className="w-16 h-16 rounded-2xl object-cover border-2 border-white/10" alt={vehicle.name} />
                     <div>
                        <h3 className="font-black text-lg">{vehicle.name}</h3>
                        <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest">{vehicle.type}</p>
                     </div>
                  </div>

                  <div className="space-y-4 mb-8">
                     <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-400 font-bold">Estimated Base Fare</span>
                        <span className="font-black">₹{baseFare.toLocaleString()}</span>
                     </div>
                     <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-400 font-bold">GST (5%)</span>
                        <span className="font-black">₹{gst.toLocaleString()}</span>
                     </div>
                     <div className="pt-4 border-t border-white/10 flex justify-between items-center">
                        <span className="text-reroute-teal font-black uppercase tracking-widest text-xs">Total Estimated</span>
                        <span className="text-3xl font-black">₹{total.toLocaleString()}</span>
                     </div>
                  </div>

                  <div className="bg-white/5 rounded-2xl p-4 mb-10 flex items-start gap-3">
                    <Info className="text-reroute-teal shrink-0 mt-0.5" size={16} />
                    <p className="text-[10px] text-gray-400 font-bold leading-relaxed uppercase tracking-widest">
                      Fare includes fuel & driver allowance. Parking & state tolls are excluded.
                    </p>
                  </div>

                  <button 
                    onClick={handleFinalConfirm}
                    disabled={isProcessing}
                    className="w-full bg-reroute-teal hover:bg-teal-700 disabled:bg-gray-700 text-white font-black py-5 rounded-2xl shadow-xl transition-all flex items-center justify-center gap-3 group active:scale-95"
                  >
                    {isProcessing ? (
                       <><motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }} className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full" /> Scheduling Trip...</>
                    ) : (
                       <><CheckCircle2 size={20} /> {paymentMethod === 'PAY_LATER' ? 'Confirm Booking' : 'Pay & Confirm'} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" /></>
                    )}
                  </button>

                  <div className="mt-6 flex items-center justify-center gap-3">
                     <div className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center text-gray-500">
                        <ShieldCheck size={14} />
                     </div>
                     <p className="text-[9px] text-gray-500 font-black uppercase tracking-tight">ReRoute Safety Protocol Active</p>
                  </div>
               </div>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-gray-100 flex items-center gap-4">
               <div className="w-10 h-10 bg-reroute-light rounded-xl flex items-center justify-center text-reroute-teal">
                  <CheckCircle2 size={20} />
               </div>
               <div>
                  <p className="text-xs font-black text-gray-900">Signed in as {user.phone}</p>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tight">Booking linked to profile</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
