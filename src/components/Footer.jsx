function Footer() {
    return (
        <footer className="bg-black/95 text-gray-300 py-16 px-6 md:px-12 mt-16">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-12">

                {/* Hotel Info */}
                <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-yellow-700">
                        The Hotel Royal Palace
                    </h3>
                    <p>Ishwardi City, Bangladesh</p>
                    <p className="mt-2">Wi-Fi: <span className="font-mono font-semibold">958PALACE</span></p>
                </div>

                {/* Quick Links */}
                <div className="flex-1">
                    <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
                    <ul className="space-y-2">
                        <li><a href="#rooms" className="hover:text-yellow-500 transition">Rooms</a></li>
                        <li><a href="#services" className="hover:text-yellow-500 transition">Services</a></li>
                        <li><a href="#contact" className="hover:text-yellow-500 transition">Contact</a></li>
                        <li><a href="#booking" className="hover:text-yellow-500 transition">Book Now</a></li>
                    </ul>
                </div>

                {/* Contact */}
                <div className="flex-1">
                    <h4 className="font-semibold mb-4 text-white">Contact Us</h4>
                    <p>Phone: <a href="tel:+8801318345099" className="hover:text-yellow-500 transition">+8801318345099</a></p>
                    <p>Email: <a href="mailto:info@royalpalace.com" className="hover:text-yellow-500 transition">info@royalpalace.com</a></p>
                    <div className="flex space-x-4 mt-4 text-xl">
                        <a href="#" className="hover:text-yellow-500 transition">🌐</a>
                        <a href="#" className="hover:text-yellow-500 transition">📘</a>
                        <a href="#" className="hover:text-yellow-500 transition">📸</a>
                    </div>
                </div>
                {/* Floating Call / Book Now Button */}
                <a
                    href="tel:+8801318345099"
                    className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 bg-gradient-to-r from-yellow-600 via-red-700 to-yellow-500 text-black font-bold px-6 py-3 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center gap-2"
                >
                    📞 Call / Book Now
                </a>
            </div>

            <div className="mt-12 text-center text-gray-500 text-sm md:text-base">
                © 2026 The Hotel Royal Palace. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;