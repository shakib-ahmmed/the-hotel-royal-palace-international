import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "What are the check-in and check-out times?",
    answer: "Check-in is from 2 PM and check-out is until 12 PM.",
  },
  {
    question: "Is parking available?",
    answer: "Yes, we have free car parking for all guests.",
  },
  {
    question: "Do you provide complimentary Wi-Fi?",
    answer: "Yes, Wi-Fi is available throughout the hotel. Password: 958PALACE",
  },
  {
    question: "Can I cancel my booking?",
    answer:
      "Yes, cancellation is free up to 24 hours before your scheduled check-in.",
  },
  {
    question: "Do you have rooms with AC?",
    answer: "Yes, all rooms are air-conditioned for your comfort.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-20 px-6 md:px-12 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-300 mb-12">
          Find answers to common questions about your stay.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 cursor-pointer transition hover:scale-105"
              onClick={() => toggleIndex(idx)}
            >
              <div className="flex justify-between items-center text-white font-semibold text-lg">
                {faq.question}
                {openIndex === idx ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              {openIndex === idx && (
                <div className="mt-2 text-gray-300">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;