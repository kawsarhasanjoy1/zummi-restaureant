import Button from "@/component/Button/Button";
import OtherButton from "@/component/Button/OtherButton";
import CommonDesign from "@/component/CommonDesign/CommonDesign";
import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className=" relative border-b">
      <div>
        {" "}
        <Image
          className=" w-full md:h-fit h-[550px] object-cover blur-[5px]"
          src={
            "https://i.ibb.co.com/y4ccCSD/photo-1728210062472-8f2e73ec5ad7.jpg"
          }
          height={1000}
          width={1000}
          quality={100}
          alt="Banner"
        />
      </div>
      <div className="md:px-20 px-3 md:space-y-5 space-y-4 absolute md:top-[30%] top-[22%]">
      <div>
        <CommonDesign> Traditional & Hygiene</CommonDesign>
      </div>
        <div>
          <p className=" md:text-8xl text-3xl font-bold uppercase font-sans">
            <span>For the</span>
            <span className=" text-yellow-500 ml-8">enjoyment</span>{" "}
            <span>of scrumptious fare.</span>
          </p>
        </div>
        <div className="">
          <p className=" text-[17px] ">
            Donec blandit massa at ex ullamcorper pellentesque. Vestibulum sit
            amet odio sit amet lacus vulputate luctus. Quisque ut ultrices
            risus. Mauris mattis, lectus eget tincidunt maximus, ursus fermentum
            enim mauris eu ante.
          </p>
        </div>
        <div className=" md:flex items-center md:gap-11 gap-3 space-y-4 md:space-y-0">
         <Button>Explore the map</Button>
         <OtherButton>Discover more</OtherButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
