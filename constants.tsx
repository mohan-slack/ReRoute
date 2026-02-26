
import React from 'react';
import { Vehicle } from './types';
import { ShieldCheck, Clock, MapPin, BadgeCheck } from 'lucide-react';

export const SOUTH_INDIAN_CITIES = [
  "Bangalore, Karnataka", "Chennai, Tamil Nadu", "Hyderabad, Telangana", "Kochi, Kerala", 
  "Mysore, Karnataka", "Coimbatore, Tamil Nadu", "Mangalore, Karnataka", "Thiruvananthapuram, Kerala", 
  "Madurai, Tamil Nadu", "Visakhapatnam, Andhra Pradesh", "Vijayawada, Andhra Pradesh", "Hubli-Dharwad, Karnataka", 
  "Tiruchirappalli, Tamil Nadu", "Kozhikode, Kerala", "Salem, Tamil Nadu", "Warangal, Telangana", 
  "Vellore, Tamil Nadu", "Pondicherry", "Nellore, Andhra Pradesh", "Kurnool, Andhra Pradesh", "Belgaum, Karnataka", 
  "Tirupati, Andhra Pradesh", "Shimoga, Karnataka", "Gulbarga, Karnataka", "Erode, Tamil Nadu", "Tiruppur, Tamil Nadu",
  "Udupi, Karnataka", "Hampi, Karnataka", "Ooty, Tamil Nadu", "Kodaikanal, Tamil Nadu", "Munnar, Kerala", "Alleppey, Kerala"
];

export const SOUTH_INDIAN_AIRPORTS = [
  "Bangalore Int'l Airport (BLR)", "Chennai Int'l Airport (MAA)", "Hyderabad Int'l Airport (HYD)", 
  "Kochi Int'l Airport (COK)", "Coimbatore Airport (CJB)", "Mangalore Airport (IXE)", 
  "Trivandrum Int'l Airport (TRV)", "Calicut Int'l Airport (CCJ)", "Tiruchirappalli Airport (TRZ)", 
  "Madurai Airport (IXM)", "Visakhapatnam Airport (VTZ)", "Vijayawada Airport (VGA)",
  "Tirupati Airport (TIR)", "Hubli Airport (HBX)", "Kannur Int'l Airport (CNN)", "Mysore Airport (MYQ)"
];

