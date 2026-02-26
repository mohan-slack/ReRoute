
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureCards from './components/FeatureCards';
import Services from './components/Services';
import Fleet from './components/Fleet';
import FleetPage from './components/FleetPage';
import WhyChooseUs from './components/WhyChooseUs';
import TrustBlock from './components/TrustBlock';
import OutstationDetails from './components/OutstationDetails';
import OneWayDetails from './components/OneWayDetails';
import LocalDetails from './components/LocalDetails';
import AirportDetails from './components/AirportDetails';
import CorporateDetails from './components/CorporateDetails';
import FAQDetails from './components/FAQDetails';
import CancellationPolicy from './components/CancellationPolicy';
import CityLanding from './components/CityLanding';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';
import AuthModal from './components/AuthModal';
import MyBookings from './components/MyBookings';
import ProfileSettings from './components/ProfileSettings';
import PriceCalculator from './components/PriceCalculator';
import CabListing from './components/CabListing';
import Checkout from './components/Checkout';
import BookingConfirmation from './components/BookingConfirmation';
import { BookingDetails, TripType, User } from './types';

export type ViewType = 
  | 'home' | 'outstation' | 'oneway' | 'local' | 'airport' | 'corporate' | 'faq' | 'cancellation' | 'fleet' | 'bookings' | 'profile'
  | 'bangalore' | 'delhi' | 'mumbai' | 'hyderabad' | 'kolkata' | 'chennai' | 'ahmedabad' | 'goa' | 'results' | 'checkout' | 'confirmation';

