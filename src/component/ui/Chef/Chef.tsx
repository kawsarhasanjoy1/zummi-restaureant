"use client";
import React from "react";
import { FreeMode, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./styles.css";
import Image from "next/image";

import ChefDetails from "../ChefDetails/ChefDetails";
import CommonDesign from "@/component/Common/CommonDesign";

const Chef = ({ chefs }: { chefs: any }) => {
  return (
    <div className=" pt-48">
      <div className=" flex flex-col justify-center items-center space-y-4 mb-14">
        <CommonDesign>Expert chef</CommonDesign>
        <p className=" md:text-4xl uppercase text-2xl">MEET OUR EXPERT CHEFS</p>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={60}
        freeMode={true}
        breakpoints={{
          340: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <div className="relative bg-stone-500 h-[500px] w-[300px] group">
          {chefs?.map((chef: any) => {
            return (
              <SwiperSlide key={chef?._id} className=" absolute top-4">
                <Image
                  src={chef?.image}
                  quality={100}
                  height={300}
                  width={200}
                  alt=""
                />
                <div className="absolute bottom-4 w-56 bg-stone-700 text-white text-center py-2">
                  <p className=" uppercase">{chef?.name}</p>
                  <p className=" uppercase text-sm">{chef?.role}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </div>
      </Swiper>
      <ChefDetails />
    </div>
  );
};

export default Chef;