import React, { useState, useEffect } from "react";

const roomPrices = {
    standard: 120,
    deluxe: 200,
    suite: 350,
    family: 280,
    presidential: 600,
};

const BookingForm = ({ onClose }) => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        checkIn: "",
        checkOut: "",
        roomType: "standard",
        agree: false,
    });

    const [totalPrice, setTotalPrice] = useState(0);
    const [nights, setNights] = useState(0);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    useEffect(() => {
        if (formData.checkIn && formData.checkOut) {
            const start = new Date(formData.checkIn);
            const end = new Date(formData.checkOut);
            const diff = (end - start) / (1000 * 60 * 60 * 24);
            if (diff > 0) {
                setNights(diff);
                setTotalPrice(diff * roomPrices[formData.roomType]);
            } else {
                setNights(0);
                setTotalPrice(0);
            }
        } else {
            setNights(0);
            setTotalPrice(0);
        }
    }, [formData.checkIn, formData.checkOut, formData.roomType]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.fullName || !formData.email || nights <= 0 || !formData.agree) {
            alert("Please complete all required fields correctly.");
            return;
        }

        alert("Premium Booking Confirmed 🎉");

        // Optionally close modal after submission
        if (onClose) onClose();
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white px-4 py-12">
            <div className="max-w-7xl mx-auto">
                <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

                    {/* Close X Button */}
                    {onClose && (
                        <button
                            onClick={onClose}
                            className="absolute top-0 left-0 text-white text-2xl p-4 hover:text-red-500 transition"
                        >
                            &times;
                        </button>
                    )}

                    {/* Booking Form */}
                    <div className="w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
                        <h2 className="text-4xl font-bold mb-10 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
                            Book Your Stay
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="relative">
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    required
                                    className="peer w-full bg-transparent border-b border-gray-600 py-3 text-lg focus:outline-none focus:border-blue-500"
                                />
                                <label className="absolute left-0 top-3 text-gray-400 transition-all peer-focus:-top-4 peer-focus:text-sm peer-focus:text-blue-400 peer-valid:-top-4 peer-valid:text-sm">
                                    Full Name *
                                </label>
                            </div>

                            <div className="relative">
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="peer w-full bg-transparent border-b border-gray-600 py-3 text-lg focus:outline-none focus:border-blue-500"
                                />
                                <label className="absolute left-0 top-3 text-gray-400 transition-all peer-focus:-top-4 peer-focus:text-sm peer-focus:text-blue-400 peer-valid:-top-4 peer-valid:text-sm">
                                    Email *
                                </label>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <input
                                    type="date"
                                    name="checkIn"
                                    value={formData.checkIn}
                                    onChange={handleChange}
                                    className="bg-white/5 border border-gray-700 p-4 rounded-xl w-full"
                                />
                                <input
                                    type="date"
                                    name="checkOut"
                                    value={formData.checkOut}
                                    onChange={handleChange}
                                    className="bg-white/5 border border-gray-700 p-4 rounded-xl w-full"
                                />
                            </div>

                            <select
                                name="roomType"
                                value={formData.roomType}
                                onChange={handleChange}
                                className="w-full bg-white/5 border border-gray-700 p-4 rounded-xl"
                            >
                                <option value="standard">Standard - $120/night</option>
                                <option value="deluxe">Deluxe - $200/night</option>
                                <option value="suite">Suite - $350/night</option>
                                <option value="family">Family - $280/night</option>
                                <option value="presidential">Presidential - $600/night</option>
                            </select>

                            <label className="flex items-center gap-3 text-sm text-gray-300">
                                <input
                                    type="checkbox"
                                    name="agree"
                                    checked={formData.agree}
                                    onChange={handleChange}
                                    className="accent-blue-500"
                                />
                                I agree to the hotel terms
                            </label>

                            <button
                                type="submit"
                                className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300"
                            >
                                Confirm Booking
                            </button>
                        </form>
                    </div>

                    {/* Booking Summary */}
                    <div className="w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl sticky top-10">
                        <h3 className="text-3xl font-semibold mb-8 text-blue-400">
                            Booking Summary
                        </h3>
                        <div className="space-y-6 text-lg text-gray-300">
                            <p>
                                <span className="text-gray-500">Guest:</span> {formData.fullName || "-"}
                            </p>
                            <p>
                                <span className="text-gray-500">Room:</span> {formData.roomType}
                            </p>
                            <p>
                                <span className="text-gray-500">Nights:</span> {nights}
                            </p>
                            <div className="pt-6 border-t border-gray-700">
                                <p className="text-3xl font-bold text-green-400">
                                    Total: ${totalPrice}
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BookingForm;