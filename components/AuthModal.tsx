
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, ShieldCheck, ArrowRight, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (phone: string) => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const [step, setStep] = useState<'PHONE' | 'OTP'>('PHONE');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState(['', '', '', '']);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const otpInputs = useRef<(HTMLInputElement | null)[]>([]);

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setStep('PHONE');
      setPhone('');
      setOtp(['', '', '', '']);
      setError(null);
      setIsLoading(false);
    }
  }, [isOpen]);

  const handleSendOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.length !== 10) {
      setError('Please enter a valid 10-digit mobile number');
      return;
    }
    
    setIsLoading(true);
    setError(null);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setStep('OTP');
      // Autofocus first OTP field
      setTimeout(() => otpInputs.current[0]?.focus(), 100);
    }, 1500);
  };

  const handleOtpChange = (index: number, value: string) => {
    if (isNaN(Number(value))) return;
    if (error) setError(null); // Clear error on typing
    
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    // Move to next input
    if (value && index < 3) {
      otpInputs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      otpInputs.current[index - 1]?.focus();
    }
  };

  const handleVerifyOTP = async () => {
    const fullOtp = otp.join('');
    if (fullOtp.length !== 4) return;
    
    setIsLoading(true);
    setError(null);

    // Simulate verification (Accept 1234 as valid)
    setTimeout(() => {
      if (fullOtp === '1234') {
        onSuccess(phone);
      } else {
        setIsLoading(false);
        setError('Incorrect code. Please check and try again (Hint: 1234).');
        setOtp(['', '', '', '']);
        otpInputs.current[0]?.focus();
      }
    }, 1500);
  };

  useEffect(() => {
    if (otp.every(digit => digit !== '') && step === 'OTP') {
      handleVerifyOTP();
    }
  }, [otp]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-md bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-100"
          >
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 text-gray-400 hover:text-gray-900 transition-colors z-10"
            >
              <X size={24} />
            </button>

            <div className="p-8 md:p-12">
              <div className="flex justify-center mb-8">
                <div className="w-16 h-16 bg-reroute-light rounded-2xl flex items-center justify-center text-reroute-teal">
                  <ShieldCheck size={32} />
                </div>
              </div>

              <div className="text-center mb-10">
                <h2 className="text-3xl font-black text-gray-900 mb-2">
                  {step === 'PHONE' ? 'Sign In / Register' : 'Verify Identity'}
                </h2>
                <p className="text-gray-500 font-medium text-sm">
                  {step === 'PHONE' 
                    ? 'Access your premium travel dashboard' 
                    : `Enter the 4-digit code sent to +91 ${phone}`}
                </p>
              </div>

              <AnimatePresence mode="wait">
                {step === 'PHONE' ? (
                  <motion.form
                    key="phone"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    onSubmit={handleSendOTP}
                    className="space-y-6"
                  >
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest pl-2">Mobile Number</label>
                      <div className="relative group">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2 border-r pr-3 border-gray-100">
                          <span className="text-sm font-black text-gray-400">+91</span>
                        </div>
                        <input
                          type="tel"
                          placeholder="98765 43210"
                          className={`w-full pl-16 pr-4 py-4 bg-gray-50 border-2 rounded-2xl text-lg font-black transition-all outline-none ${error ? 'border-red-200 focus:border-red-500 bg-red-50/30' : 'border-transparent focus:border-reroute-teal'}`}
                          value={phone}
                          onChange={(e) => {
                            if (error) setError(null);
                            setPhone(e.target.value.replace(/\D/g, '').slice(0, 10));
                          }}
                          disabled={isLoading}
                          autoFocus
                        />
                      </div>
                      
                      <AnimatePresence>
                        {error && (
                          <motion.div 
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="flex items-center gap-2 px-3 py-2 bg-red-50 text-red-600 rounded-xl border border-red-100"
                          >
                            <AlertCircle size={14} />
                            <span className="text-xs font-bold">{error}</span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading || phone.length !== 10}
                      className="w-full bg-reroute-teal hover:bg-teal-700 disabled:bg-gray-200 text-white font-black py-4 rounded-2xl shadow-xl transition-all transform active:scale-95 flex items-center justify-center gap-3"
                    >
                      {isLoading ? <Loader2 className="animate-spin" size={20} /> : (
                        <>Send OTP <ArrowRight size={20} /></>
                      )}
                    </button>
                    
                    <p className="text-[10px] text-center text-gray-400 font-bold uppercase tracking-widest">
                      By signing in, you agree to our Terms of Service
                    </p>
                  </motion.form>
                ) : (
                  <motion.div
                    key="otp"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-8"
                  >
                    <div className="space-y-6">
                      <div className="flex justify-between gap-3 max-w-xs mx-auto">
                        {otp.map((digit, idx) => (
                          <input
                            key={idx}
                            ref={el => { otpInputs.current[idx] = el; }}
                            type="text"
                            inputMode="numeric"
                            className={`w-16 h-20 text-center text-3xl font-black rounded-2xl transition-all outline-none border-2 ${error ? 'bg-red-50 border-red-500 text-red-600' : 'bg-gray-50 border-transparent focus:border-reroute-teal focus:bg-white text-gray-900'}`}
                            value={digit}
                            onChange={(e) => handleOtpChange(idx, e.target.value)}
                            onKeyDown={(e) => handleKeyDown(idx, e) }
                            disabled={isLoading}
                          />
                        ))}
                      </div>

                      <AnimatePresence>
                        {error && (
                          <motion.div 
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="flex items-center justify-center gap-2 px-4 py-3 bg-red-50 text-red-600 rounded-2xl border border-red-100 text-center"
                          >
                            <AlertCircle size={16} />
                            <span className="text-sm font-bold">{error}</span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <div className="text-center">
                      <button 
                        onClick={() => setStep('PHONE')}
                        className="text-sm font-black text-reroute-teal hover:underline uppercase tracking-widest"
                      >
                        Change Number
                      </button>
                    </div>

                    <div className="bg-reroute-light p-4 rounded-2xl flex items-center gap-3">
                      <CheckCircle2 className="text-reroute-teal" size={20} />
                      <p className="text-xs font-bold text-reroute-teal">Demo Hint: Enter 1234 to verify</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Bottom Accent */}
            <div className="h-2 bg-gradient-to-r from-reroute-teal to-teal-800" />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default AuthModal;
