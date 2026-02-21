import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const rooms = [
    {
        id: 1,
        name: "Deluxe Room",
        price: "2,500BDT / night",
        image:
            "/Deluxe.JPG",
    },
    {
        id: 2,
        name: "Modern King",
        price: "4,0000BDT/ night",
        image:
            "/Modern_King.JPG",
    },
    {
        id: 3,
        name: "Modern Queen",
        price: "5,000BDT / night",
        image:
            "/Modern-Queen.jpg",
    },
    {
        id: 4,
        name: "Couple Deluxe",
        price: "3,500BDT / night",
        image:
            "/Couple-Deluxe.JPG",
    },
];

const OurRooms = () => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
    }, []);

    const navigate = useNavigate();
    return (
        <section className="relative py-20 md:py-28 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* Title */}
                <h2 className="text-4xl sm:text-5xl font-bold text-center text-white mb-16 sm:mb-24">
                    Our Luxury Rooms
                </h2>

                <div className="hidden lg:block absolute left-1/2 top-32 bottom-16 w-[2px] bg-gradient-to-b from-transparent via-white to-transparent opacity-30 transform -translate-x-1/2"></div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                    {/* LEFT SIDE */}
                    <div className="space-y-16 lg:space-y-20">
                        {rooms.slice(0, 2).map((room) => (
                            <div
                                key={room.id}
                                className={`transition-all duration-700 ${animate
                                    ? "translate-x-0 scale-100 opacity-100"
                                    : "-translate-x-20 sm:-translate-x-40 scale-90 opacity-0"
                                    }`}
                            >
                                <div className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl overflow-hidden 
                                    rounded-tl-[60px] sm:rounded-tl-[120px] rounded-br-[60px] sm:rounded-br-[120px] 
                                    hover:scale-105 hover:shadow-white/20 
                                    transition-all duration-500">
                                    <img
                                        src={room.image}
                                        alt={room.name}
                                        className="h-64 sm:h-[420px] w-full object-cover opacity-90"
                                    />
                                    <div className="p-6 sm:p-10 text-white">
                                        <h3 className="text-2xl sm:text-3xl font-semibold mb-2 sm:mb-3">
                                            {room.name}
                                        </h3>
                                        <p className="text-gray-300 text-lg sm:text-xl mb-4 sm:mb-6">
                                            {room.price}
                                        </p>
                                        <button
                                            onClick={() => navigate(`/roomdetails/${room.id}`)}
                                            className="group relative px-8 py-3 font-semibold rounded-full 
    bg-gradient-to-r from-yellow-500 via-yellow-400 to-amber-600 
    text-black tracking-wide 
    shadow-lg shadow-yellow-600/40
    hover:shadow-yellow-500/70
    transition-all duration-500 
    overflow-hidden w-full sm:w-auto"
                                        >
                                            <span className="relative z-10 flex items-center gap-2">
                                                Explore Room
                                                <span className="group-hover:translate-x-1 transition duration-300">→</span>
                                            </span>

                                            <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="space-y-16 lg:space-y-20">
                        {rooms.slice(2, 4).map((room) => (
                            <div
                                key={room.id}
                                className={`transition-all duration-700 ${animate
                                    ? "translate-x-0 scale-100 opacity-100"
                                    : "translate-x-20 sm:translate-x-40 scale-90 opacity-0"
                                    }`}
                            >
                                <div className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl overflow-hidden 
                                    rounded-tr-[60px] sm:rounded-tr-[120px] rounded-bl-[60px] sm:rounded-bl-[120px] 
                                    hover:scale-105 hover:shadow-white/20 
                                    transition-all duration-500">
                                    <img
                                        src={room.image}
                                        alt={room.name}
                                        className="h-64 sm:h-[420px] w-full object-cover opacity-90"
                                    />
                                    <div className="p-6 sm:p-10 text-white">
                                        <h3 className="text-2xl sm:text-3xl font-semibold mb-2 sm:mb-3">
                                            {room.name}
                                        </h3>
                                        <p className="text-gray-300 text-lg sm:text-xl mb-4 sm:mb-6">
                                            {room.price}
                                        </p>
                                        <button
                                            onClick={() => navigate(`/roomdetails/${room.id}`)}
                                            className="group relative px-8 py-3 font-semibold rounded-full 
    bg-gradient-to-r from-yellow-500 via-yellow-400 to-amber-600 
    text-black tracking-wide 
    shadow-lg shadow-yellow-600/40
    hover:shadow-yellow-500/70
    transition-all duration-500 
    overflow-hidden w-full sm:w-auto"
                                        >
                                            <span className="relative z-10 flex items-center gap-2">
                                                Explore Room
                                                <span className="group-hover:translate-x-1 transition duration-300">→</span>
                                            </span>

                                            <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
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