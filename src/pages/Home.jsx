import { Link } from "react-router-dom";
import OurRooms from "../components/OurRooms";

function Home() {
    // Placeholder rooms array for now
    const rooms = Array.from({ length: 25 }, (_, i) => ({
        id: i + 1,
        name: `Room ${i + 1}`,
        price: 150 + i * 5,
        image: "/hotel-room.jpg",
    }));

    return (
        <div className="font-sans">

            {/* HERO SECTION */}
            <div className="relative w-full min-h-screen">
                <img
                    src="/hotel.jpg"
                    alt="Hotel"
                    className="w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>

                {/* Hero Content */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
                    <h1 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg mb-4 animate-fadeIn">
                        Welcome to Royal Palace
                    </h1>
                    <p className="text-lg md:text-2xl text-white drop-shadow-md mb-6 animate-fadeIn">
                        Luxury • Comfort • Elegance • Unforgettable Experiences
                    </p>
                    <Link to="/rooms">
                        <button className="btn btn-primary btn-lg rounded-full px-10 shadow-xl hover:scale-105 transform transition duration-300 animate-fadeIn">
                            Explore Rooms
                        </button>
                    </Link>
                </div>
            </div>

            {/* SERVICES SECTION */}
            <section className="p-10 bg-base-100">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
                    Our Premium Services
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="card bg-base-100 shadow-xl p-6 text-center hover:scale-105 transform transition duration-300">
                        <h3 className="text-xl font-bold mb-2">Spa & Wellness</h3>
                        <p>Relax with world-class spa treatments and massages.</p>
                    </div>
                    <div className="card bg-base-100 shadow-xl p-6 text-center hover:scale-105 transform transition duration-300">
                        <h3 className="text-xl font-bold mb-2">Fine Dining</h3>
                        <p>Experience gourmet dining with exquisite flavors.</p>
                    </div>
                    <div className="card bg-base-100 shadow-xl p-6 text-center hover:scale-105 transform transition duration-300">
                        <h3 className="text-xl font-bold mb-2">Infinity Pool</h3>
                        <p>Swim with breathtaking rooftop views and luxury vibes.</p>
                    </div>
                </div>
            </section>

            {/* ROOMS SECTION */}
            <section className="p-10 bg-base-200">
                <OurRooms />
            </section>


        </div>
    );
}

export default Home;
