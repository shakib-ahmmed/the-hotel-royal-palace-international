import React from "react";
import { useParams, useNavigate } from "react-router-dom";

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
        description: "Premium queen room with elegant lighting and comfortable workspace.",
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

const RoomDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const room = rooms.find((r) => r.id === parseInt(id));

    if (!room) {
        return (
            <div className="text-white text-center py-20 text-2xl">
                Room Not Found
            </div>
        );
    }

    return (
        <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white py-20 px-4">
            <div className="max-w-6xl mx-auto">

                <button
                    onClick={() => navigate(-1)}
                    className="mb-10 text-gray-400 hover:text-white"
                >
                    ← Back
                </button>

                <div className="grid md:grid-cols-2 gap-10 items-center">
                    <img
                        src={room.image}
                        alt={room.name}
                        className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
                    />

                    <div>
                        <h1 className="text-4xl font-bold mb-4">{room.name}</h1>
                        <p className="text-gray-300 mb-6">{room.description}</p>

                        <div className="space-y-2 mb-6 text-lg">
                            <p><strong>Room Size:</strong> {room.size}</p>
                            <p><strong>Bed Type:</strong> {room.bed}</p>
                            <p><strong>Guests:</strong> {room.guests}</p>
                            <p className="text-2xl font-semibold text-white mt-4">
                                {room.price} BDT / night
                            </p>
                        </div>

                        <button
                            onClick={() => alert("Booking Confirmed!")}
                            className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition"
                        >
                            Book Now
                        </button>
                    </div>
                </div>

                {/* Booking Information Section */}
                <div className="mt-20 backdrop-blur-lg bg-white/10 p-10 rounded-2xl border border-white/20">
                    <h2 className="text-3xl font-bold mb-6">Booking Information</h2>

                    <ul className="space-y-3 text-gray-300">
                        <li>✔ Free Cancellation within 24 hours</li>
                        <li>✔ Check-in: 2:00 PM</li>
                        <li>✔ Check-out: 12:00 PM</li>
                        <li>✔ Free High-Speed WiFi</li>
                        <li>✔ Complimentary Breakfast</li>
                        <li>✔ 24/7 Room Service</li>
                    </ul>
                </div>

            </div>
        </section>
    );
};

export default RoomDetails;