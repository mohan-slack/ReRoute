import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { ViewType } from '../App';

interface FooterProps {
  onNavigate: (view: ViewType) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <button 
              onClick={() => onNavigate('home')}
              className="flex items-center gap-3 hover:opacity-80 transition-opacity focus:outline-none"
            >
              <div className="relative flex items-center justify-center">
                <div className="w-12 h-8 border-2 border-reroute-teal rounded-full relative overflow-hidden">
                   <div className="absolute inset-0 border-t-2 border-dashed border-white opacity-20"></div>
                </div>
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-400 rounded-full"></div>
                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2 h-2 bg-reroute-teal rounded-full"></div>
              </div>
              <span className="text-3xl font-black tracking-tight text-white text-left">
                <span className="text-gray-400">Re</span>
                <span className="text-reroute-teal">Route</span>
              </span>
            </button>
            <p className="text-base leading-relaxed text-gray-400">
              India's premier high-end car rental service. Elevating outstation, local, and airport transfers through technology and expert hospitality.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-reroute-teal transition-colors"><Facebook size={24} /></a>
              <a href="#" className="hover:text-reroute-teal transition-colors"><Twitter size={24} /></a>
              <a href="#" className="hover:text-reroute-teal transition-colors"><Instagram size={24} /></a>
              <a href="#" className="hover:text-reroute-teal transition-colors"><Linkedin size={24} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white text-lg font-black mb-8 uppercase tracking-widest">Popular Cities</h4>
            <ul className="space-y-5 text-base font-bold">
              <li><button onClick={() => onNavigate('bangalore')} className="hover:text-reroute-teal transition-colors text-left w-full">Bangalore Taxi Service</button></li>
              <li><button onClick={() => onNavigate('delhi')} className="hover:text-reroute-teal transition-colors text-left w-full">Delhi NCR Cab Service</button></li>
              <li><button onClick={() => onNavigate('mumbai')} className="hover:text-reroute-teal transition-colors text-left w-full">Mumbai Car Rental</button></li>
              <li><button onClick={() => onNavigate('outstation')} className="hover:text-reroute-teal transition-colors text-left w-full">Pune to Mumbai Cabs</button></li>
              <li><button onClick={() => onNavigate('outstation')} className="hover:text-reroute-teal transition-colors text-left w-full">Chennai Outstation</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-lg font-black mb-8 uppercase tracking-widest">Company</h4>
            <ul className="space-y-5 text-base font-bold">
              <li><a href="#" className="hover:text-reroute-teal transition-colors">Our Story</a></li>
              <li><button onClick={() => onNavigate('corporate')} className="hover:text-reroute-teal transition-colors text-left w-full">Corporate Solutions</button></li>
              <li><button onClick={() => onNavigate('faq')} className="hover:text-reroute-teal transition-colors text-left w-full">FAQs</button></li>
              <li><button onClick={() => onNavigate('cancellation')} className="hover:text-reroute-teal transition-colors text-left w-full">Cancellation Policy</button></li>
              <li><a href="#" className="hover:text-reroute-teal transition-colors">Legal Terms</a></li>
              <li><a href="#" className="hover:text-reroute-teal transition-colors">Privacy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-lg font-black mb-8 uppercase tracking-widest">Get in Touch</h4>
            <ul className="space-y-6 text-base font-bold">
              <li className="flex items-center gap-4">
                {/* Dual Pane Contact Card in Footer */}
                <div className="flex items-center overflow-hidden border-2 border-reroute-teal rounded-xl font-bold shadow-sm">
                  <div className="bg-white px-3 py-1.5 flex items-center gap-2 text-gray-900 border-r-2 border-reroute-teal">
                    <Phone size={14} className="text-reroute-teal fill-reroute-teal" />
                    <span className="text-xs font-black">24/7</span>
                  </div>
                  <div className="bg-reroute-teal px-3 py-1.5 text-white">
                    <span className="text-xs font-black">+91 9353830316</span>
                  </div>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <Mail size={22} className="text-reroute-teal" />
                <span>concierge@reroute.com</span>
              </li>
              <li className="flex items-start gap-4">
                <MapPin size={22} className="text-reroute-teal mt-1" />
                <span>Global Tech Park, Indiranagar,<br />Bangalore, KA 560038</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500 font-bold">
          <p>© 2024 ReRoute Car Rentals Pvt. Ltd. All rights reserved.</p>
          <div className="flex gap-8 items-center">
            <span className="uppercase tracking-widest text-[11px] font-black">Redefining The Road Ahead</span>
            <div className="flex gap-3">
              <img src="https://img.icons8.com/color/48/visa.png" alt="Visa" className="h-6 w-auto grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="https://img.icons8.com/color/48/mastercard.png" alt="Mastercard" className="h-6 w-auto grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="https://img.icons8.com/color/48/google-pay.png" alt="GPay" className="h-6 w-auto grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;