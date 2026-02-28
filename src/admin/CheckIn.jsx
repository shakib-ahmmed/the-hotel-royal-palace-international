import React, { useState } from "react";

const CheckIn = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const guests = [
    {
      id: 1,
      fullName: "John Doe",
      bookingId: "BK101",
      room: "502",
      checkIn: "2026-02-22",
      checkOut: "2026-02-25",
      guests: 2,
      payment: "Paid",
      status: "Checked-In",
    },
    {
      id: 2,
      fullName: "Sarah Smith",
      bookingId: "BK102",
      room: "305",
      checkIn: "2026-02-23",
      checkOut: "2026-02-26",
      guests: 1,
      payment: "Pending",
      status: "Pending",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-6">
      <div className="max-w-7xl mx-auto bg-gray-900/70 backdrop-blur-xl border border-gray-700 rounded-2xl shadow-2xl p-6">

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-white">
            All Guest Check-Ins
          </h1>

          <button
            onClick={() => setIsModalOpen(true)}
            className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-lg transition duration-300"
          >
            + New Guest Check-In
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-gray-300 border-collapse">
            <thead>
              <tr className="bg-gray-800 text-gray-400 text-sm uppercase tracking-wider">
                <th className="p-4">Name</th>
                <th className="p-4">Booking ID</th>
                <th className="p-4">Room</th>
                <th className="p-4">Check-In</th>
                <th className="p-4">Check-Out</th>
                <th className="p-4">Guests</th>
                <th className="p-4">Payment</th>
                <th className="p-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {guests.map((guest) => (
                <tr
                  key={guest.id}
                  className="border-b border-gray-700 hover:bg-gray-800 transition"
                >
                  <td className="p-4 font-semibold text-white">
                    {guest.fullName}
                  </td>
                  <td className="p-4">{guest.bookingId}</td>
                  <td className="p-4">{guest.room}</td>
                  <td className="p-4">{guest.checkIn}</td>
                  <td className="p-4">{guest.checkOut}</td>
                  <td className="p-4">{guest.guests}</td>

                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${guest.payment === "Paid"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-yellow-500/20 text-yellow-400"
                        }`}
                    >
                      {guest.payment}
                    </span>
                  </td>

                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${guest.status === "Checked-In"
                        ? "bg-blue-500/20 text-blue-400"
                        : "bg-gray-500/20 text-gray-300"
                        }`}
                    >
                      {guest.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl w-full max-w-lg p-6 relative">

            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold text-white mb-6">
              New Guest Check-In
            </h2>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="text"
                placeholder="Booking ID"
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="text"
                placeholder="Room Number"
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="date"
                  className="p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="date"
                  className="p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <input
                type="number"
                placeholder="Number of Guests"
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <select className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Payment Status</option>
                <option>Paid</option>
                <option>Pending</option>
              </select>

              <button
                type="submit"
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition"
              >
                Save Check-In
              </button>
            </form>

          </div>
        </div>
      )}
    </div>
  );
};

export default CheckIn;