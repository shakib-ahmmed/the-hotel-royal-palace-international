import OurRooms from "../components/OurRooms";
import HeroSection from "../components/HeroSection";
import OurServices from "../components/OurServices";
import Reviews from "../components/Reviews";

function Home() {
    return (
        <div className="font-sans">

            {/* HERO SECTION */}
            <div className="relative w-full min-h-screen">
                <HeroSection />

            </div>


            {/* ROOMS SECTION */}
            <section className="py-16 px-6 md:px-12 ">
                <OurRooms />
            </section>

            {/* ROOMS SECTION */}
            <section className="py-16 px-6 md:px-12 ">
                <Reviews />
            </section>

            {/* SERVICES SECTION */}
            <section className="relative py-20 px-6 md:px-12 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
                <OurServices />
            </section>

        </div>
    );
}

export default Home;