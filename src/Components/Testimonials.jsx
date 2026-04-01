import React, { useState } from "react";
// import { testimonials } from "../constant";
import {
  FaChevronLeft,
  FaChevronRight,
  FaQuoteLeft,
  FaStar,
} from "react-icons/fa";
import Paragraph from "./Common/paragraph";
import Header from "./Common/Header";
import Img from "./Common/Img";
import Heading from "./Common/Heading";
import Button from "./Common/Button";
import { Link } from "react-router-dom";

const Testimonials = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section
      id="testimonials"
      className="scroll-mt-20 relative py-16 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10" />
      <Header label={`Testimonials`} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 mt-20">
          <Paragraph
            label={`A few honest thoughts from clients and colleagues I have collabrated
            with.`}
            classes={`mt-4 text-xl text-black dark:text-white font-bold`}
          />
        </div>
        <div className="relative">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                <div className="bg-[#b7b7b776] dark:bg-[#1d1d1d] p-8 rounded-3xl shadow-xl dark:shadow-[#303030] flex flex-col md:flex-row items-center">
                  <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
                    <div className="relative">
                      <Img
                        img={testimonial.image}
                        classes={`w-40 h-40 rounded-full object-cover border-4 border-black dark:border-white shadow-lg`}
                        alt={testimonial.name}
                      />
                      <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-black dark:bg-white text-white dark:text-black px-4 py-1 rounded-full text-sm font-medium">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                  <div className="md:w-2/3 md:pl-12">
                    <div className="relative text-gray-600 dark:text-gray-300">
                      <FaQuoteLeft className="text-2xl md:text-3xl absolute -top-2 -left-7 md:-left-10" />
                      <Paragraph
                        label={testimonial.content}
                        classes={`text-sm p-2 mb-6 relative z-10`}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="">
                        <Heading
                          label={testimonial.name}
                          classes={`text-xl font-bold dark:text-white`}
                        />
                        <div className="flex mt-1">
                          {[...Array(5)].map((_, i) => (
                            <FaStar
                              key={i}
                              className={`text-lg ${
                                i < testimonial.rating
                                  ? "text-yellow-400"
                                  : "text-gray-400"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <div className="hidden md:flex space-x-2">
                        <Button
                          label={<FaChevronLeft />}
                          classes={`p-2 rounded-full bg-[#000000d8] dark:bg-[#636363] text-[#b5b5b5] transition-colors`}
                          onClick={prevTestimonial}
                        />
                        <Button
                          label={<FaChevronRight />}
                          classes={`p-2 rounded-full bg-[#000000d8] dark:bg-[#636363] text-[#b5b5b5] transition-colors`}
                          onClick={nextTestimonial}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8 space-x-4 md:hidden">
            {testimonials.map((_, index) => (
              <Button
                classes={`w-3 h-3 rounded-full ${
                  currentIndex === index
                    ? "bg-gray-800 dark:bg-[#d1d5dc]"
                    : "bg-[#d8d8d8d8] dark:bg-[#636363]"
                }`}
                onClick={() => setCurrentIndex(index)}
                key={index}
              />
            ))}
          </div>
        </div>
        <div className="mt-16 text-center">
          <Link
            to="/testimonialForm"
            children="Share Your Experience"
            className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium hover:shadow-[gray] transition duration-500 shadow-lg hover:shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
