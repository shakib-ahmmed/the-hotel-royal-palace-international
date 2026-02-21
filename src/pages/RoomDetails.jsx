import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
    FaBuilding,
    FaWifi,
    FaSnowflake,
    FaCoffee,
    FaBath,
    FaCar,
    FaConciergeBell,
    FaMoneyCheckAlt,
    FaWhatsapp
} from "react-icons/fa";

const WHATSAPP_NUMBER = "8801312695937";

const rooms = [
    {
        id: 1,
        name: "Deluxe Room",
        price: 2500,
        images: ["/Deluxe.JPG", "/Deluxe.JPG", "/Deluxe.JPG"],
        description:
            "Spacious deluxe room with balcony, AC, free WiFi and breakfast included.",
        bed: "1 King Bed",
        guests: "1 Adult",
    },
    {
        id: 2,
        name: "Modern King",
        price: 4000,
        images: ["/Modern_King.JPG", "/Modern_King.JPG", "/Modern_King.JPG"],
        description:
            "Modern luxury king room with city view and premium interior.",
        bed: "2 King Bed",
        guests: "2-3 Adults",
    },
    {
        id: 3,
        name: "Modern Queen",
        price: 5000,
        images: ["/Modern-Queen.jpg", "/Modern-Queen.jpg", "/Modern-Queen.jpg"],
        description:
            "Premium queen room with elegant lighting and workspace.",
        bed: "2 Queen Bed",
        guests: "4 Adults",
    },
    {
        id: 4,
        name: "Couple Deluxe",
        price: 3500,
        images: ["/Couple-Deluxe.JPG", "/Couple-Deluxe.JPG", "/Couple-Deluxe.JPG"],
        description:
            "Romantic couple suite with decorative lighting and breakfast.",
        bed: "1 King Bed",
        guests: "2 Adults",
    },
];

const services = [
    { icon: <FaBuilding />, title: "Conference Room" },
    { icon: <FaWifi />, title: "Wi-Fi" },
    { icon: <FaSnowflake />, title: "AC Rooms" },
    { icon: <FaCoffee />, title: "Complimentary Breakfast" },
    { icon: <FaBath />, title: "Hot Water" },
    { icon: <FaCar />, title: "Car Parking" },
    { icon: <FaConciergeBell />, title: "24/7 Service" },
    { icon: <FaMoneyCheckAlt />, title: "ATM Booths" },
    { icon: <FaCoffee />, title: "Laundry Service" },
];

const RoomDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const room = rooms.find((r) => r.id === parseInt(id));
    const [currentImage, setCurrentImage] = useState(0);

    if (!room) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-black text-white text-2xl">
                Room Not Found
            </div>
        );
    }

    const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=Hello, I want to book ${room.name}`;

    return (
        <section className="min-h-screen bg-black text-white px-4 py-16">
            <div className="max-w-7xl mx-auto">

                {/* Back */}
                <button
                    onClick={() => navigate(-1)}
                    className="text-gray-400 hover:text-yellow-400 transition mb-8"
                >
                    ← Back
                </button>

                {/* HERO SECTION */}
                <div className="grid lg:grid-cols-2 gap-14 items-center">

                    {/* Image Gallery */}
                    <div>
                        <div className="relative group">
                            <img
                                src={room.images[currentImage]}
                                className="w-full h-[400px] md:h-[500px] object-cover rounded-3xl shadow-2xl"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-3xl"></div>
                        </div>

                        <div className="flex gap-4 mt-6 flex-wrap justify-center">
                            {room.images.map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    onClick={() => setCurrentImage(index)}
                                    className={`w-24 h-20 object-cover rounded-xl cursor-pointer transition ${currentImage === index
                                        ? "ring-2 ring-yellow-400"
                                        : "opacity-70 hover:opacity-100"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Room Info */}
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-6">
                            {room.name}
                        </h1>

                        <p className="text-gray-300 leading-relaxed mb-6">
                            {room.description}
                        </p>

                        <div className="space-y-3 text-lg mb-8">
                            <p><strong>Bed:</strong> {room.bed}</p>
                            <p><strong>Guests:</strong> {room.guests}</p>
                            <p className="text-3xl font-semibold text-yellow-400">
                                {room.price} BDT / night
                            </p>
                        </div>

                        {/* WhatsApp Booking Button */}
                        <a
                            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello, I want to book ${room.name}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-8 py-4 rounded-full 
               bg-green-500 hover:bg-green-600 transition 
               text-white font-semibold shadow-lg text-lg"
                        >
                            <FaWhatsapp size={22} />
                            Book Now
                        </a>
                    </div>
                </div>

                {/* SERVICES */}
                <div className="mt-24">
                    <h2 className="text-3xl font-bold text-center text-yellow-400 mb-12">
                        Premium Services
                    </h2>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-gradient-to-br from-gray-900 to-black 
                                border border-yellow-500/20 p-8 rounded-2xl 
                                text-center hover:scale-105 transition duration-300"
                            >
                                <div className="text-yellow-400 text-5xl mb-5 flex justify-center">
                                    {service.icon}
                                </div>
                                <h3 className="font-semibold text-lg">
                                    {service.title}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>

                {/* BOOKING FORM AT BOTTOM */}
                <div className="mt-28 max-w-3xl mx-auto bg-gradient-to-br from-gray-900 to-black border border-yellow-500/20 rounded-3xl p-10 shadow-xl">
                    <h2 className="text-3xl font-bold text-yellow-400 mb-8 text-center">
                        Reserve Your Stay
                    </h2>

                    <form className="grid md:grid-cols-2 gap-6">
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="p-4 rounded-xl bg-black border border-gray-700 focus:border-yellow-500 outline-none"
                            required
                        />
                        <input
                            type="number"
                            placeholder="Number of Guests"
                            className="p-4 rounded-xl bg-black border border-gray-700 focus:border-yellow-500 outline-none"
                            required
                        />
                        <input
                            type="date"
                            className="p-4 rounded-xl bg-black border border-gray-700 focus:border-yellow-500 outline-none"
                            required
                        />
                        <input
                            type="date"
                            className="p-4 rounded-xl bg-black border border-gray-700 focus:border-yellow-500 outline-none"
                            required
                        />

                        <button
                            type="submit"
                            className="md:col-span-2 py-4 rounded-full font-semibold text-lg
                            bg-gradient-to-r from-yellow-500 via-yellow-400 to-amber-600 
                            text-black hover:shadow-yellow-500/60 transition"
                        >
                            Confirm Booking 👑
                        </button>
                    </form>
                </div>

            </div>
        </section>
    );
};

export default RoomDetails;