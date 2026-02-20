import React from 'react';

const Reviews = () => {
    return (
        <section className="py-20 px-6 md:px-12 bg-gradient-to-tr from-gray-900 via-black to-gray-900">
            <h2 className="text-4xl font-bold text-center text-white mb-12">What Our Guests Say</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {[
                    { name: "John Doe", review: "Amazing stay, very luxurious and comfortable!" },
                    { name: "Jane Smith", review: "Staff were very helpful and rooms spotless." },
                    { name: "Ali Khan", review: "Great view and excellent food!" },
                ].map((guest, idx) => (
                    <div key={idx} className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center shadow-lg">
                        <p className="text-gray-300 mb-4">"{guest.review}"</p>
                        <h3 className="text-white font-semibold">{guest.name}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Reviews;