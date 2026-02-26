
import React, { useState } from 'react';
import { Menu, X, User as UserIcon, LogIn, Phone, LogOut, ChevronDown, ListOrdered, Settings } from 'lucide-react';
import { ViewType } from '../App';
import { User } from '../types';

interface NavbarProps {
  onNavigate: (view: ViewType) => void;
  currentView: ViewType;
  onAuthClick: () => void;
  user: User | null;
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentView, onAuthClick, user, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const navItems: { label: string; view: ViewType }[] = [
    { label: 'Outstation', view: 'outstation' },
    { label: 'One-Way', view: 'oneway' },
    { label: 'Local', view: 'local' },
    { label: 'Airport', view: 'airport' },
    { label: 'Corporate', view: 'corporate' }
  ];

  const handleNav = (view: ViewType) => {
    onNavigate(view);
    setIsOpen(false);
    setShowUserMenu(false);
  };

  const getInitials = (name?: string) => {
    if (!name) return "";
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  };

  return (
    <nav className="bg-white border-b sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <button 
              onClick={() => handleNav('home')}
              className="flex-shrink-0 flex items-center gap-2 hover:opacity-80 transition-opacity focus:outline-none"
            >
              <div className="relative flex items-center justify-center">
                <div className="w-10 h-6 border-2 border-reroute-teal rounded-full relative overflow-hidden">
                   <div className="absolute inset-0 border-t-2 border-dashed border-white opacity-50"></div>
                </div>
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-reroute-gray rounded-full"></div>
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-reroute-teal rounded-full"></div>
              </div>
              <span className="text-2xl font-black tracking-tight text-gray-900">
                <span className="text-reroute-gray">Re</span>
                <span className="text-reroute-teal">Route</span>
              </span>
            </button>
            <div className="hidden md:ml-10 md:flex md:space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.view}
                  onClick={() => handleNav(item.view)}
                  className={`${
                    currentView === item.view 
                    ? 'border-reroute-teal text-reroute-teal' 
                    : 'border-transparent text-gray-500 hover:text-reroute-teal'
                  } inline-flex items-center px-1 pt-1 border-b-2 text-base font-bold transition-all focus:outline-none`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center overflow-hidden border-2 border-reroute-teal rounded-xl font-bold shadow-sm">
              <div className="bg-white px-3 py-1.5 flex items-center gap-2 text-gray-900 border-r-2 border-reroute-teal">
                <Phone size={16} className="text-reroute-teal fill-reroute-teal" />
                <span className="text-sm font-black">24/7</span>
              </div>
              <div className="bg-reroute-teal px-4 py-1.5 text-white">
                <span className="text-sm font-black">+91 9353830316</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {user ? (
                <div className="relative">
                  <button 
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    className="flex items-center gap-3 px-4 py-2 bg-gray-50 rounded-full border border-gray-100 hover:bg-gray-100 transition-colors"
                  >
                    <div className="w-9 h-9 bg-reroute-teal text-white rounded-full flex items-center justify-center font-black text-xs shadow-inner">
                      {user.name ? getInitials(user.name) : user.phone.slice(-2)}
                    </div>
                    <div className="text-left">
                      <p className="text-[10px] font-black text-gray-400 uppercase leading-none mb-0.5">Welcome</p>
                      <p className="text-xs font-black text-gray-900 leading-none">{user.name?.split(' ')[0] || 'Traveler'}</p>
                    </div>
                    <ChevronDown size={14} className={`transition-transform duration-300 text-gray-400 ${showUserMenu ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {showUserMenu && (
                    <div className="absolute right-0 mt-3 w-56 bg-white border border-gray-100 rounded-[1.5rem] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] py-2 z-[60] animate-in fade-in slide-in-from-top-2 duration-200">
                      <div className="px-5 py-3 border-b border-gray-50">
                        <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1">Signed in as</p>
                        <p className="text-sm font-black text-gray-900 truncate">{user.phone}</p>
                      </div>
                      <button 
                        onClick={() => handleNav('bookings')}
                        className={`w-full text-left px-5 py-3 text-sm font-bold flex items-center gap-3 transition-colors ${currentView === 'bookings' ? 'text-reroute-teal bg-reroute-light' : 'text-gray-700 hover:bg-gray-50'}`}
                      >
                        <ListOrdered size={18} /> My Bookings
                      </button>
                      <button 
                        onClick={() => handleNav('profile')}
                        className={`w-full text-left px-5 py-3 text-sm font-bold flex items-center gap-3 transition-colors ${currentView === 'profile' ? 'text-reroute-teal bg-reroute-light' : 'text-gray-700 hover:bg-gray-50'}`}
                      >
                        <Settings size={18} /> Update Profile
                      </button>
                      <div className="px-5 py-1 border-t border-gray-50 mt-1">
                        <button 
                          onClick={() => {
                            onLogout();
                            setShowUserMenu(false);
                          }}
                          className="w-full text-left py-3 text-sm font-bold text-red-600 hover:text-red-700 flex items-center gap-3"
                        >
                          <LogOut size={18} /> Sign Out
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <button 
                  onClick={onAuthClick}
                  className="flex items-center gap-2 px-6 py-3 text-base font-black text-white bg-reroute-teal hover:bg-teal-700 rounded-full transition-all shadow-md active:scale-95"
                >
                  <LogIn size={20} />
                  Sign In
                </button>
              )}
            </div>
          </div>
          <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b animate-in slide-in-from-top duration-300">
          <div className="pt-2 pb-3 space-y-1">
            {user && (
               <div className="px-4 py-4 flex items-center gap-4 bg-reroute-light mb-2">
                 <div className="w-12 h-12 bg-reroute-teal text-white rounded-full flex items-center justify-center font-black">
                   {user.name ? getInitials(user.name) : user.phone.slice(-2)}
                 </div>
                 <div>
                   <p className="text-lg font-black text-gray-900">{user.name || 'Traveler'}</p>
                   <p className="text-xs text-gray-500">{user.phone}</p>
                 </div>
               </div>
            )}
            {navItems.map((item) => (
              <button
                key={item.view}
                onClick={() => handleNav(item.view)}
                className={`${
                  currentView === item.view 
                  ? 'bg-white border-reroute-teal text-reroute-teal' 
                  : 'border-transparent text-gray-600 hover:bg-gray-50'
                } block w-full text-left pl-3 pr-4 py-4 border-l-4 text-lg font-bold transition-all`}
              >
                {item.label}
              </button>
            ))}
            {user && (
              <>
                <button 
                  onClick={() => handleNav('bookings')}
                  className="block w-full text-left pl-3 pr-4 py-4 border-l-4 border-transparent text-lg font-bold text-gray-600 hover:bg-gray-50"
                >
                  My Bookings
                </button>
                <button 
                  onClick={() => handleNav('profile')}
                  className="block w-full text-left pl-3 pr-4 py-4 border-l-4 border-transparent text-lg font-bold text-gray-600 hover:bg-gray-50"
                >
                  Update Profile
                </button>
              </>
            )}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="px-4">
              {user ? (
                <button 
                  onClick={onLogout}
                  className="w-full bg-red-50 text-red-600 font-black py-4 rounded-xl shadow-sm text-base flex items-center justify-center gap-2"
                >
                  <LogOut size={20} /> Sign Out
                </button>
              ) : (
                <button 
                  onClick={onAuthClick}
                  className="w-full bg-reroute-teal text-white font-black py-4 rounded-xl shadow-md text-base"
                >
                  Login / Signup
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
