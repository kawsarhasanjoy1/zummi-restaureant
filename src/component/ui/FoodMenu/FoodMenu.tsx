"use client";
import React, { act, useState } from "react";
import menu from "../../../../public/menu.json";
import MenuButton from "@/component/Button/MenuButton";
import FoodMenuCart from "./FoodMenuCart";
import CommonDesign from "@/component/CommonDesign/CommonDesign";
const FoodMenu = () => {
  const [activeTab, setActiveTab] = useState("morning");
  return (
    <div className=" mt-20">
      <div className=" flex flex-col justify-center items-center space-y-3">
        <CommonDesign>From Our Menu</CommonDesign>
        <p className=" text-5xl uppercase">Our Special Offers</p>
      </div>
      <div className=" max-w-6xl mx-auto p-6 rounded shadow">
        <div className="flex border-b border-gray-400 justify-center text-white items-center gap-3 text-sm font-semibold mb-20">
          <MenuButton
            tab="morning"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <p className=" bg-yellow-500 w-1 h-1 rounded-full"></p>
          <MenuButton
            tab="lunch"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <p className=" bg-yellow-500 w-1 h-1 rounded-full"></p>
          <MenuButton
            tab="dinner"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <p className=" bg-yellow-500 w-1 h-1 rounded-full"></p>
          <MenuButton
            tab="fast food"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <p className=" bg-yellow-500 w-1 h-1 rounded-full"></p>
          <MenuButton
            tab="beverage"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>

        <div className="mt-4 grid grid-cols-2 gap-10">
          {menu
            ?.filter((menu) => menu?.schedule === activeTab)
            .slice(0, 8)
            .map((item) => (
              <FoodMenuCart key={item?._id} menu={item} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default FoodMenu;
