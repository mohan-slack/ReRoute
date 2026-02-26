import React from 'react';
import { Home, ShieldCheck, Clock, Wallet, AlertCircle, Mail, MessageSquare, ChevronRight } from 'lucide-react';
import { ViewType } from '../App';

interface CancellationPolicyProps {
  onNavigate: (view: ViewType) => void;
}

const CancellationPolicy: React.FC<CancellationPolicyProps> = ({ onNavigate }) => {
  return (
    <div className="animate-in fade-in duration-500 bg-white">
      {/* Header Section */}
      <div className="bg-gray-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-reroute-teal rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <button 
            onClick={() => onNavigate('home')}
            className="mb-8 inline-flex items-center gap-2 text-reroute-teal font-bold hover:text-white transition-colors group"
          >
            <Home size={18} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
          </button>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">Cancellation & <br className="hidden md:block" />Refund Policy</h1>
          <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
            We value your plans and your peace of mind. Here is a clear breakdown of how we handle changes and cancellations at ReRoute.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            
            {/* Left Column: Guidelines */}
            <div className="lg:col-span-2 space-y-16">
              
              {/* 1. Cancellation Guidelines */}
              <div id="guidelines">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-reroute-light rounded-xl flex items-center justify-center text-reroute-teal">
                    <Clock size={22} />
                  </div>
                  <h2 className="text-3xl font-black text-gray-900">Cancellation Guidelines</h2>
                </div>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>
                    Plans change, and we understand that. To ensure fairness to our travelers and our chauffeur partners, we have established the following timeframe-based cancellation rules:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                      <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500"></span>
                        Free Cancellation
                      </h4>
                      <p className="text-sm">Cancel at least <strong>24 hours</strong> before your scheduled pickup for a full refund. No questions asked.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                      <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                        Partial Refund
                      </h4>
                      <p className="text-sm">Cancellations between <strong>6 to 24 hours</strong> before pickup attract a nominal charge of 25% of the trip base fare.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                      <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-red-500"></span>
                        Late Cancellation
                      </h4>
                      <p className="text-sm">Cancellations within <strong>6 hours</strong> of pickup attract a fee equivalent to 100% of the first day's base fare.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                      <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-black"></span>
                        No-Show Policy
                      </h4>
                      <p className="text-sm">If you are not present at the pickup location within 45 minutes of the scheduled time, it is considered a 'No-Show' with 100% fee.</p>
                    </div>
                  </div>

                  <p className="bg-reroute-light p-4 rounded-xl border border-reroute-teal/10 text-sm italic">
                    <strong>Note:</strong> Once driver details are shared (usually 2-4 hours before pickup) and the driver has started moving towards your location, any cancellation will be treated as a Late Cancellation.
                  </p>
                </div>
              </div>

              {/* 2. Refund Eligibility & Process */}
              <div id="refunds">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-reroute-light rounded-xl flex items-center justify-center text-reroute-teal">
                    <Wallet size={22} />
                  </div>
                  <h2 className="text-3xl font-black text-gray-900">Refund Eligibility & Process</h2>
                </div>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>
                    We believe in swift and hassle-free refunds. If your cancellation is eligible for a refund, the process is automated:
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-4">
                      <ChevronRight className="text-reroute-teal mt-1 flex-shrink-0" size={18} />
                      <div>
                        <span className="font-bold text-gray-900">Calculation:</span>
                        <p className="text-sm">The refund amount is calculated as the total amount paid minus any applicable cancellation fees as per our guidelines.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <ChevronRight className="text-reroute-teal mt-1 flex-shrink-0" size={18} />
                      <div>
                        <span className="font-bold text-gray-900">Timeline:</span>
                        <p className="text-sm">Refunds are initiated immediately upon cancellation. It typically takes <strong>5 to 7 business days</strong> to reflect in your account.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <ChevronRight className="text-reroute-teal mt-1 flex-shrink-0" size={18} />
                      <div>
                        <span className="font-bold text-gray-900">Payment Method:</span>
                        <p className="text-sm">Refunds are always credited back to the <strong>original payment method</strong> (Card, UPI, or Wallet) used during booking.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* 3. Exceptions */}
              <div id="exceptions">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-reroute-light rounded-xl flex items-center justify-center text-reroute-teal">
                    <AlertCircle size={22} />
                  </div>
                  <h2 className="text-3xl font-black text-gray-900">Policy Exceptions</h2>
                </div>
                <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 space-y-4 text-gray-600 text-sm leading-relaxed">
                  <p>
                    While we strive for consistency, certain situations are handled with empathy and discretion:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Force Majeure:</strong> Cancellations due to natural disasters, government-imposed lockdowns, or public strikes may be eligible for a full refund at ReRoute's discretion.</li>
                    <li><strong>Rescheduling:</strong> If you need to change your trip time or date, we allow one free reschedule up to 12 hours before pickup, subject to vehicle availability.</li>
                    <li><strong>Mechanical Issues:</strong> In the rare event ReRoute has to cancel a booking due to vehicle failure or chauffeur unavailability, a 100% refund plus a 10% loyalty credit is provided.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Column: Sidebar / Contact */}
            <div className="space-y-8">
              <div className="bg-gray-900 text-white p-8 rounded-3xl shadow-xl sticky top-24">
                <h3 className="text-xl font-bold mb-6">Need to cancel?</h3>
                <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                  The quickest way to cancel or modify your booking is through our app or website dashboard.
                </p>
                <div className="space-y-4 mb-8">
                  <button className="w-full bg-reroute-teal text-white font-bold py-3 rounded-xl hover:bg-teal-700 transition-all flex items-center justify-center gap-2">
                    <MessageSquare size={18} /> Manage Booking
                  </button>
                  <div className="flex items-center gap-4 text-sm">
                    <div>
                      <p className="text-xs text-gray-500 font-bold uppercase">Call 24/7 Support</p>
                      <p className="font-bold text-lg">+91 9353830316 (24/7)</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-reroute-teal">
                      <Mail size={18} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-bold uppercase">Email Support</p>
                      <p className="font-bold">support@reroute.com</p>
                    </div>
                  </div>
                </div>
                <div className="pt-6 border-t border-white/10">
                  <div className="flex items-center gap-2 text-reroute-teal text-xs font-bold uppercase tracking-widest">
                    <ShieldCheck size={14} /> ReRoute Safety Promise
                  </div>
                </div>
              </div>

              <div className="bg-reroute-light p-8 rounded-3xl border border-reroute-teal/10">
                <h4 className="font-bold text-gray-900 mb-4">Quick Links</h4>
                <ul className="space-y-3 text-sm font-medium text-gray-600">
                  <li><button onClick={() => onNavigate('faq')} className="hover:text-reroute-teal transition-colors">Frequently Asked Questions</button></li>
                  <li><a href="#" className="hover:text-reroute-teal transition-colors">Terms of Service</a></li>
                  <li><a href="#" className="hover:text-reroute-teal transition-colors">Privacy Policy</a></li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-[3rem] p-12 md:p-16 text-center border border-gray-100">
            <h3 className="text-3xl font-black text-gray-900 mb-6">Travel with Confidence</h3>
            <p className="text-gray-500 max-w-2xl mx-auto mb-10 text-lg">
              Our transparent policies are designed to put you first. Book your next journey knowing that we have your back every step of the way.
            </p>
            <button 
              onClick={() => onNavigate('home')}
              className="bg-reroute-teal hover:bg-teal-700 text-white font-black py-4 px-12 rounded-xl shadow-xl transition-all transform hover:scale-105 active:scale-95"
            >
              Back to Booking
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CancellationPolicy;