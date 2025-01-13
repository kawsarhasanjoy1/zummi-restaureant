import { useGetUserStatsQuery } from "@/redux/api/orderApi";
import { useAppSelector } from "@/redux/hook";
import React from "react";
import { GoCodeReview } from "react-icons/go";
import { HiOutlineCurrencyDollar, HiOutlineShoppingBag } from "react-icons/hi2";

const StaticCardUser = () => {
  const { user } = useAppSelector((store) => store?.auth);
  const id = user?.id;
  const { data: stats } = useGetUserStatsQuery(id);
 
  return (
    <div className=" grid grid-cols-1 md:grid-cols-3 gap-16">
      <div className="bg-blue-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
        <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
          <HiOutlineCurrencyDollar size={30} className=" text-black" />
        </div>
        <div className="text-right">
          <p className="text-2xl">
            {stats?.data?.totalOrder ? stats?.data?.totalPrice : 0}
          </p>
          <p>Revenue</p>
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

export default StaticCardUser;