const SEO_CONFIG: Record<ViewType, { title: string; description: string }> = {
  home: { title: 'ReRoute | Premium Taxi Booking', description: 'Book reliable cabs with ReRoute.' },
  outstation: { title: 'Outstation Cabs | ReRoute', description: 'Intercity travel with ReRoute.' },
  oneway: { title: 'One-Way Drops | ReRoute', description: 'Save on intercity drops.' },
  local: { title: 'Local Car Rental | ReRoute', description: 'Hourly city rentals.' },
  airport: { title: 'Airport Taxi | ReRoute', description: 'Punctual airport transfers.' },
  corporate: { title: 'Corporate Rental | ReRoute', description: 'Enterprise mobility solutions.' },
  faq: { title: 'FAQs | ReRoute', description: 'Service questions answered.' },
  cancellation: { title: 'Policies | ReRoute', description: 'Cancellation and refund rules.' },
  fleet: { title: 'Our Fleet | ReRoute', description: 'Explore our cars.' },
  bookings: { title: 'My Bookings | ReRoute', description: 'Manage your trips.' },
  profile: { title: 'My Profile | ReRoute', description: 'Update your account details.' },
  bangalore: { title: 'Car Rental in Bangalore | ReRoute', description: 'Taxi service in Bangalore.' },
  delhi: { title: 'Car Rental in Delhi | ReRoute', description: 'Taxi service in Delhi.' },
  mumbai: { title: 'Car Rental in Mumbai | ReRoute', description: 'Taxi service in Mumbai.' },
  hyderabad: { title: 'Car Rental in Hyderabad | ReRoute', description: 'Taxi service in Hyderabad.' },
  kolkata: { title: 'Car Rental in Kolkata | ReRoute', description: 'Taxi service in Kolkata.' },
  chennai: { title: 'Car Rental in Chennai | ReRoute', description: 'Taxi service in Chennai.' },
  ahmedabad: { title: 'Car Rental in Ahmedabad | ReRoute', description: 'Taxi service in Ahmedabad.' },
  goa: { title: 'Car Rental in Goa | ReRoute', description: 'Taxi service in Goa.' },
  results: { title: 'Available Cabs | ReRoute', description: 'Select your premium ride.' },
  checkout: { title: 'Secure Checkout | ReRoute', description: 'Finalize your premium booking.' },
  confirmation: { title: 'Booking Successful | ReRoute', description: 'Your ride is scheduled.' }
};

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [selectedCabId, setSelectedCabId] = useState<string | null>(null);
  const [booking, setBooking] = useState<BookingDetails>({
    from: '',
    to: '',
    pickupDate: '',
    pickupTime: '',
    returnDate: '',
    pickupAddress: '',
    airportTripSubtype: 'DROP',
    tripType: TripType.OUTSTATION_ROUND
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = SEO_CONFIG[currentView]?.title || 'ReRoute';
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', SEO_CONFIG[currentView]?.description || '');
  }, [currentView]);

  const handleBookingUpdate = (newDetails: Partial<BookingDetails>) => {
    setBooking(prev => ({ ...prev, ...newDetails }));
  };

  const navigateTo = (view: ViewType) => {
    setCurrentView(view);
  };

  const handleExplore = () => {
    // Specific validation per trip type
    switch (booking.tripType) {
      case TripType.LOCAL:
        if (!booking.from) {
          alert("Please select a City for your local rental.");
          return;
        }
        break;
      case TripType.AIRPORT:
        if (!booking.pickupAddress || !booking.to) {
          alert("Please provide both your Address and the Airport name.");
          return;
        }
        break;
      case TripType.OUTSTATION_ONEWAY:
      case TripType.OUTSTATION_ROUND:
        if (!booking.from || !booking.to) {
          alert("Please provide both Pickup and Drop locations for Outstation travel.");
          return;
        }
        break;
    }

    if (!booking.pickupDate || !booking.pickupTime) {
      alert("Please select a Pickup Date and Time.");
      return;
    }

    setCurrentView('results');
  };

  const handleCabSelect = (cabId: string) => {
    setSelectedCabId(cabId);
    if (!user) {
      setIsAuthModalOpen(true);
      return;
    }
    setCurrentView('checkout');
  };

  const handleLogin = (phone: string) => {
    const savedProfile = localStorage.getItem(`profile_${phone}`);
    const newUser = savedProfile ? JSON.parse(savedProfile) : { phone };
    setUser(newUser);
    setIsAuthModalOpen(false);
    
    // If user was in the middle of selecting a cab, take them to checkout
    if (selectedCabId && currentView === 'results') {
      setCurrentView('checkout');
    }
  };

  const handleProfileUpdate = (updatedUser: User) => {
    setUser(updatedUser);
    localStorage.setItem(`profile_${updatedUser.phone}`, JSON.stringify(updatedUser));
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentView('home');
  };

  const handleBookingConfirm = () => {
    setCurrentView('confirmation');
  };

  const renderContent = () => {
    switch (currentView) {
      case 'confirmation':
        return <BookingConfirmation onNavigate={navigateTo} />;
      case 'checkout':
        return (
          <Checkout 
            booking={booking} 
            cabId={selectedCabId!} 
            user={user!} 
            onBack={() => navigateTo('results')} 
            onConfirm={handleBookingConfirm}
          />
        );
      case 'results':
        return <CabListing booking={booking} onClose={() => navigateTo('home')} onSelect={handleCabSelect} />;
      case 'bookings':
        return <MyBookings onNavigate={navigateTo} />;
      case 'profile':
        return <ProfileSettings user={user!} onUpdate={handleProfileUpdate} onNavigate={navigateTo} />;
      case 'outstation':
        return <OutstationDetails onNavigate={navigateTo} />;
      case 'oneway':
        return <OneWayDetails onNavigate={navigateTo} />;
      case 'local':
        return <LocalDetails onNavigate={navigateTo} />;
      case 'airport':
        return <AirportDetails onNavigate={navigateTo} />;
      case 'corporate':
        return <CorporateDetails onNavigate={navigateTo} />;
      case 'faq':
        return <FAQDetails onNavigate={navigateTo} />;
      case 'cancellation':
        return <CancellationPolicy onNavigate={navigateTo} />;
      case 'fleet':
        return <FleetPage onNavigate={navigateTo} />;
      case 'bangalore':
      case 'delhi':
      case 'mumbai':
      case 'hyderabad':
      case 'kolkata':
      case 'chennai':
      case 'ahmedabad':
      case 'goa':
        return <CityLanding city={currentView} onNavigate={navigateTo} />;
      default:
        return (
          <>
            <Hero bookingDetails={booking} onUpdate={handleBookingUpdate} onExplore={handleExplore} />
            <FeatureCards />
            <Services onNavigate={navigateTo} />
            <PriceCalculator />
            <Fleet onNavigate={navigateTo} />
            <TrustBlock />
            <div className="bg-reroute-light">
               <WhyChooseUs />
            </div>
            <Testimonials />
            <section className="py-24 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl font-black mb-8 leading-tight">Ready to ReRoute to {booking.to || 'Your Next City'}?</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
                  Get an instant premium quote and secure your booking in seconds. 
                  Transparent pricing, always.
                </p>
                <button 
                  onClick={() => user ? handleExplore() : setIsAuthModalOpen(true)}
                  className="bg-reroute-teal hover:bg-teal-700 text-white font-black py-5 px-14 rounded-2xl shadow-2xl transition-all transform hover:scale-105 text-lg"
                >
                  {user ? 'Secure Your Ride' : 'Sign In to Book'}
                </button>
              </div>
            </section>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar 
        onNavigate={navigateTo} 
        currentView={currentView} 
        onAuthClick={() => setIsAuthModalOpen(true)}
        user={user}
        onLogout={handleLogout}
      />
      
      <main className="flex-grow">
        {renderContent()}
      </main>

      <AIAssistant destination={booking.to} />
      <Footer onNavigate={navigateTo} />

      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
        onSuccess={handleLogin}
      />
    </div>
  );
};

export default App;
