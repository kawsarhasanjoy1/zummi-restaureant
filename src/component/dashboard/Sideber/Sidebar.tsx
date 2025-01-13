"use client";
import { useState } from "react";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars, FaHome } from "react-icons/fa";
import Image from "next/image";
import SideBarItem from "@/utils/SideBarItem/SideBarItem";
import { useAppSelector } from "@/redux/hook";
const image = "https://html.rrdevs.net/zummi/assets/imgs/logo/logo.svg";

const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const {user} = useAppSelector(store => store.auth)
   
    const role = user?.role;
  return (
    <div className="relative z-50">
      <div
        className="fixed text-white text-4xl top-2 left-2 cursor-pointer bg-gray-700 p-3 rounded-md"
        onClick={() => setSidebarOpen(!isSidebarOpen)}
      >
        <FaBars size={20} />
      </div>
      <div
        className={`sidebar fixed top-0 bottom-0 ${
          isSidebarOpen ? " left-0" : "lg:left-0 -left-full"
        } p-2 w-[300px] overflow-y-auto text-center bg-gray-900 transition-all duration-500 uppercase`}
      >
        {/* Header */}
        <div className="text-gray-100 text-xl">
          <div className="p-2.5 mt-1 flex items-center">
            <div className=" w-32">
              <Image
                height={150}
                width={150}
                src={image.trim()}
                alt="Restaurant Logo"
              />
            </div>
            <div className="cursor-pointer ml-28 lg:hidden">
              <AiOutlineClose onClick={() => setSidebarOpen(false)} />
            </div>
          </div>
          <div className="my-2 bg-gray-600 h-[1px]"></div>
        </div>

        {/* Search Box */}
        <div className="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 text-white">
          <i className="bi bi-search text-sm"></i>
          <input
            type="text"
            placeholder="Search"
            className="text-[15px] ml-4 w-full bg-transparent focus:outline-none"
          />
        </div>

        {/* Navigation Links */}

        {SideBarItem(role)?.map((Item) => {
          return (
            <Link
              key={Item?.path}
              href={`/dashboard/${Item?.path}`}
              className="block "
            >
              <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                <Item.icon />
                <span className="text-[15px] ml-4 text-gray-200 font-bold">
                  {Item?.title}
                </span>
              </div>
            </Link>
          );
        })}

        {/* <Link href="/bookmark" className="block">
          <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
            <i className="bi bi-bookmark-fill"></i>
            <span className="text-[15px] ml-4 text-gray-200 font-bold">
              Bookmark
            </span>
          </div>
        </Link> */}
        <div className="my-4 bg-gray-600 h-[1px]"></div>
        <Link href="/" className="block">
          <div className="p-2.5 mt-3 flex items-center rounded-md px-3 duration-300 cursor-pointer hover:bg-blue-600 text-white gap-2">
          <FaHome />
            <span className="text-[15px] text-gray-200 font-bold flex justify-center items-center">Home</span>
          </div>
        </Link>
      
      </div>
    </div>
  );
};

export default Sidebar;
