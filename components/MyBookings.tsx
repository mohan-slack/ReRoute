
import React, { useState } from 'react';
import { Home, Calendar, Clock, MapPin, Car, ChevronRight, Filter, Download, AlertCircle } from 'lucide-react';
import { ViewType } from '../App';
import { BookingRecord, TripType } from '../types';

const MOCK_BOOKINGS: BookingRecord[] = [
  {
    id: 'RR-99210',
    tripType: TripType.AIRPORT,
    from: 'Indiranagar, Bangalore',
    to: 'Kempegowda Int\'l Airport (BLR)',
    date: '2024-05-15',
    time: '04:30 AM',
    vehicleName: 'Hyundai Aura',
    status: 'Upcoming',
    price: 1250
  },
  {
    id: 'RR-88125',
    tripType: TripType.OUTSTATION_ONEWAY,
    from: 'Bangalore',
    to: 'Mysore',
    date: '2024-04-22',
    time: '08:00 AM',
    vehicleName: 'Maruti Dzire',
    status: 'Completed',
    price: 3400
  },
  {
    id: 'RR-77112',
    tripType: TripType.LOCAL,
    from: 'Delhi NCR',
    to: 'Local 8h/80km',
    date: '2024-03-10',
    time: '10:00 AM',
    vehicleName: 'Toyota Innova Crysta',
    status: 'Completed',
    price: 2800
  },
  {
    id: 'RR-66100',
    tripType: TripType.AIRPORT,
    from: 'IGI Airport (DEL)',
    to: 'Gurgaon Sector 45',
    date: '2024-02-15',
    time: '11:45 PM',
    vehicleName: 'Hyundai i20',
    status: 'Cancelled',
    price: 950
  }
];

interface MyBookingsProps {
  onNavigate: (view: ViewType) => void;
}

const MyBookings: React.FC<MyBookingsProps> = ({ onNavigate }) => {
  const [filter, setFilter] = useState<'All' | 'Upcoming' | 'Completed' | 'Cancelled'>('All');

  const filteredBookings = filter === 'All' 
    ? MOCK_BOOKINGS 
    : MOCK_BOOKINGS.filter(b => b.status === filter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Upcoming': return 'text-reroute-teal bg-reroute-light border-reroute-teal/20';
      case 'Completed': return 'text-green-600 bg-green-50 border-green-100';
      case 'Cancelled': return 'text-red-600 bg-red-50 border-red-100';
      default: return 'text-gray-600 bg-gray-50 border-gray-100';
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-white border-b pt-12 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button 
            onClick={() => onNavigate('home')}
            className="mb-6 inline-flex items-center gap-2 text-reroute-teal font-black text-xs uppercase tracking-widest hover:text-teal-700 transition-colors"
          >
            <Home size={14} /> Back to Home
          </button>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h1 className="text-4xl font-black text-gray-900 mb-2">My Bookings</h1>
              <p className="text-gray-500 font-medium">Manage and track your premium travel history</p>
            </div>
            
            <div className="flex items-center gap-2 bg-gray-100 p-1.5 rounded-2xl overflow-x-auto scrollbar-hide">
              {['All', 'Upcoming', 'Completed', 'Cancelled'].map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f as any)}
                  className={`px-6 py-2.5 rounded-xl text-xs font-black transition-all whitespace-nowrap ${
                    filter === f 
                    ? 'bg-white text-gray-900 shadow-sm' 
                    : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filteredBookings.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredBookings.map((booking) => (
              <div key={booking.id} className="bg-white rounded-[2rem] border border-gray-100 shadow-sm overflow-hidden flex flex-col sm:flex-row hover:shadow-xl transition-all duration-300">
                <div className="sm:w-1/3 bg-gray-50 p-8 flex flex-col justify-center items-center text-center border-b sm:border-b-0 sm:border-r border-gray-100">
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-reroute-teal mb-4">
                    <Car size={32} />
                  </div>
                  <h4 className="font-black text-gray-900 text-lg mb-1">{booking.vehicleName}</h4>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{booking.tripType.replace('_', ' ')}</p>
                </div>
                
                <div className="sm:w-2/3 p-8 flex flex-col">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Booking ID</p>
                      <p className="text-sm font-black text-gray-900">#{booking.id}</p>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ${getStatusColor(booking.status)}`}>
                      {booking.status}
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-reroute-light flex items-center justify-center text-reroute-teal flex-shrink-0">
                        <MapPin size={16} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-tight">Pickup & Drop</p>
                        <p className="text-xs font-bold text-gray-900 truncate">{booking.from} to {booking.to}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-full bg-reroute-light flex items-center justify-center text-reroute-teal flex-shrink-0">
                        <Calendar size={16} />
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-tight">Date & Time</p>
                        <p className="text-xs font-bold text-gray-900">{booking.date} at {booking.time}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Total Fare</p>
                      <p className="text-xl font-black text-gray-900">₹{booking.price}</p>
                    </div>
                    <div className="flex gap-2">
                      {booking.status === 'Completed' && (
                        <button className="p-3 bg-gray-50 rounded-xl text-gray-600 hover:bg-reroute-light hover:text-reroute-teal transition-all">
                          <Download size={20} />
                        </button>
                      )}
                      <button className="flex items-center gap-2 px-5 py-3 bg-gray-900 text-white rounded-xl font-black text-xs uppercase tracking-widest hover:bg-reroute-teal transition-all active:scale-95 shadow-md">
                        View Details <ChevronRight size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-[3rem] p-24 text-center border border-gray-100 shadow-sm">
            <div className="w-20 h-20 bg-gray-50 rounded-3xl flex items-center justify-center mx-auto mb-8 text-gray-300">
              <AlertCircle size={48} />
            </div>
            <h3 className="text-2xl font-black text-gray-900 mb-4">No {filter !== 'All' ? filter.toLowerCase() : ''} bookings found</h3>
            <p className="text-gray-500 mb-10 max-w-sm mx-auto">Looks like you haven't booked a premium journey yet. Start your travel story today.</p>
            <button 
              onClick={() => onNavigate('home')}
              className="bg-reroute-teal text-white font-black py-4 px-12 rounded-2xl shadow-xl hover:bg-teal-700 transition-all transform hover:scale-105 active:scale-95"
            >
              Plan Your Trip
            </button>
          </div>
        )}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="bg-reroute-light rounded-[2.5rem] p-12 border border-reroute-teal/10">
          <h3 className="text-2xl font-black text-gray-900 mb-4">Need help with a booking?</h3>
          <p className="text-gray-500 mb-8">Our 24/7 concierge is here to assist you with modifications or queries.</p>
          <div className="flex justify-center gap-4">
             <button className="flex items-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-2xl font-black shadow-sm border border-gray-100 hover:bg-gray-50 transition-all">
               Call Concierge
             </button>
             <button className="flex items-center gap-2 px-8 py-4 bg-reroute-teal text-white rounded-2xl font-black shadow-xl hover:bg-teal-700 transition-all">
               Live Support
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBookings;
