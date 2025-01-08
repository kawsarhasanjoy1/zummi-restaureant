"use client";
import { authKey } from "@/constance/authKey";
import { USER_ROLE } from "@/constance/constance";
import { getTokenFromLocalStorage } from "@/service/action/getTokenFromLocalStorage";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import dynamic from "next/dynamic";

const Header = () => {
  const image = "https://html.rrdevs.net/zummi/assets/imgs/logo/logo.svg";
  const [isOpen, setIsOpen] = useState(false);

  // Memoized dynamic import
  const Auth = dynamic(() => import("../Auth/Auth"), { ssr: false });

  const token = getTokenFromLocalStorage(authKey);
  (token);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full bg-gray-500/75 z-20 py-4 px-4 md:px-20 uppercase">
      <div className="relative flex justify-between items-center text-white">
        {/* Logo Section */}
        <div>
          <Image
            height={150}
            width={150}
            src={image.trim()}
            alt="Restaurant Logo"
          />
        </div>

        {/* Navigation Links */}
        <div
          className={`md:flex md:items-center md:justify-end absolute md:static -left-4 top-[70px] md:top-0 w-full md:w-auto bg-red-500 md:bg-transparent transition-all duration-500 ${
            isOpen
              ? "flex flex-col -left-4 h-screen md:h-auto w-screen border"
              : "-left-[800px] h-screen md:h-0 w-full"
          }`}
        >
          <Link
            href="/"
            className="block px-4 py-2 text-[16px] hover:text-blue-500"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block px-4 py-2 text-[16px] hover:text-blue-500"
          >
            About Us
          </Link>
          <Link
            href="/menu"
            className="block px-4 py-2 text-[16px] hover:text-blue-500"
          >
            Food Menu
          </Link>
          <Link
            href="/shop"
            className="block px-4 py-2 text-[16px] hover:text-blue-500"
          >
            Shop
          </Link>
          <Link
            href="/chef"
            className="block px-4 py-2 text-[16px] hover:text-blue-500"
          >
            Chef
          </Link>
          <Link
            href="/blog"
            className="block px-4 py-2 text-[16px] hover:text-blue-500"
          >
            Blog
          </Link>
          <Link
            href={`/dashboard/${USER_ROLE.superAdmin || "user"}`}
            className="block px-4 py-2 text-[16px] hover:text-blue-500"
          >
            Dashboard
          </Link>
          <Link
            href={`/register`}
            className="block px-4 py-2 text-[16px] hover:text-blue-500 md:hidden"
          >
            Register
          </Link>
        </div>

        {/* Signup Button and Hamburger Icon */}
        <div className="flex items-center space-x-4">
          <div>
            <Auth />
          </div>
          <button
            onClick={toggleMenu}
            className="md:hidden text-white focus:outline-none"
          >
            {isOpen ? <AiOutlineClose size={25} /> : <FaBars size={25} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
