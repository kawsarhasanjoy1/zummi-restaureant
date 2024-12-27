"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { LuMenu } from "react-icons/lu";

const Header = () => {
  const image = "https://html.rrdevs.net/zummi/assets/imgs/logo/logo.svg";
  const [isOpen, setIsOpen] = useState(false);
  const HandleHeader = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className=" absolute flex md:fixed w-full justify-between items-center md:px-20 z-10 py-4">
      <div className="absolute inset-0 bg-gray-500 opacity-30 pointer-events-none"></div>
      <div className="relative z-10 flex w-full justify-between items-center px-4 text-white">
        <div>
          <Image height={150} width={150} src={image.trim()} alt="Logo" />
        </div>
        <div
          className={` md:flex  items-center justify-end  h-14  md:gap-10 md:py-2 absolute  md:space-y-0 space-y-10 md:static text-xl  ${
            isOpen
              ? "bg-red-500 z-10 md:right-auto right-0 top-[70px] w-full h-screen px-5 transition-all delay-100 duration-600"
              : "-right-[100px]  h-screen md:h-14 md:right-auto "
          }`}
        >
          <Link href={'/'} className="hover:text-blue-500 duration-500  cursor-pointer">
            Home
          </Link>
          <Link href={'about'}className="hover:text-blue-500 duration-500 cursor-pointer">
            About Us
          </Link>
          <Link href={'menu'} className="hover:text-blue-500 duration-500 cursor-pointer">
            Food menu
          </Link>
          <p className="hover:text-blue-500 duration-500 cursor-pointer">
            Chef
          </p>
          <p className="hover:text-blue-500 duration-500 cursor-pointer">
            Blog
          </p>
        </div>
        <div>
          <button className="px-4 py-2 hidden md:block bg-blue-500 text-white rounded hover:bg-blue-600">
            Signup
          </button>
          <span onClick={HandleHeader} className="md:hidden">
            {isOpen ? <AiOutlineClose size={25} /> : <FaBars size={25} />}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Header;
