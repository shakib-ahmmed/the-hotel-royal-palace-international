import React, { useState } from "react";

const CheckIn = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [guests, setGuests] = useState([
    {
      id: 1,
      fullName: "John Doe",
      bookingId: "BK101",
      room: "502",
      checkIn: "2026-02-22 14:30",
      checkOut: "2026-02-25",
      guests: 2,
      paymentStatus: "Paid",
      amount: 450,
      status: "Checked-In",
    },
  ]);

  const [formData, setFormData] = useState({
    fullName: "",
    bookingId: "",
    room: "",
    checkOut: "",
    guests: "",
    paymentStatus: "Pending",
    amount: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const now = new Date();
    const formattedDateTime = now.toLocaleString(); // automatic date + time

    const newGuest = {
      id: Date.now(),
      ...formData,
      checkIn: formattedDateTime,
      status: "Checked-In",
    };

    setGuests([...guests, newGuest]);

    setFormData({
      fullName: "",
      bookingId: "",
      room: "",
      checkOut: "",
      guests: "",
      paymentStatus: "Pending",
      amount: "",
    });

    setIsModalOpen(false);
  };

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
                <th className="p-4">Check-In (Auto)</th>
                <th className="p-4">Guests</th>
                <th className="p-4">Amount ($)</th>
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
                  <td className="p-4">{guest.guests}</td>
                  <td className="p-4 text-green-400 font-semibold">
                    ${guest.amount}
                  </td>

                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${guest.paymentStatus === "Paid"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-yellow-500/20 text-yellow-400"
                        }`}
                    >
                      {guest.paymentStatus}
                    </span>
                  </td>

                  <td className="p-4">
                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-500/20 text-blue-400">
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

            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold text-white mb-6">
              New Guest Check-In
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                type="text"
                placeholder="Full Name"
                required
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white"
              />

              <input
                name="bookingId"
                value={formData.bookingId}
                onChange={handleChange}
                type="text"
                placeholder="Booking ID"
                required
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white"
              />

              <input
                name="room"
                value={formData.room}
                onChange={handleChange}
                type="text"
                placeholder="Room Number"
                required
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white"
              />

              <input
                name="checkOut"
                value={formData.checkOut}
                onChange={handleChange}
                type="date"
                required
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white"
              />

              <input
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                type="number"
                placeholder="Number of Guests"
                required
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white"
              />

              <input
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                type="number"
                placeholder="Payment Amount ($)"
                required
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white"
              />

              <select
                name="paymentStatus"
                value={formData.paymentStatus}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white"
              >
                <option value="Pending">Pending</option>
                <option value="Paid">Paid</option>
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