import React, { useEffect, useState } from "react";

const rooms = [
    {
        id: 1,
        name: "Deluxe Ocean Room",
        price: "$320 / night",
        image:
            "https://images.unsplash.com/photo-1590490360182-c33d57733427",
    },
    {
        id: 2,
        name: "Royal Suite",
        price: "$550 / night",
        image:
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
    },
    {
        id: 3,
        name: "Executive Room",
        price: "$280 / night",
        image:
            "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
    },
    {
        id: 4,
        name: "Presidential Suite",
        price: "$1200 / night",
        image:
            "https://images.unsplash.com/photo-1578683010236-d716f9a3f461",
    },
];

const OurRooms = () => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true); // pop animation on refresh
    }, []);

    return (
        <section className="relative py-28 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative">

                {/* Title */}
                <h2 className="text-5xl font-bold text-center text-white mb-24">
                    Our Luxury Rooms
                </h2>

                {/* Vertical Divider */}
                <div className="hidden md:block absolute left-1/2 top-44 bottom-16 w-[2px] bg-gradient-to-b from-transparent via-white to-transparent opacity-30 transform -translate-x-1/2"></div>

                <div className="grid md:grid-cols-2 gap-24">

                    {/* LEFT SIDE */}
                    <div className="space-y-20">
                        {rooms.slice(0, 2).map((room) => (
                            <div
                                key={room.id}
                                className={`transition-all duration-700 ${animate
                                    ? "translate-x-0 scale-100 opacity-100"
                                    : "-translate-x-40 scale-90 opacity-0"
                                    }`}
                            >
                                <div className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl overflow-hidden 
                                rounded-tl-[120px] rounded-br-[120px] 
                                hover:scale-105 hover:shadow-white/20 
                                transition-all duration-500">

                                    <img
                                        src={room.image}
                                        alt={room.name}
                                        className="h-[420px] w-full object-cover opacity-90"
                                    />

                                    <div className="p-10 text-white">
                                        <h3 className="text-3xl font-semibold mb-3">
                                            {room.name}
                                        </h3>
                                        <p className="text-gray-300 text-xl mb-6">
                                            {room.price}
                                        </p>
                                        <button className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition">
                                            Explore Room
                                        </button>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="space-y-20">
                        {rooms.slice(2, 4).map((room) => (
                            <div
                                key={room.id}
                                className={`transition-all duration-700 ${animate
                                    ? "translate-x-0 scale-100 opacity-100"
                                    : "translate-x-40 scale-90 opacity-0"
                                    }`}
                            >
                                <div className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl overflow-hidden 
                                rounded-tr-[120px] rounded-bl-[120px] 
                                hover:scale-105 hover:shadow-white/20 
                                transition-all duration-500">

                                    <img
                                        src={room.image}
                                        alt={room.name}
                                        className="h-[420px] w-full object-cover opacity-90"
                                    />

                                    <div className="p-10 text-white">
                                        <h3 className="text-3xl font-semibold mb-3">
                                            {room.name}
                                        </h3>
                                        <p className="text-gray-300 text-xl mb-6">
                                            {room.price}
                                        </p>
                                        <button className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition">
                                            Explore Room
                                        </button>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default OurRooms;