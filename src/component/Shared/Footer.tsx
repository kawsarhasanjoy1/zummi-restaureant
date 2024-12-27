import Image from "next/image";
import React from "react";
import OtherButton from "../Button/OtherButton";
import { FaFacebook, FaInstagram, FaRegCalendarAlt, FaTelegram } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className=" md:mt-48 mt-20 md:grid grid-cols-4 space-y-10 md:space-y-0 px-3">
      <div className=" space-y-7">
        <Image
          src={"https://html.rrdevs.net/zummi/assets/imgs/logo/logo.svg".trim()}
          width={150}
          height={150}
          alt="logo"
        />
        <p>
          Morbi pharetra eros sed euismod pellentesque nulla risus lobortis
          purus quis maximus.
        </p>
        <div className="flex gap-4">
          <OtherButton className="w-10 h-10 flex border-[1px] justify-center items-center">
            <FaTelegram size={20} />
          </OtherButton>
          <OtherButton className="w-10 h-10 flex border-[1px] justify-center items-center">
            <FaFacebook size={20} />
          </OtherButton>
          <OtherButton className="w-10 h-10 flex border-[1px] justify-center items-center">
            <FaInstagram size={20} />
          </OtherButton>
        </div>
      </div>
      <div className=" uppercase space-y-10 mt-3">
        <p className=" text-2xl font-bold ">Our Menu</p>
        <div className=" flex flex-col space-y-4 text-sm">
          <p>
            {" "}
            <Link className=" hover:text-blue-500 duration-200" href={"#"}>
              Breakfast
            </Link>
          </p>
          <p>
            <Link className=" hover:text-blue-500 duration-200" href={"#"}>
              Lunch
            </Link>
          </p>
          <p>
            {" "}
            <Link className=" hover:text-blue-500 duration-200" href={"#"}>
              Dinner
            </Link>
          </p>
          <p>
            {" "}
            <Link className=" hover:text-blue-500 duration-200" href={"#"}>
              Vegetable
            </Link>
          </p>
          <p>
            <Link className=" hover:text-blue-500 duration-200" href={"#"}>
              Korean Food
            </Link>
          </p>
        </div>
      </div>
      <div className=" uppercase space-y-10 mt-3">
        <p className=" text-2xl font-bold">Resources</p>
        <div className=" flex flex-col space-y-4 text-sm ">
          <p>
            {" "}
            <Link className=" hover:text-blue-500 duration-200" href={"#"}>
              Home
            </Link>
          </p>
          <p>
            <Link className=" hover:text-blue-500 duration-200" href={"#"}>
              Menu
            </Link>
          </p>
          <p>
            {" "}
            <Link className=" hover:text-blue-500 duration-200" href={"#"}>
              Pages
            </Link>
          </p>
          <p>
            {" "}
            <Link className=" hover:text-blue-500 duration-200" href={"#"}>
              Contact
            </Link>
          </p>
          <p>
            {" "}
            <Link className=" hover:text-blue-500 duration-200" href={"#"}>
              Branch
            </Link>
          </p>
        </div>
      </div>
      <div className=" space-y-10 mt-3">
        <p className=" text-2xl font-bold uppercase ">Recent Post</p>
       <div className=" space-y-6">
       <div className=" uppercase flex items-center gap-6">
            <Image src={'https://i.ibb.co.com/4m1ftRb/photo-1414235077428-338989a2e8c0.jpg'} height={100} width={100} alt="" quality={100} priority/>
            <div className=" space-x-2">
                <p className=" flex items-center gap-2 hover:text-blue-500 duration-200"><FaRegCalendarAlt />March 27, 2024</p>
                <p className=" text-xl hover:text-blue-500 duration-200">Dining in Paris – Explore Them in Town</p>
            </div>
        </div>
        <div className=" uppercase flex items-center gap-6">
            <Image src={'https://i.ibb.co.com/Nx1K311/photo-1447078806655-40579c2520d6.jpg'} height={100} width={100} alt="" quality={100} priority/>
            <div className=" space-x-2 cursor-pointer ">
                <p className=" flex items-center gap-2 hover:text-blue-500 duration-200"><FaRegCalendarAlt />March 27, 2024</p>
                <p className=" text-xl hover:text-blue-500 duration-200">Dining in Paris – Explore Them in Town</p>
            </div>
        </div>
       </div>
      </div>
    </div>
  );
};

export default Footer;
