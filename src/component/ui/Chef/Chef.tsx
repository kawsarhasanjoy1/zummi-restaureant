"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { motion } from "framer-motion";

// Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import ChefDetails from "../ChefDetails/ChefDetails";
import CommonDesign from "@/component/Common/CommonDesign";
import { useFetchChefQuery } from "@/redux/api/chefApi";
import LoadingSpinner from "@/app/loading";

const Chef = () => {
  const { data, isLoading } = useFetchChefQuery(undefined);

  if (isLoading) return <LoadingSpinner />;

  const chefs = data?.data?.result || [];

  return (
    <section className="py-24 bg-white dark:bg-gray-950 transition-colors duration-500">
      <div className="mx-auto max-w-[1500px] px-4">
        <div className="flex flex-col justify-center items-center space-y-4 mb-16 text-center">
          <CommonDesign>Expert chef</CommonDesign>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-gray-900 dark:text-white">
            Meet Our Expert Chefs
          </h2>
          <div className="w-24 h-1 bg-yellow-500 rounded-full" />
        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          freeMode={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2, spaceBetween: 40 },
            1024: { slidesPerView: 3, spaceBetween: 50 },
          }}
          modules={[FreeMode, Pagination, Autoplay]}
          className="pb-16"
        >
          {chefs.map((chef: any) => (
            <SwiperSlide key={chef?._id}>
              <motion.div 
                whileHover={{ y: -10 }}
                className="relative h-[500px] w-full group overflow-hidden rounded-2xl shadow-lg"
              >
                <Image
                  src={chef?.image}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  alt={chef?.name}
                  quality={100}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="bg-white dark:bg-gray-900 p-5 rounded-xl shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-yellow-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                    
                    <h3 className="text-xl font-bold uppercase text-gray-900 dark:text-white">
                      {chef?.name}
                    </h3>
                    <p className="text-yellow-600 font-medium text-sm uppercase tracking-widest mt-1">
                      {chef?.title}
                    </p>
                    
                    <div className="mt-4 flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                       <span className="text-[10px] text-gray-500 uppercase tracking-tighter">View Speciality →</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        <ChefDetails />
      </div>
    </section>
  );
};

export default Chef;