
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search, MessageSquare, Home, HelpCircle } from 'lucide-react';
import { ViewType } from '../App';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 last:border-none">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left hover:text-reroute-teal transition-colors group focus:outline-none"
      >
        <span className="text-lg font-bold text-gray-900 group-hover:text-reroute-teal">{question}</span>
        {isOpen ? (
          <ChevronUp className="text-reroute-teal" size={20} />
        ) : (
          <ChevronDown className="text-gray-400 group-hover:text-reroute-teal" size={20} />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 pb-6' : 'max-h-0'
        }`}
      >
        <p className="text-gray-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

interface FAQDetailsProps {
  onNavigate: (view: ViewType) => void;
}

const FAQDetails: React.FC<FAQDetailsProps> = ({ onNavigate }) => {
  const categories = [
    {
      title: "Booking Process",
      items: [
        {
          question: "How do I book a ride with ReRoute?",
          answer: "You can book via our website or mobile app by entering your pickup and drop locations, selecting your trip type (Outstation, Local, or Airport), choosing a vehicle, and confirming your details."
        },
        {
          question: "Do I need an account to book?",
          answer: "While you can browse fares without an account, a quick registration with your phone number is required to confirm a booking and track your ride in real-time."
        },
        {
          question: "When will I receive my driver's details?",
          answer: "For most bookings, driver details including name, contact number, and vehicle plate are sent via SMS and Email 2-4 hours prior to the scheduled pickup time."
        },
        {
          question: "Can I book a ride for someone else?",
          answer: "Yes! Simply enter the passenger's name and contact number during the booking process so they receive all the ride updates and chauffeur details directly."
        }
      ]
    },
    {
      title: "Cancellation & Modifications",
      items: [
        {
          question: "How can I cancel my booking?",
          answer: "You can cancel through the 'My Bookings' section on our app or website. Alternatively, you can contact our 24/7 support team via phone or chat for immediate assistance."
        },
        {
          question: "Are there any cancellation charges?",
          answer: "Cancellations made more than 6 hours before pickup are usually free. For cancellations closer to the trip, a small fee may apply to compensate the driver's time. Specific details are provided at the time of booking."
        },
        {
          question: "How long do refunds take?",
          answer: "Once a refund is initiated from our end, it typically reflects in your original payment method within 5-7 business days, depending on your bank's processing time."
        },
        {
          question: "Can I change my pickup time or location after booking?",
          answer: "Yes, minor modifications can be made through our support team or the 'Edit Booking' feature up to 4 hours before your trip, subject to vehicle availability in your new zone."
        }
      ]
    },
    {
      title: "Pricing & Hidden Fees",
      items: [
        {
          question: "Are tolls and parking charges included in the fare?",
          answer: "Our 'All-Inclusive' quotes include state taxes, highway tolls, and driver allowances. However, parking charges at specific venues or malls are usually paid by the customer directly."
        },
        {
          question: "Does ReRoute have surge pricing?",
          answer: "No, we believe in transparent, fixed pricing. The fare you see at the time of booking is the fare you pay, regardless of high demand periods or weather conditions."
        },
        {
          question: "How is the final fare calculated?",
          answer: "For outstation trips, it's based on a per-km rate with a minimum daily distance commitment. For local rentals, it's based on the specific hourly package (e.g., 4h/40km) you select."
        },
        {
          question: "Can I get a fare estimate before booking?",
          answer: "Absolutely! Just enter your trip details in our booking widget on the home page to see an instant, transparent breakdown of the estimated cost with no commitment required."
        }
      ]
    },
    {
      title: "Payment Methods",
      items: [
        {
          question: "What payment options are available?",
          answer: "We accept all major Credit/Debit cards, UPI (GPay, PhonePe, Paytm), Net Banking, and popular mobile wallets. Cash payments to the driver are also supported for most routes."
        },
        {
          question: "Is my payment information secure?",
          answer: "Yes, ReRoute uses industry-standard 256-bit SSL encryption and PCI-DSS compliant payment gateways to ensure your financial data is 100% safe and never stored on our servers."
        },
        {
          question: "How do I get an invoice for my trip?",
          answer: "An automated digital invoice is sent to your registered email address immediately after the trip is completed. You can also download history invoices from the 'My Bookings' section."
        },
        {
          question: "Can I get a GST invoice for business travel?",
          answer: "Yes, simply select the 'Corporate/Business' option during checkout and enter your company's GST details to receive a compliant tax invoice for easy tax filing."
        }
      ]
    },
    {
      title: "General Service Questions",
      items: [
        {
          question: "What types of vehicles does ReRoute offer?",
          answer: "Our fleet ranges from compact hatchbacks (Indica, Swift) and comfortable sedans (Etios, Dzire) to spacious SUVs (Innova, Ertiga) and luxury cars (Mercedes, BMW) for executive travel."
        },
        {
          question: "Is ReRoute service available 24/7?",
          answer: "Yes, our booking platform is always online, and our customer support team is active 24/7. You can book a ride for any time of the day or night, every day of the year."
        },
        {
          question: "What if I have an issue during the ride?",
          answer: "Every ReRoute trip is monitored. You can use the 'Emergency/SOS' button in the app to alert our safety team or call our 24/7 helpline for immediate roadside assistance."
        }
      ]
    }
  ];

  return (
    <div className="animate-in fade-in duration-500 bg-white">
      {/* Hero Section */}
      <div className="bg-gray-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-reroute-teal rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <button 
            onClick={() => onNavigate('home')}
            className="mb-8 inline-flex items-center gap-2 text-reroute-teal font-bold hover:text-white transition-colors group"
          >
            <Home size={18} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
          </button>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">How can we help you?</h1>
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder="Search for answers..." 
              className="w-full pl-12 pr-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-reroute-teal focus:border-transparent transition-all backdrop-blur-sm"
            />
          </div>
        </div>
      </div>

      {/* FAQ Content */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {categories.map((category, catIdx) => (
              <div key={catIdx}>
                <h3 className="text-2xl font-black text-gray-900 mb-8 flex items-center gap-3">
                  <div className="w-8 h-8 bg-reroute-light rounded-lg flex items-center justify-center text-reroute-teal">
                    <HelpCircle size={18} />
                  </div>
                  {category.title}
                </h3>
                <div className="bg-white rounded-3xl border border-gray-100 px-8 shadow-sm">
                  {category.items.map((item, itemIdx) => (
                    <FAQItem key={itemIdx} question={item.question} answer={item.answer} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still have questions? */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-reroute-light rounded-[3rem] p-12 md:p-16 text-center border border-reroute-teal/10">
            <div className="w-16 h-16 bg-reroute-teal text-white rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-xl">
              <MessageSquare size={32} />
            </div>
            <h3 className="text-3xl font-black text-gray-900 mb-4">Still have questions?</h3>
            <p className="text-gray-500 max-w-xl mx-auto mb-10">
              If you couldn't find the answer you were looking for, our friendly support team is ready to assist you 24/7.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gray-900 text-white font-black py-4 px-10 rounded-xl hover:bg-black transition-all shadow-lg transform hover:scale-105 active:scale-95">
                Chat with Us
              </button>
              <button className="bg-white text-gray-900 font-black py-4 px-10 rounded-xl border border-gray-200 hover:bg-gray-50 transition-all shadow-lg transform hover:scale-105 active:scale-95">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQDetails;
