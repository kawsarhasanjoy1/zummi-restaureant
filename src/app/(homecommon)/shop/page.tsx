import CommonBanner from "@/component/Common/CommonBanner";
import Shop from "@/component/ui/Shop/Shop";
import React from "react";
import menu from "../../../../public/menu.json";
import CommonSelect from "@/component/Common/CommonSelect";

const page = () => {
  return (
    <div>
      <div>
        <CommonBanner name="Shop" />
      </div>
      <div className=" md:px-24 px-2 mt-10">
        <div className=" flex justify-between">
          <p className=" uppercase">Product</p>
          <p>
            <CommonSelect />
          </p>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-4 gap-10">
          {menu?.map((menu) => (
            <Shop key={menu?._id} menu={menu} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
