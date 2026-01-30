"use client";
import { TargetCounts } from "@/type/TargetCounts";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const ChefDetails = () => {
  const [counts, setCounts] = useState<TargetCounts>({
    chefs: 0,
    foodItems: 0,
    experienced: 0,
    happyCustomers: 0,
  });

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    const targetCounts: TargetCounts = {
      chefs: 420,
      foodItems: 320,
      experienced: 50,
      happyCustomers: 220,
    };

    // কাউন্টিং স্পিড কন্ট্রোল করার জন্য লজিক
    const duration = 2000; // ২ সেকেন্ডের মধ্যে শেষ হবে
    const frameRate = 1000 / 60; // ৬০ এফপিএস
    const totalFrames = Math.round(duration / frameRate);

    let frame = 0;
    const interval = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;

      setCounts({
        chefs: Math.round(targetCounts.chefs * progress),
        foodItems: Math.round(targetCounts.foodItems * progress),
        experienced: Math.round(targetCounts.experienced * progress),
        happyCustomers: Math.round(targetCounts.happyCustomers * progress),
      });

      if (frame === totalFrames) clearInterval(interval);
    }, frameRate);

    return () => clearInterval(interval);
  }, [isInView]);

  const stats = [
    { label: "Professional Chefs", value: counts.chefs, icon: "1" },
    { label: "Items Of Food", value: counts.foodItems, icon: "2" },
    { label: "Years Experience", value: counts.experienced, icon: "3" },
    { label: "Happy Customers", value: counts.happyCustomers, icon: "4" },
  ];

  return (
    <section ref={ref} className="mt-32 relative overflow-hidden group">
      <div className="relative h-[1000px] md:h-[450px] w-full">
        <Image
          className="object-cover brightness-[0.3] grayscale-[30%]"
          src="https://i.ibb.co.com/FmyYGbP/premium-photo-1678897750441-b7fe348b14a5.jpg"
          fill
          alt="background"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20" />
      </div>

      <div className="absolute inset-0 flex items-center">
        <div className="max-w-[1500px] mx-auto w-full px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-4">
          {stats.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.2 }}
              className="flex flex-col items-center text-center space-y-4"
            >
              {/* Icon with Hover Glow */}
              <div className="relative w-20 h-20 flex justify-center items-center bg-white/10 backdrop-blur-sm rounded-full border border-white/20 group-hover:border-yellow-500 transition-colors duration-500">
                <Image
                  src={`https://html.rrdevs.net/zummi/assets/imgs/happy-client/happy-client-${item.icon === "3" ? "2" : item.icon}.svg`}
                  height={50}
                  width={50}
                  alt="icon"
                  className="brightness-0 invert group-hover:scale-110 transition-transform"
                />
              </div>

              {/* Number and Label */}
              <div className="space-y-1">
                <h3 className="text-5xl md:text-6xl font-black text-white flex items-baseline justify-center">
                  {item.value}
                  <span className="text-yellow-500 text-3xl">+</span>
                </h3>
                <p className="text-gray-300 font-medium tracking-widest text-sm uppercase">
                  {item.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChefDetails;