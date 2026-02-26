
import React, { useState } from 'react';
import { Home, User as UserIcon, Phone, Mail, ShieldCheck, CheckCircle2, ArrowRight, Loader2, Save } from 'lucide-react';
import { ViewType } from '../App';
import { User } from '../types';

interface ProfileSettingsProps {
  user: User;
  onUpdate: (updatedUser: User) => void;
  onNavigate: (view: ViewType) => void;
}

const ProfileSettings: React.FC<ProfileSettingsProps> = ({ user, onUpdate, onNavigate }) => {
  const [name, setName] = useState(user.name || '');
  const [email, setEmail] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    
    // Simulate API delay
    setTimeout(() => {
      onUpdate({ ...user, name });
      setIsSaving(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    }, 1000);
  };

  const getInitials = (n: string) => {
    return n.split(' ').map(part => part[0]).join('').toUpperCase().slice(0, 2);
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      <div className="bg-white border-b pt-12 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button 
            onClick={() => onNavigate('home')}
            className="mb-8 inline-flex items-center gap-2 text-reroute-teal font-black text-xs uppercase tracking-widest hover:text-teal-700 transition-colors"
          >
            <Home size={14} /> Back to Home
          </button>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative group">
              <div className="w-32 h-32 bg-reroute-teal text-white rounded-[2.5rem] flex items-center justify-center font-black text-4xl shadow-2xl relative z-10 overflow-hidden">
                {name ? getInitials(name) : user.phone.slice(-2)}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <UserIcon size={24} />
                </div>
              </div>
              <div className="absolute -inset-4 bg-reroute-teal/10 rounded-[3rem] blur-2xl -z-0"></div>
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-black text-gray-900 mb-2">{name || 'Your Profile'}</h1>
              <p className="text-gray-500 font-bold mb-4">{user.phone}</p>
              <div className="flex items-center gap-2 px-3 py-1 bg-green-50 text-green-600 rounded-full border border-green-100 w-fit mx-auto md:mx-0">
                <ShieldCheck size={14} />
                <span className="text-[10px] font-black uppercase tracking-widest">Verified Account</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
        <div className="bg-white rounded-[3rem] shadow-2xl border border-gray-100 overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="flex items-center gap-4 mb-10 pb-6 border-b border-gray-50">
               <div className="w-10 h-10 bg-reroute-light rounded-xl flex items-center justify-center text-reroute-teal">
                 <UserIcon size={20} />
               </div>
               <h3 className="text-xl font-black text-gray-900">Personal Information</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest pl-2">Full Name</label>
                  <input 
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent focus:border-reroute-teal focus:bg-white rounded-2xl font-bold outline-none transition-all"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest pl-2">Phone Number</label>
                  <div className="relative group">
                    <input 
                      type="text" 
                      value={user.phone}
                      disabled
                      className="w-full px-6 py-4 bg-gray-100 border-2 border-transparent rounded-2xl font-bold text-gray-400 cursor-not-allowed outline-none"
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2">
                      <ShieldCheck size={18} className="text-green-500" />
                    </div>
                  </div>
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-[11px] font-black text-gray-400 uppercase tracking-widest pl-2">Email Address (Optional)</label>
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent focus:border-reroute-teal focus:bg-white rounded-2xl font-bold outline-none transition-all"
                  />
                </div>
              </div>

              <div className="pt-8 flex flex-col md:flex-row items-center gap-6 border-t border-gray-50">
                <button 
                  type="submit"
                  disabled={isSaving}
                  className="w-full md:w-auto px-12 py-5 bg-reroute-teal text-white font-black rounded-2xl shadow-xl hover:bg-teal-700 transition-all flex items-center justify-center gap-3 active:scale-95 disabled:bg-gray-200"
                >
                  {isSaving ? <Loader2 className="animate-spin" size={20} /> : <><Save size={20} /> Save Profile Changes</>}
                </button>
                
                {showSuccess && (
                  <div className="flex items-center gap-2 text-green-600 font-bold animate-in fade-in slide-in-from-left-4">
                    <CheckCircle2 size={20} />
                    Profile updated successfully!
                  </div>
                )}
              </div>
            </form>
          </div>
          
          <div className="bg-gray-50 p-8 md:p-12 border-t border-gray-100">
             <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-reroute-teal shadow-sm">
                  <ShieldCheck size={20} />
                </div>
                <h3 className="text-xl font-black text-gray-900">Security & Privacy</h3>
             </div>
             <p className="text-sm text-gray-500 leading-relaxed mb-8 max-w-2xl">
               Your account is protected by 256-bit encryption. We never share your personal travel data with third-party advertisers. Managed by ReRoute Premium Systems.
             </p>
             <button className="text-sm font-black text-red-600 hover:text-red-700 underline tracking-widest uppercase">
               Request Account Deletion
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
