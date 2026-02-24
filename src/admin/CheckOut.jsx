import React from "react";

const CheckOut = () => {
  const guests = [
    
   
  
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-6">
      <div className="max-w-7xl mx-auto bg-gray-900/70 backdrop-blur-xl border border-gray-700 rounded-2xl shadow-2xl p-6">
        <h1 className="text-3xl font-bold text-white mb-6">
          Guest Check-Out Info
        </h1>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-gray-300 border-collapse">
            <thead>
              <tr className="bg-gray-800 text-gray-400 text-sm uppercase tracking-wider">
                <th className="p-4">Name</th>
                <th className="p-4">Room</th>
                <th className="p-4">Email</th>
                <th className="p-4">Check-In</th>
                <th className="p-4">Check-Out</th>
                <th className="p-4">Payment</th>
                <th className="p-4">Status</th>
              </tr>
            </thead>

            <tbody>
              {guests.length === 0 ? (
                <tr>
                  <td colSpan={7} className="p-4 text-center text-gray-400">
                    No guests to show.
                  </td>
                </tr>
              ) : (
                guests.map((guest) => (
                  <tr
                    key={guest.id}
                    className="border-b border-gray-700 hover:bg-gray-800 transition"
                  >
                    <td className="p-4 font-semibold text-white">
                      {guest.fullName}
                    </td>
                    <td className="p-4">{guest.room}</td>
                    <td className="p-4">{guest.email}</td>
                    <td className="p-4">{guest.checkIn}</td>
                    <td className="p-4">{guest.checkOut}</td>
                    <td className="p-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          guest.payment === "Paid"
                            ? "bg-green-500/20 text-green-400"
                            : "bg-yellow-500/20 text-yellow-400"
                        }`}
                      >
                        {guest.payment}
                      </span>
                    </td>
                    <td className="p-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          guest.status === "Checked-Out"
                            ? "bg-blue-500/20 text-blue-400"
                            : "bg-gray-500/20 text-gray-300"
                        }`}
                      >
                        {guest.status}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;