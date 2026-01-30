"use client";
import { useGetReviewQuery } from "@/redux/api/reviewApi";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const Review = () => {
  const { data } = useGetReviewQuery({ limit: 10, sort: "-rating" });
  const reviews = data?.data?.result || [];

  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlider = useCallback(() => {
    setCurrent((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  }, [reviews.length]);

  const prevSlider = () => {
    setCurrent((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (isPaused || reviews.length === 0) return;
    const interval = setInterval(nextSlider, 4000);
    return () => clearInterval(interval);
  }, [nextSlider, isPaused, reviews.length]);

  if (reviews.length === 0) return null;

  return (
    <div 
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative overflow-hidden bg-black/80 backdrop-blur-lg rounded-2xl border border-white/10 shadow-2xl p-6 md:p-10"
    >
      {/* Navigation Buttons */}
      <div className="absolute top-6 right-6 flex gap-3 z-20">
        <button
          onClick={prevSlider}
          className="p-2 rounded-full border border-white/20 text-white hover:bg-yellow-500 hover:text-black transition-all duration-300"
        >
          <BsArrowLeft size={18} />
        </button>
        <button
          onClick={nextSlider}
          className="p-2 rounded-full border border-white/20 text-white hover:bg-yellow-500 hover:text-black transition-all duration-300"
        >
          <BsArrowRight size={18} />
        </button>
      </div>

      {/* Review Content with Animation */}
      <div className="relative min-h-[220px] flex items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full"
          >
            {/* Quote Icon */}
            <svg
              className="w-10 h-10 text-yellow-500/30 mb-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12C14.017 12.5523 13.5693 13 13.017 13H11.017V4H21.017V15C21.017 18.3137 18.3307 21 15.017 21H14.017ZM3.017 21V18C3.017 16.8954 3.91243 16 5.017 16H8.017C8.56928 16 9.017 15.5523 9.017 15V9C9.017 8.44772 8.56928 8 8.017 8H4.017C3.46472 8 3.017 8.44772 3.017 9V12C3.017 12.5523 2.56928 13 2.017 13H0.017V4H10.017V15C10.017 18.3137 7.33071 21 4.017 21H3.017Z" />
            </svg>

            <p className="text-gray-200 text-lg md:text-xl italic leading-relaxed mb-8">
              "{reviews[current]?.review}"
            </p>

            {/* User Info */}
            <div className="flex items-center gap-4">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-yellow-500">
                <Image
                  src={reviews[current]?.user?.image || "/placeholder-user.png"}
                  fill
                  className="object-cover"
                  alt={reviews[current]?.user?.name}
                />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg">
                  {reviews[current]?.user?.name}
                </h4>
                <p className="text-yellow-500 text-sm font-medium uppercase tracking-widest">
                  {reviews[current]?.user?.role || "Customer"}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress Dots */}
      <div className="flex gap-2 mt-8">
        {reviews.map((_, i) => (
          <div
            key={i}
            className={`h-1 rounded-full transition-all duration-500 ${
              i === current ? "w-8 bg-yellow-500" : "w-2 bg-white/20"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Review;