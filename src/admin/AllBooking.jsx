import React, { useState } from "react";
import BookingForm from "./BookingForm";

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

    // Callback to add a booking from BookingForm
    const handleAddBooking = (newBooking) => {
        const bookingWithId = {
            id: bookings.length + 1,
            name: newBooking.fullName,
            service: newBooking.roomType,
            date: newBooking.checkIn, // you can customize date display
            price: newBooking.price || "TBD",
            status: "Pending",
        };

        setBookings([...bookings, bookingWithId]);
        setShowForm(false);
    };

    const handleCancelBooking = (id) => {
        setBookings(
            bookings.map((b) =>
                b.id === id ? { ...b, status: "Cancelled" } : b
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
                                <h2 className="text-lg font-semibold">{booking.service}</h2>
                                <span
                                    className={`px-3 py-1 text-xs rounded-full font-medium ${statusColors[booking.status]}`}
                                >
                                    {booking.status}
                                </span>
                            </div>

                            <div className="space-y-2 text-gray-300 text-sm">
                                <p>
                                    <span className="text-gray-400">Customer:</span> {booking.name}
                                </p>
                                <p>
                                    <span className="text-gray-400">Date:</span> {booking.date}
                                </p>
                                <p>
                                    <span className="text-gray-400">Price:</span> {booking.price}
                                </p>
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

            {/* Modal for BookingForm */}
            {showForm && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center p-4 z-50">
                    <div className="bg-gray-900 border border-gray-700 rounded-2xl p-8 w-full max-w-4xl shadow-2xl overflow-y-auto max-h-[90vh]">
                        <h2 className="text-2xl font-bold mb-6 text-center">
                            New Booking
                        </h2>

                        <BookingForm onAddBooking={handleAddBooking} />

                        <button
                            onClick={() => setShowForm(false)}
                            className="w-full mt-6 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AllBooking;