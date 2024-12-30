"use client";
import Image from "next/image";
import React, { useState } from "react";
import { BsCaretRight } from "react-icons/bs";
import Review from "./Review";

const FoodVideo = () => {
  const [active, setActive] = useState(false);
  const HandleToVideo = () => {
    setActive(!active);
  };

  

  return (
    <div className="">
      <div className="relative">
        <Image
          className=" w-full md:h-full h-[400px] object-cover"
          quality={100}
          src={ 
            "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          width={1400}
          height={1000}
          alt=""
        />
        <div className=" absolute top-[30%] md:left-[20%] left-4 z-30 flex justify-center items-center">
          {active ? (
            <iframe
            className=" md:w-[560px] w-[350px] md:h-[315px] h-auto"
              
              src="https://www.youtube.com/embed/VexEx0jy6tY?si=4-EpEcDEToa9OY00"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          ) : (
            ""
          )}
        </div>
        <div className=" absolute md:top-[50%] top-3 md:left-10 left-[40%]">
          <button className=" bg-yellow-400 w-14 h-14 rounded-full animate-ping z-10 duration-500"></button>
          <button
            onClick={HandleToVideo}
            className=" absolute top-0 w-14 h-14 bg-yellow-500 rounded-full flex justify-center items-center duration-500"
          >
            <BsCaretRight size={25} />
          </button>
        </div>
      
        <div className=" mb-48 md:mb-0">
          <div className="max-w-[50%] min-w-[350px]  mx-auto h-[270px] flex flex-row items-center overflow-hidden  absolute -bottom-20 md:bottom-0 md:right-0 right-[4%]">
           <Review/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodVideo;
