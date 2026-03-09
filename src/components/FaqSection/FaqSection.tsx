/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState } from "react"

const faqData = [
  {
    id: "01",
    question: "How do I make a booking?",
    answer:
      "You can book directly through our website by selecting your destination, dates, and preferences. Once confirmed, you'll receive a booking summary and invoice via email.",
  },
  {
    id: "02",
    question: "What payment methods do you accept?",
    answer:
      "We accept Visa, Mastercard, PayPal, and secure online bank transfers.",
  },
  {
    id: "03",
    question: "Can I hold a booking before paying?",
    answer:
      "Yes. Some bookings allow a temporary hold depending on availability.",
  },
]

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleFAQ = (index:any) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">

        {/* LEFT SIDE */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-500 mb-8">
            Still have questions? Our travel experts are here to make your journey
            smooth, from booking to boarding.
          </p>

          <button className="bg-[#007595] text-white px-6 py-3 rounded-full hover:bg-teal-800 transition">
            View more →
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-4">
          {faqData.map((faq, index) => {
            const isOpen = activeIndex === index

            return (
              <div
                key={index}
                className={`rounded-xl  transition-all duration-300 ${
                  isOpen
                    ? "bg-[#007595] text-white border[#007595]"
                    : "bg-white"
                }`}
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-5 md:p-6 text-left"
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`text-lg font-semibold ${
                        isOpen ? "text-white" : "text-gray-400"
                      }`}
                    >
                      {faq.id}
                    </span>

                    <span className="font-medium text-sm md:text-base">
                      {faq.question}
                    </span>
                  </div>

                  <span className="text-xl">
                    {isOpen ? "↗" : "↘"}
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-40 pb-6" : "max-h-0"
                  }`}
                >
                  <p className="text-sm md:text-base opacity-90">
                    {faq.answer}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}