import { useState, useEffect } from "react";

function AdminDashboard() {
    const [rooms, setRooms] = useState([]);
    const [selectedRoom, setSelectedRoom] = useState(null);

    useEffect(() => {
        const roomList = [];

        // 3rd floor 301-310
        for (let i = 301; i <= 310; i++) {
            roomList.push({
                floor: 3,
                number: i,
                booked: Math.random() < 0.5,
                guest: Math.random() < 0.5 ? `Guest ${i}` : null,
                checkIn: "2026-02-20",
                checkOut: "2026-02-25",
                price: 100 + (i % 10) * 20,
                paid: Math.random() < 0.5 ? "Paid" : "Due",
            });
        }

        // 4th floor 401-415
        for (let i = 401; i <= 415; i++) {
            roomList.push({
                floor: 4,
                number: i,
                booked: Math.random() < 0.5,
                guest: Math.random() < 0.5 ? `Guest ${i}` : null,
                checkIn: "2026-02-21",
                checkOut: "2026-02-26",
                price: 120 + (i % 10) * 25,
                paid: Math.random() < 0.5 ? "Paid" : "Due",
            });
        }

        setRooms(roomList);
    }, []);

    const totalRooms = rooms.length;
    const bookedRooms = rooms.filter((r) => r.booked).length;
    const availableRooms = totalRooms - bookedRooms;

    const floorRooms = (floor) => rooms.filter((r) => r.floor === floor);

    return (
        <div className="p-8 bg-gray-900 min-h-screen text-white">
            <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

            {/* Stats */}
            <div className="grid md:grid-cols-3 gap-6 mb-10">
                <div className="stat border border-indigo-400 p-4 rounded-lg bg-transparent shadow-md">
                    <div className="stat-title text-indigo-400">Total Rooms</div>
                    <div className="stat-value text-white">{totalRooms}</div>
                </div>

                <div className="stat border border-pink-400 p-4 rounded-lg bg-transparent shadow-md">
                    <div className="stat-title text-pink-400">Booked Rooms</div>
                    <div className="stat-value text-pink-200">{bookedRooms}</div>
                </div>

                <div className="stat border border-green-400 p-4 rounded-lg bg-transparent shadow-md">
                    <div className="stat-title text-green-400">Available Rooms</div>
                    <div className="stat-value text-green-200">{availableRooms}</div>
                </div>
            </div>

            {/* 3rd Floor */}
            <h2 className="text-2xl font-semibold mb-4">3rd Floor</h2>
            <div className="grid md:grid-cols-5 gap-4 mb-8">
                {floorRooms(3).map((room) => (
                    <div
                        key={room.number}
                        onClick={() => setSelectedRoom(room)}
                        className={`cursor-pointer p-4 rounded-lg border-2 text-center font-bold transition-transform transform hover:scale-105 bg-gradient-to-tr ${room.booked
                            ? "from-pink-800 via-pink-600 to-pink-500 border-pink-400 shadow-lg"
                            : "from-green-800 via-green-600 to-green-500 border-green-400 shadow-lg"
                            } text-white`}
                    >
                        Room {room.number}
                        <div className="text-sm mt-1">{room.booked ? "Booked" : "Available"}</div>
                    </div>
                ))}
            </div>

            {/* 4th Floor */}
            <h2 className="text-2xl font-semibold mb-4">4th Floor</h2>
            <div className="grid md:grid-cols-5 gap-4 mb-8">
                {floorRooms(4).map((room) => (
                    <div
                        key={room.number}
                        onClick={() => setSelectedRoom(room)}
                        className={`cursor-pointer p-4 rounded-lg border-2 text-center font-bold transition-transform transform hover:scale-105 bg-gradient-to-tr ${room.booked
                            ? "from-pink-800 via-pink-600 to-pink-500 border-pink-400 shadow-lg"
                            : "from-green-800 via-green-600 to-green-500 border-green-400 shadow-lg"
                            } text-white`}
                    >
                        Room {room.number}
                        <div className="text-sm mt-1">{room.booked ? "Booked" : "Available"}</div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {selectedRoom && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
                    onClick={() => setSelectedRoom(null)}
                >
                    <div
                        className="bg-gray-800 p-6 rounded-lg shadow-xl w-80"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h3 className="text-xl font-bold mb-4">
                            Room {selectedRoom.number}
                        </h3>
                        {selectedRoom.booked ? (
                            <div className="space-y-2">
                                <p>Guest: {selectedRoom.guest}</p>
                                <p>Check-in: {selectedRoom.checkIn}</p>
                                <p>Check-out: {selectedRoom.checkOut}</p>
                                <p>Price: ${selectedRoom.price}</p>
                                <p className={selectedRoom.paid === "Paid" ? "text-green-400" : "text-red-400"}>
                                    Status: {selectedRoom.paid}
                                </p>
                            </div>
                        ) : (
                            <p className="text-green-400 font-semibold">Room is available</p>
                        )}
                        <button
                            className="mt-4 btn btn-sm btn-outline w-full"
                            onClick={() => setSelectedRoom(null)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default AdminDashboard;