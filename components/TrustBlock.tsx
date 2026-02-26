
import React from 'react';
import { Star, ShieldCheck, Trophy, Users } from 'lucide-react';

const TrustBlock: React.FC = () => {
  return (
    <section className="py-16 bg-gray-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-black mb-6 leading-tight">
              The Gold Standard of <br />
              <span className="text-reroute-teal">Reliability & Trust</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              At ReRoute, we don't just provide rides; we deliver peace of mind. Our commitment to excellence is reflected in every mile we drive, ensuring you reach your destination with absolute comfort and precision.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
                <ShieldCheck className="text-reroute-teal" size={18} />
                <span className="text-sm font-bold">99% On-time Performance</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
                <Users className="text-reroute-teal" size={18} />
                <span className="text-sm font-bold">80% Repeat Customers</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm text-center transform hover:-translate-y-2 transition-transform">
              <div className="flex justify-center mb-4">
                <div className="bg-reroute-teal/20 p-3 rounded-2xl">
                  <Star className="text-reroute-teal fill-reroute-teal" size={32} />
                </div>
              </div>
              <div className="text-4xl font-black mb-1">4.8/5</div>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Average User Rating</p>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm text-center transform hover:-translate-y-2 transition-transform">
              <div className="flex justify-center mb-4">
                <div className="bg-reroute-teal/20 p-3 rounded-2xl">
                  <Trophy className="text-reroute-teal" size={32} />
                </div>
              </div>
              <div className="text-4xl font-black mb-1">500k+</div>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Rides Completed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBlock;
