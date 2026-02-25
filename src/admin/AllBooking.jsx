import React, { useState } from "react";

const initialBookings = [
    {
        id: 1,
        name: "John Doe",
        service: "Deluxe Room",
        date: "20 Feb 2026",
        status: "Confirmed",
        price: "$250",
    },
    {
        id: 2,
        name: "Sarah Smith",
        service: "Suite Room",
        date: "22 Feb 2026",
        status: "Pending",
        price: "$400",
    },
];

const statusColors = {
    Confirmed: "bg-green-500/20 text-green-400",
    Pending: "bg-yellow-500/20 text-yellow-400",
    Cancelled: "bg-red-500/20 text-red-400",
};

const AllBooking = () => {
    const [bookings, setBookings] = useState(initialBookings);
    const [showForm, setShowForm] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        service: "Standard Room",
        date: "",
        price: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newBooking = {
            id: bookings.length + 1,
            ...formData,
            status: "Pending",
        };

        setBookings([...bookings, newBooking]);
        setShowForm(false);
        setFormData({
            name: "",
            service: "Standard Room",
            date: "",
            price: "",
        });
    };

    const handleCancelBooking = (id) => {
        setBookings(
            bookings.map((booking) =>
                booking.id === id ? { ...booking, status: "Cancelled" } : booking
            )
        );
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-6">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
                    <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
                        All Bookings
                    </h1>
                    <button
                        onClick={() => setShowForm(true)}
                        className="px-6 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:scale-105 transition transform shadow-lg"
                    >
                        + New Booking
                    </button>
                </div>

                {/* Booking Grid */}
                <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                    {bookings.map((booking) => (
                        <div
                            key={booking.id}
                            className="bg-gray-800/60 backdrop-blur-md border border-gray-700 rounded-2xl p-6 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
                        >
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-lg font-semibold">
                                    {booking.service}
                                </h2>
                                <span
                                    className={`px-3 py-1 text-xs rounded-full font-medium ${statusColors[booking.status]}`}
                                >
                                    {booking.status}
                                </span>
                            </div>

                            <div className="space-y-2 text-gray-300 text-sm">
                                <p><span className="text-gray-400">Customer:</span> {booking.name}</p>
                                <p><span className="text-gray-400">Date:</span> {booking.date}</p>
                                <p><span className="text-gray-400">Price:</span> ${booking.price}</p>
                            </div>

                            {booking.status !== "Cancelled" && (
                                <button
                                    onClick={() => handleCancelBooking(booking.id)}
                                    className="mt-5 text-red-400 hover:text-red-500 text-sm"
                                >
                                    Cancel Booking
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {showForm && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center p-4 z-50">
                    <div className="bg-gray-900 border border-gray-700 rounded-2xl p-8 w-full max-w-md shadow-2xl animate-fadeIn">
                        <h2 className="text-2xl font-bold mb-6 text-center">
                            New Booking
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-4">

                            <input
                                type="text"
                                name="name"
                                placeholder="Customer Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full bg-gray-800 border border-gray-700 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />

                            <select
                                name="service"
                                value={formData.service}
                                onChange={handleChange}
                                className="w-full bg-gray-800 border border-gray-700 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option>Standard Room</option>
                                <option>Deluxe Room</option>
                                <option>Suite Room</option>
                            </select>

                            <input
                                type="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                required
                                className="w-full bg-gray-800 border border-gray-700 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />

                            <input
                                type="number"
                                name="price"
                                placeholder="Price"
                                value={formData.price}
                                onChange={handleChange}
                                required
                                className="w-full bg-gray-800 border border-gray-700 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />

                            <div className="flex justify-between gap-4 pt-4">
                                <button
                                    type="button"
                                    onClick={() => setShowForm(false)}
                                    className="w-full py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="w-full py-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg hover:scale-105 transition transform"
                                >
                                    Add Booking
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AllBooking;