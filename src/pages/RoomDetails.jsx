import React from "react";

const RoomDetails = () => {
    const room = {
        title: "Deluxe Ocean View Room",
        price: 320,
        description:
            "Experience luxury and comfort in our Deluxe Ocean View Room with a breathtaking sea-facing balcony, king-size bed, and modern amenities.",
        image:
            "https://images.unsplash.com/photo-1566665797739-1674de7a421a",
        amenities: [
            "Free WiFi",
            "Air Conditioning",
            "Breakfast Included",
            "Private Balcony",
            "Swimming Pool Access",
            "24/7 Room Service",
        ],
    };

    return (
        <div className="min-h-screen bg-gray-50 py-10 px-4">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">

                {/* Left Section */}
                <div className="lg:col-span-2 bg-white rounded-2xl shadow-md overflow-hidden">

                    <img
                        src={room.image}
                        alt={room.title}
                        className="w-full h-80 object-cover"
                    />

                    <div className="p-6">
                        <h1 className="text-3xl font-bold text-gray-800 mb-4">
                            {room.title}
                        </h1>

                        <p className="text-gray-600 mb-6">
                            {room.description}
                        </p>

                        {/* Amenities */}
                        <h2 className="text-xl font-semibold mb-3 text-gray-800">
                            Amenities
                        </h2>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            {room.amenities.map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-100 px-4 py-2 rounded-lg text-sm text-gray-700"
                                >
                                    ✓ {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Section - Booking Card */}
                <div className="bg-white rounded-2xl shadow-md p-6 h-fit sticky top-10">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                        ${room.price}
                        <span className="text-base font-normal text-gray-500">
                            {" "} / night
                        </span>
                    </h2>

                    <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-md mb-4">
                        Book Now
                    </button>

                    <div className="text-sm text-gray-500 text-center">
                        Free cancellation within 24 hours
                    </div>
                </div>

            </div>
        </div>
    );
};

export default RoomDetails;