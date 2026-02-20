import React from "react";

const bookings = [
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
    {
        id: 3,
        name: "Michael Lee",
        service: "Single Room",
        date: "25 Feb 2026",
        status: "Cancelled",
        price: "$120",
    },
];

const statusColors = {
    Confirmed: "bg-green-100 text-green-600",
    Pending: "bg-yellow-100 text-yellow-600",
    Cancelled: "bg-red-100 text-red-600",
};

const AllBooking = () => {
    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">All Bookings</h1>
                    <button className="mt-4 md:mt-0 px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
                        + New Booking
                    </button>
                </div>

                {/* Booking Grid */}
                <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {bookings.map((booking) => (
                        <div
                            key={booking.id}
                            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6"
                        >
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-lg font-semibold text-gray-800">
                                    {booking.service}
                                </h2>
                                <span
                                    className={`px-3 py-1 text-sm rounded-full font-medium ${statusColors[booking.status]}`}
                                >
                                    {booking.status}
                                </span>
                            </div>

                            <div className="space-y-2 text-gray-600">
                                <p><span className="font-medium">Customer:</span> {booking.name}</p>
                                <p><span className="font-medium">Date:</span> {booking.date}</p>
                                <p><span className="font-medium">Price:</span> {booking.price}</p>
                            </div>

                            <div className="mt-6 flex justify-between">
                                <button className="text-blue-600 hover:underline">
                                    View
                                </button>
                                <button className="text-red-500 hover:underline">
                                    Cancel
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default AllBooking;