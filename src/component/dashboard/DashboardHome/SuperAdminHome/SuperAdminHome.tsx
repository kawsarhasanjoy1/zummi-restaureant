"use client";
import LoadingSpinner from "@/app/loading";
import EmptyCard from "@/component/EmptyCard/EmptyCard";
import Pagination from "@/QueryBuilders/Pagination";
import {
  useFetchOrderQuery,
  useGetAdminStatsQuery,
} from "@/redux/api/orderApi";
import React, { useState } from "react";
import SuperAdminTable from "../../HomeTable/SuperAdminTable";
import { HiOutlineCurrencyDollar, HiOutlineShoppingBag } from "react-icons/hi2";
import { GoCodeReview } from "react-icons/go";
import { GrUserAdmin } from "react-icons/gr";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
  Legend,
  Line,
} from "recharts";
import { FaUsers } from "react-icons/fa";
import { PiChefHatDuotone, PiUsersThreeLight } from "react-icons/pi";
import { useFetchAdminQuery } from "@/redux/api/userApi";

const SuperAdminHome = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const [filters, setFilters] = useState({
    page: 1,
    limit: 8,
    searchTerm: "",
    sort: "-createdAt",
    // name: "",
  });

  const { error, data, refetch, isLoading } = useFetchOrderQuery(filters);
  const { data: admin } = useFetchAdminQuery(undefined);
  const { data: stats } = useGetAdminStatsQuery(undefined);
  const chart = stats?.data?.orderDetails?.map((order) => ({
    name: order?._id,
    quantity: order?.count,
    price: order?.totalPrice,
  }));
  if (isLoading) {
    return <LoadingSpinner />;
  }
  const handleFilterChange = (newFilters) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };
  const handleToSearch = (e) => {
    setFilters((prevQuery) => ({
      ...prevQuery,
      searchTerm: e.target.value,
    }));
    refetch();
  };

  const handlePageChange = (newPage: number) => {
    handleFilterChange({ page: newPage });
  };

  return (
    <div className={isDark ? "dark" : ""}>
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
              <HiOutlineShoppingBag
                size={20}
                className=" text-black font-bold"
              />
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
              <p>Ravenew</p>
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
      <div className="p-4">
        <h2 className="text-lg font-medium mb-4">Overview Chart</h2>
        <div className=" grid grid-cols-1 md:grid-cols-2 space-y-10 md:space-y-0 gap-16">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chart}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" stroke="#8884d8" />

              {/* Right Y-axis for Quantity */}
              <YAxis
                yAxisId="right"
                orientation="right"
                stroke="#8884d8"
                label={{
                  value: "Quantity",
                  angle: -90,
                  position: "insideRight",
                }}
              />

              <Tooltip />
              <Legend />

              {/* Bar for Quantity */}
              <Bar yAxisId="right" dataKey="quantity" fill="#82ca9d" />

              {/* Line for Price */}
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="price"
                stroke="#ff7300"
                dot={false}
              />
            </BarChart>
          </ResponsiveContainer>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={chart}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" stroke="#8884d8" />

              {/* Left Y-axis for Price */}

              {/* Right Y-axis for Quantity */}
              <YAxis
                yAxisId="right"
                orientation="right"
                stroke="#8884d8"
                label={{
                  value: "Quantity",
                  angle: -90,
                  position: "insideRight",
                }}
              />

              <Tooltip />

              {/* Area for Quantity */}
              <Area
                yAxisId="right"
                type="monotone"
                dataKey="quantity"
                stroke="#8884d8"
                fill="#8884d8"
              />

              {/* Area for Price */}
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div>
        <div>
          {data?.data?.result?.length ? (
            <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 pr-10 lg:px-8">
              <div className="align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg">
                <div>
                  <input
                    onChange={handleToSearch}
                    className=" border focus:outline-none px-4 py-2 rounded-md w-72 text-black "
                    placeholder="Please search"
                    type="search"
                    name="search"
                    id=""
                  />
                </div>
                <table className="min-w-auto">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                        Products
                      </th>
                      <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                        Name
                      </th>
                      <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                        Quantity
                      </th>

                      <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                        Amount
                      </th>
                      <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                        Status
                      </th>

                      <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                        Created Date{" "}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {data?.data?.result?.map((order) => (
                      <SuperAdminTable key={order?._id} order={order} />
                    ))}
                  </tbody>
                </table>
                <div className=" text-black">
                  {data?.data?.meta && (
                    <Pagination
                      meta={data?.data?.meta}
                      onPageChange={handlePageChange}
                    />
                  )}
                </div>
              </div>
            </div>
          ) : (
            <EmptyCard />
          )}
        </div>
      </div>
    </div>
  );
};

export default SuperAdminHome;
