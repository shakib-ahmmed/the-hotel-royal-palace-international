import { useState, useEffect } from "react";
import { FaTv, FaWifi, FaSnowflake, FaCoffee, FaBuilding, FaBath, FaCar, FaConciergeBell, FaTaxi, FaMoneyCheckAlt, FaPhone } from "react-icons/fa";

function HeroSection() {
    const [time, setTime] = useState(new Date());
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const latitude = 24.1286;
    const longitude = 89.0657;

    const formatTime = (date) =>
        date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

    const getConditionText = (rain, cloudCover) => {
        if (rain > 0) return "It's raining right now";
        if (cloudCover > 50) return "Cloudy";
        return "Clear sky";
    };

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);

        fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,rain,cloud_cover&forecast_days=3&timezone=auto`
        )
            .then((res) => {
                if (!res.ok) throw new Error("Weather API failed");
                return res.json();
            })
            .then((data) => {
                const temps = data.hourly.temperature_2m;
                const rains = data.hourly.rain;
                const clouds = data.hourly.cloud_cover;
                const times = data.hourly.time;

                const now = new Date();
                let currentHourIndex = times.findIndex((t) =>
                    t.startsWith(now.toISOString().slice(0, 13))
                );
                if (currentHourIndex === -1) currentHourIndex = 0;

                const currentTemp = temps[currentHourIndex];
                const currentRain = rains[currentHourIndex];
                const currentCloud = clouds[currentHourIndex];

                const conditionText = getConditionText(currentRain, currentCloud);

                const forecast = [];
                for (let i = 0; i < 3; i++) {
                    const idx = currentHourIndex + i * 6;
                    if (idx >= temps.length) break;
                    forecast.push({
                        time: new Date(times[idx]).toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                        }),
                        icon: rains[idx] > 0 ? "🌧️" : clouds[idx] > 50 ? "⛅" : "☀️",
                        temp: temps[idx],
                    });
                }

                setWeather({
                    currentTemp,
                    forecast,
                    conditionText,
                });
            })
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));

        return () => clearInterval(timer);
    }, []);

    if (loading)
        return (
            <section className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
                <div className="text-xl font-semibold">Loading Weather...</div>
            </section>
        );

    if (error)
        return (
            <section className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
                <div className="text-xl font-semibold text-red-400">
                    Failed to load weather: {error}
                </div>
            </section>
        );

    return (
        <section className="min-h-screen relative overflow-hidden text-white font-sans">
            {/* Background Image */}
            <img
                src="/hotel.jpg"
                alt="Hotel Royal Palace"
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Hero Content */}
            <div className="relative z-10 min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20 py-12">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-12">
                    {/* Left Info */}
                    <div className="md:flex-1 max-w-md">
                        <p className="text-gray-400 text-sm uppercase tracking-wide">Local time</p>
                        <h1 className="text-6xl font-extrabold mb-2">{formatTime(time)}</h1>
                        <h2 className="text-3xl font-bold mb-4">
                            Welcome to <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-900 via-yellow-700 to-yellow-500">
                                The Hotel Royal Palace
                            </span>
                        </h2>
                        <p className="text-indigo-300 text-lg mb-6">Ishwardi City, Bangladesh</p>
                        <p className="text-gray-400 mb-4">{weather.conditionText}</p>

                        <div className="flex space-x-6 overflow-x-auto md:overflow-visible scrollbar-thin scrollbar-thumb-indigo-500 scrollbar-track-gray-700">
                            {weather.forecast.map(({ time, icon, temp }) => (
                                <div key={time} className="flex flex-col items-center min-w-[60px]">
                                    <span className="text-sm text-gray-400">{time}</span>
                                    <span className="text-2xl">{icon}</span>
                                    <span className="text-lg font-medium">{temp}°C</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Cards */}
                    <div className="md:flex-1 flex flex-col md:flex-row space-x-0 md:space-x-6 overflow-x-auto md:overflow-visible scrollbar-thin scrollbar-thumb-indigo-500 scrollbar-track-gray-700 gap-6 mt-8 md:mt-0">
                        {/* Services Card */}
                        <div className="bg-gradient-to-tr from-indigo-800/40 via-purple-800/40 to-pink-800/40 backdrop-blur-md rounded-xl shadow-lg p-6 min-w-[280px] cursor-pointer hover:scale-105 transition-transform">
                            <h3 className="text-xl font-semibold mb-4">Explore Our Services</h3>
                            <div className="grid grid-cols-2 gap-3 text-gray-200 text-sm">
                                <div className="flex items-center gap-2"><FaTv /> Cable TV</div>
                                <div className="flex items-center gap-2"><FaWifi /> Wi-Fi</div>
                                <div className="flex items-center gap-2"><FaSnowflake /> AC Room</div>
                                <div className="flex items-center gap-2"><FaCoffee /> Complimentary Breakfast</div>
                                <div className="flex items-center gap-2"><FaBuilding /> Conference Room</div>
                                <div className="flex items-center gap-2"><FaBath /> Hot Water</div>
                                <div className="flex items-center gap-2"><FaCar /> Car Parking</div>
                                <div className="flex items-center gap-2"><FaConciergeBell /> 24/7 Service</div>
                                <div className="flex items-center gap-2"><FaTaxi /> Car Service</div>
                                <div className="flex items-center gap-2"><FaMoneyCheckAlt /> ATM Booths</div>
                            </div>
                        </div>

                        {/* Book Now Card */}
                        <div className="bg-gradient-to-tr from-green-800/40 via-teal-800/40 to-cyan-800/40 backdrop-blur-md rounded-xl shadow-lg p-6 min-w-[280px] cursor-pointer hover:scale-105 transition-transform flex flex-col justify-between">
                            <h3 className="text-xl font-semibold mb-2">Book Now</h3>
                            <p className="text-gray-300 text-sm mb-3">
                                Reserve your room instantly with our secure online booking.
                            </p>
                            <ul className="text-gray-200 text-sm space-y-1 mb-4">
                                <li>✔ Best price guaranteed</li>
                                <li>✔ Instant confirmation</li>
                                <li>✔ 24/7 customer support</li>
                            </ul>
                            <a
                                href="tel:+8801318345099"
                                className="btn btn-primary w-full flex items-center justify-center gap-2"
                            >
                                <FaPhone /> Call Now
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Wi-Fi Info */}
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mt-14 text-sm text-gray-400 border-t border-gray-700 pt-6">
                    <div className="flex items-center space-x-2 pr-2 mb-4 md:mb-0">
                        <span className="font-semibold text-white">Wi-Fi Password :</span>
                        <span className="font-mono font-semibold">958PALACE</span>
                    </div>
                    <div className="gap-3">
                        <img
                            src="https://api.qrserver.com/v1/create-qr-code/?size=50x50&data=958PALACE"
                            alt="Wi-Fi QR Code"
                            className="w-12 h-12"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;