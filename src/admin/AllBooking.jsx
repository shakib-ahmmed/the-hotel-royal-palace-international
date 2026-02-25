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
    Confirmed: "bg-green-100 text-green-600",
    Pending: "bg-yellow-100 text-yellow-600",
    Cancelled: "bg-red-100 text-red-600",
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
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">
                        All Bookings ({bookings.length})
                    </h1>
                    <button
                        onClick={() => setShowForm(true)}
                        className="px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
                    >
                        + New Booking
                    </button>
                </div>

                {/* Booking Cards */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {bookings.map((booking) => (
                        <div
                            key={booking.id}
                            className="bg-white rounded-2xl shadow-md p-6"
                        >
                            <div className="flex justify-between mb-3">
                                <h2 className="font-semibold text-lg">
                                    {booking.service}
                                </h2>
                                <span
                                    className={`px-3 py-1 text-sm rounded-full ${statusColors[booking.status]}`}
                                >
                                    {booking.status}
                                </span>
                            </div>

                            <p><strong>Customer:</strong> {booking.name}</p>
                            <p><strong>Date:</strong> {booking.date}</p>
                            <p><strong>Price:</strong> ${booking.price}</p>

                            {booking.status !== "Cancelled" && (
                                <button
                                    onClick={() => handleCancelBooking(booking.id)}
                                    className="mt-4 text-red-500 hover:underline"
                                >
                                    Cancel
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal Form */}
            {showForm && (
                <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
                    <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-lg">
                        <h2 className="text-xl font-bold mb-4">New Booking</h2>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Customer Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full border p-2 rounded"
                            />

                            <select
                                name="service"
                                value={formData.service}
                                onChange={handleChange}
                                className="w-full border p-2 rounded"
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
                                className="w-full border p-2 rounded"
                            />

                            <input
                                type="number"
                                name="price"
                                placeholder="Price"
                                value={formData.price}
                                onChange={handleChange}
                                required
                                className="w-full border p-2 rounded"
                            />

                            <div className="flex justify-end gap-3">
                                <button
                                    type="button"
                                    onClick={() => setShowForm(false)}
                                    className="px-4 py-2 bg-gray-300 rounded"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-blue-600 text-white rounded"
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