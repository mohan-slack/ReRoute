
export enum TripType {
  OUTSTATION_ROUND = 'OUTSTATION_ROUND',
  OUTSTATION_ONEWAY = 'OUTSTATION_ONEWAY',
  LOCAL = 'LOCAL',
  AIRPORT = 'AIRPORT'
}

export type AirportTripSubtype = 'PICKUP' | 'DROP';

export type LocalPackage = '4hrs_40km' | '8hrs_80km' | '12hrs_120km';

export interface BookingDetails {
  from: string;
  to: string;
  pickupDate: string;
  pickupTime: string;
  returnDate?: string;
  tripType: TripType;
  airportTripSubtype?: AirportTripSubtype;
  pickupAddress?: string;
  localPackage?: LocalPackage;
}

export interface User {
  phone: string;
  name?: string;
}

export type VehicleCategory = 'Hatchback' | 'Sedan' | 'SUV' | 'Luxury' | 'Tempo Traveller';

export interface Vehicle {
  id: string;
  name: string;
  type: VehicleCategory;
  seats: number;
  pricePerKm: number;
  basePrice: number;
  image: string;
  features: string[];
  description: string;
}

export interface BookingRecord {
  id: string;
  tripType: TripType;
  from: string;
  to: string;
  date: string;
  time: string;
  vehicleName: string;
  status: 'Upcoming' | 'Completed' | 'Cancelled';
  price: number;
}
