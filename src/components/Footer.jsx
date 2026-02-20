function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12 px-6 md:px-12 mt-16">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-10">

                {/* Hotel Info */}
                <div>
                    <h3 className="text-2xl font-bold mb-4 text-yellow-600">
                        The Hotel Royal Palace
                    </h3>
                    <p>Ishwardi City, Bangladesh</p>
                    <p className="mt-2">Wi-Fi: 958PALACE</p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="font-semibold mb-3">Quick Links</h4>
                    <ul className="space-y-1">
                        <li><a href="#rooms" className="hover:text-white">Rooms</a></li>
                        <li><a href="#services" className="hover:text-white">Services</a></li>
                        <li><a href="#contact" className="hover:text-white">Contact</a></li>
                        <li><a href="#booking" className="hover:text-white">Book Now</a></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="font-semibold mb-3">Contact Us</h4>
                    <p>Phone: +8801318345099</p>
                    <p>Email: info@royalpalace.com</p>
                    <div className="flex space-x-4 mt-2">
                        <a href="#" className="hover:text-white">🌐</a>
                        <a href="#" className="hover:text-white">📘</a>
                        <a href="#" className="hover:text-white">📸</a>
                    </div>
                </div>

            </div>

            <div className="mt-12 text-center text-gray-500">
                © 2026 The Hotel Royal Palace. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;