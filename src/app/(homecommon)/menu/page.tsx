'use client'
import CommonBanner from "@/component/Common/CommonBanner";
import CommonSwiper from "@/component/Common/CommonSwiper";
import FoodMenu from "@/component/ui/FoodMenu/FoodMenu";
import React from "react";
import menu from '../../../../public/menu.json'

const page = () => {
  return (
    <div>
      <div>
        <CommonBanner name="Food menu" />
      </div>
      <div>
        <FoodMenu />
      </div>
      <div>
        <CommonSwiper blogs={menu} />
      </div>
    </div>
  );
};

export default page;
