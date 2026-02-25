import React, { useState } from "react";

const BookingForm = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        country: "",
        checkIn: "",
        checkOut: "",
        adults: 1,
        children: 0,
        roomType: "standard",
        arrivalTime: "",
        idNumber: "",
        paymentMethod: "credit-card",
        promoCode: "",
        requests: "",
        agree: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            !formData.fullName ||
            !formData.email ||
            !formData.checkIn ||
            !formData.checkOut ||
            !formData.agree
        ) {
            alert("Please fill all required fields and accept terms.");
            return;
        }

        console.log("Booking Submitted:", formData);
        alert("Booking Successful!");
    };

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-4">
            <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-8">

                <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
                    Hotel Booking Form
                </h2>

                <form onSubmit={handleSubmit} className="grid gap-6">

                    {/* Personal Info */}
                    <div className="grid md:grid-cols-2 gap-6">
                        <input
                            type="text"
                            name="fullName"
                            placeholder="Full Name *"
                            value={formData.fullName}
                            onChange={handleChange}
                            className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Email *"
                            value={formData.email}
                            onChange={handleChange}
                            className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={handleChange}
                            className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        />

                        <input
                            type="text"
                            name="idNumber"
                            placeholder="Passport / ID Number"
                            value={formData.idNumber}
                            onChange={handleChange}
                            className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                    </div>

                    {/* Address */}
                    <input
                        type="text"
                        name="address"
                        placeholder="Address"
                        value={formData.address}
                        onChange={handleChange}
                        className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    />

                    <div className="grid md:grid-cols-2 gap-6">
                        <input
                            type="text"
                            name="city"
                            placeholder="City"
                            value={formData.city}
                            onChange={handleChange}
                            className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        />

                        <input
                            type="text"
                            name="country"
                            placeholder="Country"
                            value={formData.country}
                            onChange={handleChange}
                            className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                    </div>

                    {/* Dates */}
                    <div className="grid md:grid-cols-2 gap-6">
                        <input
                            type="date"
                            name="checkIn"
                            value={formData.checkIn}
                            onChange={handleChange}
                            className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        />

                        <input
                            type="date"
                            name="checkOut"
                            value={formData.checkOut}
                            onChange={handleChange}
                            className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                    </div>

                    {/* Guests */}
                    <div className="grid md:grid-cols-2 gap-6">
                        <select
                            name="adults"
                            value={formData.adults}
                            onChange={handleChange}
                            className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        >
                            {[1, 2, 3, 4].map((num) => (
                                <option key={num} value={num}>
                                    {num} Adult{num > 1 && "s"}
                                </option>
                            ))}
                        </select>

                        <select
                            name="children"
                            value={formData.children}
                            onChange={handleChange}
                            className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        >
                            {[0, 1, 2, 3].map((num) => (
                                <option key={num} value={num}>
                                    {num} Child{num !== 1 && "ren"}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Room & Payment */}
                    <div className="grid md:grid-cols-2 gap-6">
                        <select
                            name="roomType"
                            value={formData.roomType}
                            onChange={handleChange}
                            className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        >
                            <option value="standard">Standard Room</option>
                            <option value="deluxe">Deluxe Room</option>
                            <option value="suite">Suite</option>
                            <option value="family">Family Room</option>
                            <option value="presidential">Presidential Suite</option>
                        </select>

                        <select
                            name="paymentMethod"
                            value={formData.paymentMethod}
                            onChange={handleChange}
                            className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                        >
                            <option value="credit-card">Credit Card</option>
                            <option value="debit-card">Debit Card</option>
                            <option value="paypal">PayPal</option>
                            <option value="cash">Pay at Hotel</option>
                        </select>
                    </div>

                    {/* Arrival */}
                    <input
                        type="time"
                        name="arrivalTime"
                        value={formData.arrivalTime}
                        onChange={handleChange}
                        className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    />

                    {/* Promo */}
                    <input
                        type="text"
                        name="promoCode"
                        placeholder="Promo Code"
                        value={formData.promoCode}
                        onChange={handleChange}
                        className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    />

                    {/* Special Requests */}
                    <textarea
                        name="requests"
                        placeholder="Special Requests"
                        value={formData.requests}
                        onChange={handleChange}
                        rows="4"
                        className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    />

                    {/* Terms */}
                    <label className="flex items-center gap-2 text-sm text-gray-600">
                        <input
                            type="checkbox"
                            name="agree"
                            checked={formData.agree}
                            onChange={handleChange}
                            className="w-4 h-4"
                        />
                        I agree to the hotel terms and conditions *
                    </label>

                    {/* Button */}
                    <button
                        type="submit"
                        className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
                    >
                        Book Now
                    </button>

                </form>
            </div>
        </div>
    );
};

export default BookingForm;