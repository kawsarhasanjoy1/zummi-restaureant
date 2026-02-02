"use client";
import Button from "@/component/Button/Button";
import OtherButton from "@/component/Button/OtherButton";
import CommonDesign from "@/component/Common/CommonDesign";
import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <section className="relative w-full h-[750px] md:h-screen overflow-hidden group pt-28 ">

      <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-105">
        <Image
          className="object-cover"
          src="https://i.ibb.co.com/y4ccCSD/photo-1728210062472-8f2e73ec5ad7.jpg"
          fill
          priority
          quality={100}
          alt="Premium Dining Banner"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent shadow-inner" />
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]" />
      </div>

      <div className="relative h-full max-w-[1500px] mx-auto px-6 md:px-0 flex flex-col justify-center">
        <div className="max-w-4xl space-y-8">
          
          <div className="inline-block animate-fade-in">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
              </span>
              <p className="text-xs md:text-sm font-medium tracking-widest uppercase text-yellow-500">
                Traditional & Hygiene
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl md:text-8xl font-extrabold text-white leading-[1] tracking-tight animate-slide-up">
              For the <br />
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent italic font-serif">
                enjoyment
              </span> <br />
              of scrumptious fare.
            </h1>
          </div>


          <div className="max-w-xl animate-slide-up-delayed">
            <p className="text-base md:text-lg text-gray-300 font-light leading-relaxed border-l-2 border-yellow-500/50 pl-6">
              Experience culinary excellence where tradition meets modern taste. 
              Vestibulum sit amet odio sit amet lacus vulputate luctus. 
              Quisque ut ultrices risus.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 pt-6">
            <Button className="h-14 bg-yellow-500 md:px-10 w-56 hover:bg-yellow-600">
              <span className="relative z-10">EXPLORE THE MAP</span>
            </Button>
            
            <OtherButton className="md:px-10 w-56 h-14 border border-white/30 text-white font-bold rounded-none hover:bg-white hover:text-black transition-all duration-500">
              DISCOVER MORE
            </OtherButton>
          </div>

        </div>
      </div>

      <div className="absolute bottom-10 right-10 hidden lg:block text-white/40 vertical-text tracking-widest text-xs uppercase animate-pulse">
        Scroll to discover ——
      </div>
    </section>
  );
};

export default Banner;