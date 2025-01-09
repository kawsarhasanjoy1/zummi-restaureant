"use client";
import React, { useState } from "react";
import FoodMenuCart from "./FoodMenuCart";
import FoodVideo from "./FoodVideo";
import CommonDesign from "@/component/Common/CommonDesign";
import SelectButton from "@/component/Button/SelectButton";
import { TProduct } from "@/type/product";
import { useGetProductsQuery } from "@/redux/api/productApi";
import LoadingSpinner from "@/app/loading";

const FoodMenu = () => {
  const [activeTab, setActiveTab] = useState("morning");
  const { data, isLoading } = useGetProductsQuery(undefined);
  if (isLoading) {
    return <LoadingSpinner />;
  }
  return (
    <div className=" pt-32 mb-20">
      <div className=" flex flex-col justify-center items-center space-y-3">
        <CommonDesign>From Our Menu</CommonDesign>
        <p className=" md:text-4xl text-2xl uppercase">Our Special Offers</p>
      </div>
      <div className=" md:px-24 px-2 rounded shadow">
        <div className="flex border-b border-gray-400 justify-center text-white items-center md:gap-3 md:text-sm text-[10px] font-semibold mb-20">
          <SelectButton
            tab="morning"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <p className=" bg-yellow-500 w-1 h-1 rounded-full"></p>
          <SelectButton
            tab="lunch"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <p className=" bg-yellow-500 w-1 h-1 rounded-full"></p>
          <SelectButton
            tab="dinner"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <p className=" bg-yellow-500 w-1 h-1 rounded-full"></p>
          <SelectButton
            tab="fast food"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <p className=" bg-yellow-500 w-1 h-1 rounded-full"></p>
          <SelectButton
            tab="beverage"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-10 ">
          {data?.data?.result
            ?.filter((menu: any) => menu?.category === activeTab)
            ?.slice(0, 4)
            ?.map((item: any) => (
              <FoodMenuCart key={item?._id} menu={item} />
            ))}
        </div>
        <div className=" mt-10">
          <FoodVideo />
        </div>
      </div>
    </div>
  );
};

export default FoodMenu;
