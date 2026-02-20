import React from 'react';
import { FaWifi, FaSnowflake, FaCoffee, FaBuilding, FaBath, FaCar, FaConciergeBell, FaTaxi, FaMoneyCheckAlt } from "react-icons/fa";


const OurServices = () => {
    return (
        <section className="relative py-20 px-6 md:px-12 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
            <div className="max-w-7xl mx-auto relative">
                {/* Section Title */}
                <h2 className="text-4xl sm:text-5xl font-bold text-center text-white mb-16">
                    Our Premium Services
                </h2>

                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {[
                        { icon: <FaBuilding className="text-indigo-400 mx-auto mb-3 text-5xl" />, title: "Conference Room", desc: "Fully equipped conference halls for meetings and events." },
                        { icon: <FaWifi className="text-indigo-400 mx-auto mb-3 text-5xl" />, title: "Wi-Fi", desc: "High-speed internet available in all rooms and common areas." },
                        { icon: <FaSnowflake className="text-indigo-400 mx-auto mb-3 text-5xl" />, title: "AC Rooms", desc: "Comfortable air-conditioned rooms for a perfect stay." },
                        { icon: <FaCoffee className="text-indigo-400 mx-auto mb-3 text-5xl" />, title: "Complimentary Breakfast", desc: "Start your day with a variety of delicious options." },
                        { icon: <FaBath className="text-indigo-400 mx-auto mb-3 text-5xl" />, title: "Hot Water", desc: "All rooms have instant hot water for showers and baths." },
                        { icon: <FaCar className="text-indigo-400 mx-auto mb-3 text-5xl" />, title: "Car Parking", desc: "Secure parking spaces available for all guests." },
                        { icon: <FaConciergeBell className="text-indigo-400 mx-auto mb-3 text-5xl" />, title: "24/7 Service", desc: "Our staff is available around the clock for your convenience." },
                        { icon: <FaMoneyCheckAlt className="text-indigo-400 mx-auto mb-3 text-5xl" />, title: "ATM Booths", desc: "Access banking services within the hotel premises." },
                        { icon: <FaCoffee className="text-indigo-400 mx-auto mb-3 text-5xl" />, title: "Laundry Service", desc: "Quick and reliable laundry service for guests." },
                    ].map((service, idx) => (
                        <div
                            key={idx}
                            className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-tl-[60px] sm:rounded-tl-[80px] rounded-br-[60px] sm:rounded-br-[80px] p-6 flex flex-col justify-between items-center text-center hover:scale-105 hover:shadow-white/20 transition-transform duration-500"
                        >
                            {service.icon}
                            <div>
                                <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-2">{service.title}</h3>
                                <p className="text-gray-300">{service.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurServices;