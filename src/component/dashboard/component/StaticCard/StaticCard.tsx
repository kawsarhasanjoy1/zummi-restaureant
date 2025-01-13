import { useGetAdminStatsQuery } from "@/redux/api/orderApi";
import { useFetchAdminQuery } from "@/redux/api/userApi";
import React from "react";
import { GoCodeReview } from "react-icons/go";
import { GrUserAdmin } from "react-icons/gr";
import { HiOutlineCurrencyDollar, HiOutlineShoppingBag } from "react-icons/hi2";
import { PiChefHatDuotone, PiUsersThreeLight } from "react-icons/pi";

const StaticCard = () => {
  const { data: admin } = useFetchAdminQuery(undefined);
  const { data: stats } = useGetAdminStatsQuery(undefined);
  return (
    <div className=" flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
      {/* Statistics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4 gap-4">
        {/* Card 1 */}
        <div className="bg-blue-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
          <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
            <PiUsersThreeLight size={30} className=" text-black" />
          </div>
          <div className="text-right">
            <p className="text-2xl">
              {stats?.data?.totalUser ? stats?.data?.totalUser : 0}
            </p>
            <p>Users</p>
          </div>
        </div>
        <div className="bg-blue-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
          <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
            <GrUserAdmin size={30} className=" text-black" />
          </div>
          <div className="text-right">
            <p className="text-2xl">
              {admin?.data?.length ? admin?.data?.length : 0}
            </p>
            <p>Admin</p>
          </div>
        </div>
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
        {/* Card 2 */}
        <div className="bg-blue-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
          <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
            <HiOutlineShoppingBag size={20} className=" text-black font-bold" />
          </div>
          <div className="text-right">
            <p className="text-2xl">
              {stats?.data?.totalOrder ? stats?.data?.totalOrder : 0}
            </p>
            <p>Orders</p>
          </div>
        </div>
        {/* Card 3 */}
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
        {/* Card 4 */}
        <div className="bg-blue-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
          <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
            <HiOutlineCurrencyDollar
              size={25}
              className=" text-black font-bold"
            />
          </div>
          <div className="text-right">
            <p className="text-2xl">
              {stats?.data?.totalPrice ? stats?.data?.totalPrice : 0}
            </p>
            <p>Revenue</p>
          </div>
        </div>

        <div className="bg-blue-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
          <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
            <GoCodeReview size={25} className=" text-black font-bold" />
          </div>
          <div className="text-right">
            <p className="text-2xl">
              {stats?.data?.totalReview ? stats?.data?.totalReview : 0}
            </p>
            <p>Review</p>
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
                d="M15 14l-4-4m0 0l-4 4m4-4v12"
              ></path>
            </svg>
          </div>
          <div className="text-right">
            <p className="text-2xl">
              {stats?.data?.totalBlog ? stats?.data?.totalBlog : 0}
            </p>
            <p>Blogs</p>
          </div>
        </div>
      </div>
      {/* ./Statistics Cards */}
    </div>
  );
};

export default StaticCard;
