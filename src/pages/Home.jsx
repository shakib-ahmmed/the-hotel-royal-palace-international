import OurRooms from "../components/OurRooms";
import HeroSection from "../components/HeroSection";

function Home() {
    return (
        <div className="font-sans">

            {/* HERO SECTION */}
            <div className="relative w-full min-h-screen">
                <HeroSection />

            </div>

            {/* SERVICES SECTION */}
            <section className="py-16 px-6 md:px-12">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    Our Premium Services
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { title: "Spa & Wellness", desc: "Relax with world-class spa treatments and massages." },
                        { title: "Fine Dining", desc: "Experience gourmet dining with exquisite flavors." },
                        { title: "Infinity Pool", desc: "Swim with breathtaking rooftop views and luxury vibes." },
                    ].map((service, idx) => (
                        <div
                            key={idx}
                            className="card bg-white/10 backdrop-blur-md shadow-lg p-6 text-center rounded-xl hover:scale-105 transform transition duration-300"
                        >
                            <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
                            <p className="text-gray-300">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ROOMS SECTION */}
            <section className="py-16 px-6 md:px-12 ">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    Our Rooms
                </h2>
                <OurRooms />
            </section>

        </div>
    );
}

export default Home;