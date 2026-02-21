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
    FaMoneyCheckAlt
} from "react-icons/fa";

const rooms = [
    {
        id: 1,
        name: "Deluxe Room",
        price: 2500,
        images: ["/Deluxe.JPG", "/Deluxe.JPG", "/Deluxe.JPG"],
        description: "Spacious deluxe room with balcony, AC, free WiFi and breakfast included.",
        bed: "1 King Bed",
        guests: "2 Adults",
    },
    {
        id: 2,
        name: "Modern King",
        price: 4000,
        images: ["/Modern_King.JPG", "/Modern_King.JPG", "/Modern_King.JPG"],
        description: "Modern luxury king room with city view and premium interior.",
        bed: "1 King Bed",
        guests: "2-3 Adults",
    },
    {
        id: 3,
        name: "Modern Queen",
        price: 5000,
        images: ["/Modern-Queen.jpg", "/Modern-Queen.jpg", "/Modern-Queen.jpg"],
        description: "Premium queen room with elegant lighting and workspace.",
        bed: "1 Queen Bed",
        guests: "2 Adults",
    },
    {
        id: 4,
        name: "Couple Deluxe",
        price: 3500,
        images: ["/Couple-Deluxe.JPG", "/Couple-Deluxe.JPG", "/Couple-Deluxe.JPG"],
        description: "Romantic couple suite with decorative lighting and breakfast.",
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
    { icon: <FaLaundry />, title: "Laundry Service" },
];

const RoomDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const room = rooms.find((r) => r.id === parseInt(id));

    const [currentImage, setCurrentImage] = useState(0);

    const [formData, setFormData] = useState({
        name: "",
        checkIn: "",
        checkOut: "",
        guests: "",
    });

    if (!room) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-black text-white text-2xl">
                Room Not Found
            </div>
        );
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Booking Request Submitted 👑");
    };

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

                {/* IMAGE GALLERY */}
                <div className="mb-12">
                    <img
                        src={room.images[currentImage]}
                        alt=""
                        className="w-full h-[450px] object-cover rounded-2xl border border-yellow-500/30"
                    />
                    <div className="flex gap-4 mt-4 justify-center">
                        {room.images.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt=""
                                onClick={() => setCurrentImage(index)}
                                className={`w-24 h-20 object-cover rounded-lg cursor-pointer border ${currentImage === index
                                    ? "border-yellow-400"
                                    : "border-transparent"
                                    }`}
                            />
                        ))}
                    </div>
                </div>

                {/* ROOM DETAILS */}
                <div className="grid md:grid-cols-2 gap-12 mb-20">
                    <div>
                        <h1 className="text-4xl font-bold text-yellow-400 mb-4">
                            {room.name}
                        </h1>
                        <p className="text-gray-300 mb-6">{room.description}</p>

                        <div className="space-y-3 text-lg">
                            <p><strong>Bed Type:</strong> {room.bed}</p>
                            <p><strong>Guests:</strong> {room.guests}</p>
                            <p className="text-2xl text-yellow-400 font-semibold">
                                {room.price} BDT / night
                            </p>
                        </div>
                    </div>

                    {/* BOOKING FORM */}
                    <div className="bg-white/5 border border-yellow-500/20 p-8 rounded-2xl backdrop-blur-lg shadow-lg shadow-yellow-500/10">
                        <h2 className="text-2xl font-bold text-yellow-400 mb-6">
                            Book This Room
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full p-3 rounded-lg bg-black border border-gray-700"
                                required
                            />
                            <input
                                type="date"
                                className="w-full p-3 rounded-lg bg-black border border-gray-700"
                                required
                            />
                            <input
                                type="date"
                                className="w-full p-3 rounded-lg bg-black border border-gray-700"
                                required
                            />
                            <input
                                type="number"
                                placeholder="Number of Guests"
                                className="w-full p-3 rounded-lg bg-black border border-gray-700"
                                required
                            />

                            <button
                                type="submit"
                                className="w-full py-3 rounded-full font-semibold 
                                bg-gradient-to-r from-yellow-500 via-yellow-400 to-amber-600 
                                text-black hover:shadow-yellow-500/60 transition"
                            >
                                Confirm Booking 👑
                            </button>
                        </form>
                    </div>
                </div>

                {/* SERVICES */}
                <div className="mt-10">
                    <h2 className="text-3xl font-bold text-center text-yellow-400 mb-10">
                        Premium Services
                    </h2>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-white/5 border border-yellow-500/20 
                                rounded-2xl p-8 text-center hover:scale-105 
                                transition-all duration-500"
                            >
                                <div className="text-yellow-400 text-5xl mb-4 flex justify-center">
                                    {service.icon}
                                </div>
                                <h3 className="text-lg font-semibold">
                                    {service.title}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default RoomDetails;