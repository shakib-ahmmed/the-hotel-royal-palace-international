import React, { useState } from "react";

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    date: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Booking Submitted Successfully!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8">
        
        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Book Your Stay
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          
          <div>
            <label className="block mb-1 text-gray-600 font-medium">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-600 font-medium">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-600 font-medium">
              Select Room Type
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition"
            >
              <option value="">Choose a room</option>
              <option value="single">Single Room</option>
              <option value="deluxe">Deluxe Room</option>
              <option value="suite">Suite Room</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 text-gray-600 font-medium">
              Booking Date
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-600 font-medium">
              Additional Notes
            </label>
            <textarea
              name="message"
              rows="3"
              placeholder="Any special requests?"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-md"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default Booking;