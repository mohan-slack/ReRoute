
import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Anjali Sharma",
    useCase: "Family Road Trip",
    text: "Our trip to Manali was seamless. The driver was incredibly patient with the kids and knew all the best scenic spots for photos!",
    rating: 5,
    image: "https://i.pravatar.cc/100?img=32"
  },
  {
    name: "Vikram Mehta",
    useCase: "Business Travel",
    text: "Punctuality is everything for my meetings. ReRoute's corporate service consistently delivers professional chauffeurs and pristine cars.",
    rating: 5,
    image: "https://i.pravatar.cc/100?img=12"
  },
  {
    name: "Priya Iyer",
    useCase: "Airport Transfer",
    text: "Landed at 2 AM and my driver was already there with a placard. The flight tracking feature is a lifesaver for late-night arrivals.",
    rating: 5,
    image: "https://i.pravatar.cc/100?img=44"
  },
  {
    name: "Rahul Khanna",
    useCase: "Local City Ride",
    text: "Perfect for a day of errands. Having a dedicated car for 8 hours saved me the hassle of booking 5 different taxis in Bangalore traffic.",
    rating: 4,
    image: "https://i.pravatar.cc/100?img=15"
  },
  {
    name: "Sneha Kapoor",
    useCase: "Weekend Outstation",
    text: "Booked a round-trip to Jaipur and was impressed by the transparent billing. No hidden charges and a very comfortable SUV for the group.",
    rating: 5,
    image: "https://i.pravatar.cc/100?img=26"
  },
  {
    name: "Arjun Das",
    useCase: "Repeat Customer",
    text: "I've used ReRoute for 10+ trips now. Their commitment to clean vehicles and friendly drivers makes them my go-to choice every single time.",
    rating: 5,
    image: "https://i.pravatar.cc/100?img=68"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-reroute-teal font-semibold tracking-wide uppercase">Testimonials</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Trusted by Thousands of Travelers
          </p>
          <div className="mt-4 max-w-2xl mx-auto h-1 bg-reroute-teal rounded-full w-24"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div 
              key={idx} 
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col hover:shadow-md transition-shadow relative group"
            >
              <div className="absolute top-6 right-8 text-reroute-light group-hover:text-reroute-teal/10 transition-colors">
                <Quote size={48} />
              </div>
              
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    className={i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-200"} 
                  />
                ))}
              </div>

              <p className="text-gray-600 italic mb-8 leading-relaxed flex-grow">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-gray-50">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-reroute-teal font-bold uppercase tracking-widest">{testimonial.useCase}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
