"use client";
import Image from "next/image";
import React from "react";
import OtherButton from "../Button/OtherButton";
import {
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
  FaRegCalendarAlt,
} from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0c0c0c] text-white mt-48 pt-24 pb-12 border-t border-white/5">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-8">
            <Image
              src={"https://html.rrdevs.net/zummi/assets/imgs/logo/logo.svg"}
              width={160}
              height={50}
              alt="logo"
              className="brightness-0 invert"
            />
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              Experience the art of culinary excellence. We bring the finest
              flavors from across the globe directly to your table.
            </p>
            <div className="flex gap-3">
              {[
                { icon: <FaTelegramPlane />, link: "#" },
                { icon: <FaFacebookF />, link: "#" },
                { icon: <FaInstagram />, link: "#" },
              ].map((social, i) => (
                <Link key={i} href={social.link}>
                  <OtherButton className="w-10 h-10 flex border border-white/10 rounded-full hover:bg-yellow-500 hover:text-black hover:border-yellow-500 transition-all duration-300 justify-center items-center">
                    {social.icon}
                  </OtherButton>
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:pl-10">
            <h4 className="text-xl font-black uppercase tracking-widest mb-10 border-l-4 border-yellow-500 pl-4">
              Our Menu
            </h4>
            <ul className="flex flex-col space-y-4 text-sm font-medium uppercase text-gray-400">
              {["Breakfast", "Lunch", "Dinner", "Vegetable", "Korean Food"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="hover:text-yellow-500 transition-colors duration-300"
                    >
                      {item}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div className="lg:pl-5">
            <h4 className="text-xl font-black uppercase tracking-widest mb-10 border-l-4 border-yellow-500 pl-4">
              Resources
            </h4>
            <ul className="flex flex-col space-y-4 text-sm font-medium uppercase text-gray-400">
              {["Home", "Menu", "Pages", "Contact", "Branch"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="hover:text-yellow-500 transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-black uppercase tracking-widest mb-10 border-l-4 border-yellow-500 pl-4">
              Recent Post
            </h4>
            <div className="space-y-8">
              {[
                {
                  img: "https://i.ibb.co.com/4m1ftRb/photo-1414235077428-338989a2e8c0.jpg",
                  title: "Dining in Paris – Explore Them",
                },
                {
                  img: "https://i.ibb.co.com/Nx1K311/photo-1447078806655-40579c2520d6.jpg",
                  title: "Summer Flavors – New Menu",
                },
              ].map((post, i) => (
                <div
                  key={i}
                  className="flex items-center gap-5 group cursor-pointer"
                >
                  <div className="relative w-20 h-20 flex-shrink-0 overflow-hidden rounded-lg">
                    <Image
                      src={post.img}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      alt="post"
                    />
                  </div>
                  <div className="space-y-1">
                    <p className="flex items-center gap-2 text-[10px] text-yellow-500 font-bold uppercase tracking-tighter">
                      <FaRegCalendarAlt /> March 27, 2024
                    </p>
                    <p className="text-sm font-bold uppercase leading-snug group-hover:text-yellow-500 transition-colors">
                      {post.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">
            © {currentYear} <span className="text-white font-bold">Zummi</span>.
            All Rights Reserved.
          </p>
          <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-gray-500">
            <Link href="#" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
