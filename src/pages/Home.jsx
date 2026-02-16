import { Link } from "react-router-dom";

function Home() {
    return (
        <div>

            {/* HERO SECTION */}
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage: "url('/hotel.jpg')"
                }}
            >

                <div className="hero-overlay bg-black bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div>
                        <h1 className="mb-5 text-5xl font-bold">
                            Welcome to Royal Palace
                        </h1>
                        <p className="mb-5">
                            Luxury • Comfort • Elegance
                        </p>
                        <Link to="/rooms">
                            <button className="btn btn-primary">
                                Explore Rooms
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* SERVICES */}
            <div className="p-10 bg-base-200">
                <h2 className="text-3xl font-bold text-center mb-8">
                    Our Services
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                    <div className="card bg-base-100 shadow-xl p-6">
                        <h3 className="text-xl font-bold">Spa & Wellness</h3>
                        <p>Relax with our world-class spa treatments.</p>
                    </div>

                    <div className="card bg-base-100 shadow-xl p-6">
                        <h3 className="text-xl font-bold">Fine Dining</h3>
                        <p>Experience gourmet dining at its finest.</p>
                    </div>

                    <div className="card bg-base-100 shadow-xl p-6">
                        <h3 className="text-xl font-bold">Infinity Pool</h3>
                        <p>Swim with breathtaking rooftop views.</p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Home;
