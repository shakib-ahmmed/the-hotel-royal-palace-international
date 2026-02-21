import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
    FaBuilding,
    FaWifi,
    FaSnowflake,
    FaCoffee,
    FaBath,
    FaCar,
    FaConciergeBell,
    FaMoneyCheckAlt
} from "react-icons/fa";

const rooms = [
    {
        id: 1,
        name: "Deluxe Room",
        price: 2500,
        image: "/Deluxe.JPG",
        description: "Spacious deluxe room with balcony, AC, free WiFi and breakfast included.",
        size: "350 sq ft",
        bed: "1 King Bed",
        guests: "2 Adults",
    },
    {
        id: 2,
        name: "Modern King",
        price: 4000,
        image: "/Modern_King.JPG",
        description: "Modern luxury king room with city view and premium interior.",
        size: "450 sq ft",
        bed: "1 King Bed",
        guests: "2-3 Adults",
    },
    {
        id: 3,
        name: "Modern Queen",
        price: 5000,
        image: "/Modern-Queen.jpg",
        description: "Premium queen room with elegant lighting and workspace.",
        size: "500 sq ft",
        bed: "1 Queen Bed",
        guests: "2 Adults",
    },
    {
        id: 4,
        name: "Couple Deluxe",
        price: 3500,
        image: "/Couple-Deluxe.JPG",
        description: "Romantic couple suite with decorative lighting and breakfast.",
        size: "400 sq ft",
        bed: "1 King Bed",
        guests: "2 Adults",
    },
];

const services = [
    { icon: <FaBuilding />, title: "Conference Room", desc: "Fully equipped conference halls for meetings and events." },
    { icon: <FaWifi />, title: "Wi-Fi", desc: "High-speed internet available in all rooms and common areas." },
    { icon: <FaSnowflake />, title: "AC Rooms", desc: "Comfortable air-conditioned rooms for a perfect stay." },
    { icon: <FaCoffee />, title: "Complimentary Breakfast", desc: "Start your day with a variety of delicious options." },
    { icon: <FaBath />, title: "Hot Water", desc: "All rooms have instant hot water for showers and baths." },
    { icon: <FaCar />, title: "Car Parking", desc: "Secure parking spaces available for all guests." },
    { icon: <FaConciergeBell />, title: "24/7 Service", desc: "Our staff is available around the clock for your convenience." },
    { icon: <FaMoneyCheckAlt />, title: "ATM Booths", desc: "Access banking services within the hotel premises." },
];

const RoomDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const room = rooms.find((r) => r.id === parseInt(id));

    if (!room) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-black text-white text-2xl">
                Room Not Found
            </div>
        );
    }

    return (
        <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white py-20 px-4">
            <div className="max-w-6xl mx-auto">

                {/* Back Button */}
                <button
                    onClick={() => navigate(-1)}
                    className="mb-10 text-gray-400 hover:text-yellow-400 transition"
                >
                    ← Back
                </button>

                {/* Room Info Section */}
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    <img
                        src={room.image}
                        alt={room.name}
                        className="rounded-2xl shadow-2xl w-full h-[400px] object-cover border border-yellow-500/30"
                    />

                    <div>
                        <h1 className="text-4xl font-bold mb-4 text-yellow-400">
                            {room.name}
                        </h1>

                        <p className="text-gray-300 mb-6">
                            {room.description}
                        </p>

                        <div className="space-y-2 mb-6 text-lg">
                            <p><strong>Room Size:</strong> {room.size}</p>
                            <p><strong>Bed Type:</strong> {room.bed}</p>
                            <p><strong>Guests:</strong> {room.guests}</p>
                            <p className="text-2xl font-semibold text-yellow-400 mt-4">
                                {room.price} BDT / night
                            </p>
                        </div>

                        {/* Royal Gold Button */}
                        <button
                            onClick={() => alert("Booking Confirmed!")}
                            className="group relative px-8 py-3 font-semibold rounded-full 
                            bg-gradient-to-r from-yellow-500 via-yellow-400 to-amber-600 
                            text-black tracking-wide 
                            shadow-lg shadow-yellow-600/40
                            hover:shadow-yellow-500/70
                            transition-all duration-500 
                            overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Book Now →
                            </span>
                            <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
                        </button>
                    </div>
                </div>

                {/* Booking Information */}
                <div className="mt-20 backdrop-blur-lg bg-white/5 p-10 rounded-2xl border border-yellow-500/20 shadow-lg shadow-yellow-500/10">
                    <h2 className="text-3xl font-bold mb-6 text-yellow-400">
                        Booking Information
                    </h2>

                    <ul className="space-y-3 text-gray-300">
                        <li>✔ Free Cancellation within 24 hours</li>
                        <li>✔ Check-in: 2:00 PM</li>
                        <li>✔ Check-out: 12:00 PM</li>
                        <li>✔ Free High-Speed WiFi</li>
                        <li>✔ Complimentary Breakfast</li>
                        <li>✔ 24/7 Room Service</li>
                    </ul>
                </div>

                {/* Services Section */}
                <div className="mt-20">
                    <h2 className="text-3xl font-bold mb-10 text-center text-yellow-400">
                        Premium Services
                    </h2>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-white/5 border border-yellow-500/20 
                                backdrop-blur-lg rounded-2xl p-8 text-center 
                                hover:scale-105 hover:border-yellow-400 
                                transition-all duration-500 shadow-lg shadow-yellow-500/10"
                            >
                                <div className="text-yellow-400 text-5xl mb-4 flex justify-center">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-gray-400 text-sm">
                                    {service.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default RoomDetails;