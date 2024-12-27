"use client";
import Image from "next/image";
import React, { useState } from "react";
import { BsCaretRight } from "react-icons/bs";

const FoodVideo = () => {
  const [active, setActive] = useState(false);
  const HandleToVideo = () => {
    setActive(!active);
  };
  console.log(active);
  return (
    <div className="">
      <div className="relative">
        <Image
          className=" w-full"
          src={
            "https://cristianonew.ukrdevs.com/wp-content/uploads/2016/08/product-4-370x247.jpg"
          }
          width={1000}
          height={600}
          alt=""
        />
        <div className=" absolute top-[30%] left-[20%]">
          {active ? (
            <iframe
              width="560"
              height="315"
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
        <div className=" absolute top-[50%] left-10">
          <button className=" bg-yellow-400 w-14 h-14 rounded-full animate-ping z-10 duration-500"></button>
          <button
            onClick={HandleToVideo}
            className=" absolute top-0 w-14 h-14 bg-yellow-500 rounded-full flex justify-center items-center duration-500"
          >
            <BsCaretRight size={25} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodVideo;
