import { useGetChefStatsQuery } from "@/redux/api/orderApi";
import React from "react";
import { GoCodeReview } from "react-icons/go";
import {  HiOutlineShoppingBag } from "react-icons/hi2";
import { PiChefHatDuotone } from "react-icons/pi";

const ChefStaticCard = () => {
  const { data: stats } = useGetChefStatsQuery(undefined);

  return (
    <div className=" grid grid-cols-1 md:grid-cols-4 gap-10 z-[-10px]">
      <div className="bg-blue-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
        <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
          <PiChefHatDuotone size={25} className=" text-black font-bold" />
        </div>
        <div className="text-right">
          <p className="text-2xl">
            {stats?.data?.totalChef ? stats?.data?.totalChef : 0}
          </p>
          <p>Chef</p>
        </div>
      </div>
      <div className="bg-blue-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
        <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
          <svg
            width="30"
            height="30"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="stroke-current text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 9v4m-4-4v4M7 9v4m4-4v4M3 7h18l1 12H2L3 7z"
            ></path>
          </svg>
        </div>
        <div className="text-right">
          <p className="text-2xl">
            {stats?.data?.totalProduct ? stats?.data?.totalProduct : 0}
          </p>
          <p>Products</p>
        </div>
      </div>
      <div className="bg-blue-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
        <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
          <HiOutlineShoppingBag size={30} className=" text-black" />
        </div>
        <div className="text-right">
          <p className="text-2xl">
            {stats?.data?.totalOrder ? stats?.data?.totalOrder : 0}
          </p>
          <p>Orders</p>
        </div>
      </div>

      <div className="bg-blue-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
        <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
          <GoCodeReview size={20} className=" text-black font-bold" />
        </div>
        <div className="text-right">
          <p className="text-2xl">
            {stats?.data?.totalReview ? stats?.data?.totalReview : 0}
          </p>
          <p>Reviews</p>
        </div>
      </div>
    </div>
  );
};

export default ChefStaticCard;
