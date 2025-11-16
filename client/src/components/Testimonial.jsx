/* eslint-disable no-unused-vars */
import React from "react";
import Title from "./Title";
import { assets } from "../assets/assets";
import { motion } from "motion/react";

const testimonials = [
  {
    name: "Emma",
    location: "Barcelona, Spain",
    image: assets.testimonial_image_1,
    testimonial:
      "I've rented cars from various companies, but the experience with CarRental was exceptional.",
    rating: 5,
  },
  {
    name: "John Smith",
    location: "Paris, France",
    image: assets.testimonial_image_2,
    testimonial:
      "StayVenture made my trip stress-free — smooth booking, premium service, and great support!",
    rating: 4,
  },
  {
    name: "Maya Lee",
    location: "Tokyo, Japan",
    image: assets.testimonial_image_1,
    testimonial:
      "The best rental experience I’ve ever had. Highly recommended for frequent travelers.",
    rating: 5,
  },
];

const Testimonial = () => {
  return (
    <div className="py-28 px-6 md:px-16 lg:px-24 xl:px-44 ">
      <Title
        title="What Our Customers Say"
        subTitle="Discover why discerning travelers choose StayVenture for their luxury accommodations around the world."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {testimonials.map((item, index) => (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            key={index}
            className="border border-gray-200 rounded-xl shadow-md bg-white p-6 hover:shadow-xl hover:-translate-y-2 hover:scale-105 transition-all duration-300 ease-out"
          >
            <div className="flex items-center gap-4 mb-3">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-500">{item.location}</p>
              </div>
            </div>

            <div className="flex mb-3">
              {Array(5)
                .fill()
                .map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill={i < item.rating ? "#FBBF24" : "#E5E7EB"}
                    className="w-5 h-5"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974h4.178c.969 0 1.372 1.24.588 1.81l-3.383 2.46 1.286 3.974c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.346 2.416c-.785.57-1.84-.197-1.54-1.118l1.286-3.974-3.383-2.46c-.784-.57-.38-1.81.588-1.81h4.178L9.049 2.927z" />
                  </svg>
                ))}
            </div>

            <p className="text-gray-600 text-sm leading-relaxed">
              “{item.testimonial}”
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
