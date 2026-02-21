import OurRooms from "../components/OurRooms";
import HeroSection from "../components/HeroSection";
import OurServices from "../components/OurServices";
import Reviews from "../components/Reviews";
import LocationSection from "../components/Location";
import ContactSection from "../components/ContactSection";
import FAQSection from "../components/FAQSection";

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

            {/* REVIEW SECTION */}
            <section className="py-16 px-6 md:px-12 ">
                <Reviews />
            </section>

            {/* SERVICES SECTION */}
            <section className="py-16 px-6 md:px-12 ">
                <OurServices />
            </section>

            {/* LOCATION SECTION */}
            <section className="py-16 px-6 md:px-12 ">
                <LocationSection />
            </section>

            {/* CONTACT SECTION */}
            <section className="py-16 px-6 md:px-12 ">
                <ContactSection />
            </section>

            {/* FAQ SECTION */}
            <section className="py-16 px-6 md:px-12 ">
                <FAQSection />
            </section>

        </div>
    );
}

export default Home;