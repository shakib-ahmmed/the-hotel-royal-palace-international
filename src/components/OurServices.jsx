import React from 'react';

const OurServices = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto relative">
                {/* Section Title */}
                <h2 className="text-4xl sm:text-5xl font-bold text-center text-white mb-16">
                    Our Premium Services
                </h2>

                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {[
                        { title: "Conference Room", desc: "Fully equipped conference halls for meetings and events." },
                        { title: "Wi-Fi", desc: "High-speed internet available in all rooms and common areas." },
                        { title: "AC Rooms", desc: "Comfortable air-conditioned rooms for a perfect stay." },
                        { title: "Complimentary Breakfast", desc: "Start your day with a variety of delicious options." },
                        { title: "Laundry Service", desc: "Quick and reliable laundry service for guests." },
                        { title: "Car Parking", desc: "Secure parking spaces available for all guests." },
                        { title: "24/7 Service", desc: "Our staff is available around the clock for your convenience." },
                        { title: "Car Service", desc: "Arrange transportation easily during your stay." },
                        { title: "ATM Booths", desc: "Access banking services within the hotel premises." },
                        { title: "Hot Water", desc: "All rooms have instant hot water for showers and baths." },
                    ].map((service, idx) => (
                        <div
                            key={idx}
                            className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-tl-[60px] sm:rounded-tl-[80px] rounded-br-[60px] sm:rounded-br-[80px] p-6 flex flex-col justify-between items-center text-center hover:scale-105 hover:shadow-white/20 transition-transform duration-500"
                        >
                            <div className="mb-4">
                                <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-2">{service.title}</h3>
                                <p className="text-gray-300">{service.desc}</p>
                            </div>
                            {/* Optional icon placeholder */}
                            <div className="mt-4 text-4xl text-indigo-400">✨</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurServices;