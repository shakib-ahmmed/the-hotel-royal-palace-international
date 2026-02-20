import { useEffect, useState } from "react";

function LocationSection() {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
    }, []);

    return (
        <section className="relative py-20 px-6 md:px-12 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">

            {/* Animated particles */}
            <div className="absolute inset-0 z-0">
                {[...Array(50)].map((_, i) => (
                    <span
                        key={i}
                        className="absolute bg-white/20 rounded-full animate-pulse"
                        style={{
                            width: `${Math.random() * 4 + 2}px`,
                            height: `${Math.random() * 4 + 2}px`,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animationDuration: `${Math.random() * 3 + 2}s`,
                        }}
                    />
                ))}
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center space-y-16">

                {/* Title */}
                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                    Our Location
                </h2>
                <p className="text-gray-300 text-lg md:text-xl max-w-2xl mb-8">
                    The Hotel Royal Palace International, Ishwardi City – surrounded by landmarks and attractions.
                </p>

                {/* Map + Landmarks */}
                <div className={`flex flex-col md:flex-row md:space-x-10 gap-10 w-full ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} transition-all duration-700`}>

                    {/* Google Map */}
                    <div className="w-full md:w-1/2 h-80 md:h-96 rounded-xl overflow-hidden shadow-2xl border border-white/10 backdrop-blur-sm hover:scale-105 transition-transform">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.986981228292!2d89.0625!3d24.1286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0:0x1882daf454c1b099!2sThe%20Hotel%20Royal%20Palace%20International!5e0!3m2!1sen!2sbd!4v1676973543321!5m2!1sen!2sbd"
                            className="w-full h-full border-0"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="The Hotel Royal Palace Location"
                        ></iframe>
                    </div>

                    {/* Nearby Landmarks */}
                    <div className="w-full md:w-1/2 bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg flex flex-col justify-center text-left">
                        <h3 className="text-2xl font-semibold text-white mb-4">Nearby Landmarks</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>Harding & LalonShah Bridge – 18 min drive</li>
                            <li> Ishwardi Airport – 10 min drive</li>
                            <li>Rooppur Nuclear Power Plant – 10 min drive</li>
                            <li>Ishwardi EPZ – 15 min drive</li>
                            <li>Green Valley Park, Lalpur – 20 min drive</li>
                        </ul>
                        <a
                            href="https://www.google.com/maps/dir/?api=1&destination=The+Hotel+Royal+Palace+International,+Ishwardi"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 px-6 py-3 text-center bg-gradient-to-r from-yellow-600 via-red-700 to-yellow-500 text-black font-semibold rounded-full inline-block hover:scale-105 transition-transform"
                        >
                            Get Directions
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default LocationSection;