export const VEHICLES: Vehicle[] = [
  // HATCHBACKS
  {
    id: 'h1',
    name: 'Tata Tiago',
    type: 'Hatchback',
    seats: 4,
    pricePerKm: 9,
    basePrice: 1200,
    image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=800',
    features: ['AC', 'GPS', 'Compact'],
    description: 'Perfect for solo travelers or small families on a budget.'
  },
  {
    id: 'h2',
    name: 'Maruti Swift',
    type: 'Hatchback',
    seats: 4,
    pricePerKm: 10,
    basePrice: 1400,
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=800',
    features: ['AC', 'Music System', 'City Expert'],
    description: 'The iconic Indian hatchback, reliable and nimble in traffic.'
  },
  {
    id: 'h3',
    name: 'Hyundai i20',
    type: 'Hatchback',
    seats: 4,
    pricePerKm: 11,
    basePrice: 1500,
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&q=80&w=800',
    features: ['Premium Audio', 'Spacious Cabin', 'AC'],
    description: 'A premium hatchback experience with superior comfort.'
  },
  {
    id: 'h4',
    name: 'Maruti Baleno',
    type: 'Hatchback',
    seats: 4,
    pricePerKm: 10,
    basePrice: 1450,
    image: 'https://images.unsplash.com/photo-1621067219504-f7614e57842e?auto=format&fit=crop&q=80&w=800',
    features: ['Large Boot', 'Fuel Efficient', 'AC'],
    description: 'Spacious and sophisticated, ideal for airport runs.'
  },

  // SEDANS
  {
    id: 's1',
    name: 'Maruti Dzire',
    type: 'Sedan',
    seats: 4,
    pricePerKm: 12,
    basePrice: 1800,
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800',
    features: ['Extra Legroom', 'Boot Space', 'AC'],
    description: 'The preferred choice for intercity one-way drops.'
  },
  {
    id: 's2',
    name: 'Hyundai Aura',
    type: 'Sedan',
    seats: 4,
    pricePerKm: 12,
    basePrice: 1750,
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800',
    features: ['Modern Interiors', 'Smooth Ride', 'AC'],
    description: 'A stylish sedan for corporate commutes and city tours.'
  },
  {
    id: 's3',
    name: 'Honda City',
    type: 'Sedan',
    seats: 4,
    pricePerKm: 15,
    basePrice: 2200,
    image: 'https://images.unsplash.com/photo-1620211105995-18e381ec3843?auto=format&fit=crop&q=80&w=800',
    features: ['Sunroof', 'Leather Seats', 'Quiet Cabin'],
    description: 'Executive class comfort for the discerning traveler.'
  },
  {
    id: 'l4_sedan',
    name: 'Skoda Slavia',
    type: 'Sedan',
    seats: 4,
    pricePerKm: 16,
    basePrice: 2500,
    image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&q=80&w=800',
    features: ['European Safety', 'Solid Build', 'Large Boot'],
    description: 'European engineering for a safe and sturdy road trip.'
  },

  // SUVS / MUVS
  {
    id: 'm1',
    name: 'Maruti Ertiga',
    type: 'SUV',
    seats: 6,
    pricePerKm: 16,
    basePrice: 2800,
    image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&q=80&w=800',
    features: ['Value for Money', 'Dual AC', 'Hybrid'],
    description: 'The perfect companion for medium-sized family groups.'
  },
  {
    id: 'm2',
    name: 'Toyota Innova Crysta',
    type: 'SUV',
    seats: 7,
    pricePerKm: 22,
    basePrice: 3500,
    image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&q=80&w=800',
    features: ['Captain Seats', 'Legendary Comfort', 'Robust'],
    description: 'The gold standard of MUVs in India. Pure highway bliss.'
  },
  {
    id: 'm3',
    name: 'Toyota Innova Hycross',
    type: 'SUV',
    seats: 7,
    pricePerKm: 25,
    basePrice: 4000,
    image: 'https://images.unsplash.com/photo-1626013233379-3893c5be1881?auto=format&fit=crop&q=80&w=800',
    features: ['Hybrid Tech', 'Ottoman Seats', 'Panoramic Sunroof'],
    description: 'The future of premium family travel. Silent and luxurious.'
  },

  // LUXURY
  {
    id: 'l1',
    name: 'Mercedes-Benz E-Class',
    type: 'Luxury',
    seats: 4,
    pricePerKm: 65,
    basePrice: 12000,
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=800',
    features: ['Rear Seat Luxury', 'Soft Close Doors', 'Burmester Sound'],
    description: 'The quintessential luxury sedan for corporate leaders.'
  },
  {
    id: 'l4',
    name: 'Mercedes-Benz S-Class',
    type: 'Luxury',
    seats: 4,
    pricePerKm: 150,
    basePrice: 25000,
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800',
    features: ['First Class Seating', 'Massage Seats', 'Privacy Blinds'],
    description: 'The best car in the world. Unparalleled luxury for VIPs.'
  },

  // SPECIAL
  {
    id: 't1',
    name: 'Force Tempo Traveller',
    type: 'Tempo Traveller',
    seats: 12,
    pricePerKm: 28,
    basePrice: 5500,
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800',
    features: ['Pushback Seats', 'Individual AC', 'Music System'],
    description: 'Ideal for group tours, weddings, and large family outings.'
  }
];

export const TRUST_FACTORS = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-yellow-500" />,
    title: 'Clean & Sanitized Cabs',
    desc: 'Regular sanitization and deep cleaning of vehicles after every ride.'
  },
  {
    icon: <Clock className="w-8 h-8 text-yellow-500" />,
    title: 'On-time Every Time',
    desc: 'Punctual service for all your airport and outstation travel needs.'
  },
  {
    icon: <BadgeCheck className="w-8 h-8 text-yellow-500" />,
    title: 'Expert Chauffeurs',
    desc: 'Experienced drivers who know the best routes and local insights.'
  },
  {
    icon: <MapPin className="w-8 h-8 text-yellow-500" />,
    title: 'Wide Network',
    desc: 'Present in 2000+ cities with over 5 lakh routes across India.'
  }
];
