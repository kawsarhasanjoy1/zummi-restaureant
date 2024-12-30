import Image from "next/image";
import Link from "next/link";
import React from "react";

const CommonBanner = ({ name }: { name: string }) => {
  return (
    <div className=" relative ">
      <Image
        className=" h-[600px] object-cover blur-sm w-full"
        src={
          "https://html.rrdevs.net/zummi/assets/imgs/breadcrumb/breadcrumb.jpg"
        }
        width={1200}
        height={800}
        alt=""
      />
      <div className=" uppercase absolute top-[40%] flex flex-col justify-center items-center w-full">
        <p className=" md:text-8xl text-3xl">{name}</p>
        <div className="flex justify-center items-center gap-3">
          <Link className=" hover:text-yellow-600 duration-500" href={"/"}>
            home
          </Link>
          <p>{">"}</p>
          <p>{name}</p>
        </div>
      </div>
    </div>
  );
};

export default CommonBanner;
