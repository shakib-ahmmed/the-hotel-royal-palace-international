import React, { useState } from "react";

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can add API call to send the inquiry
        console.log("Inquiry submitted:", formData);
        setSubmitted(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
    };

    return (
        <section className="relative py-20 px-6 md:px-12 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    Contact & Inquiry
                </h2>
                <p className="text-gray-300 mb-12">
                    Have a question or special request? Reach out to us!
                </p>

                {submitted && (
                    <div className="mb-6 p-4 bg-green-700/50 text-white rounded-lg">
                        Thank you! Your inquiry has been submitted.
                    </div>
                )}

                <form
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    onSubmit={handleSubmit}
                >
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="p-4 rounded-xl bg-white/10 text-white border border-white/20 focus:border-yellow-600 focus:outline-none"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="p-4 rounded-xl bg-white/10 text-white border border-white/20 focus:border-yellow-600 focus:outline-none"
                    />
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="p-4 rounded-xl bg-white/10 text-white border border-white/20 focus:border-yellow-600 focus:outline-none"
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        className="p-4 rounded-xl bg-white/10 text-white border border-white/20 focus:border-yellow-600 focus:outline-none md:col-span-2"
                    />
                    <button
                        type="submit"
                        className="md:col-span-2 bg-yellow-600 hover:bg-yellow-500 text-black font-bold py-4 rounded-xl transition"
                    >
                        Submit Inquiry
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactSection;