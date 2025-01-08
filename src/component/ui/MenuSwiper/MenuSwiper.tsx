"use client";
import CommonSwiper from "@/component/Common/CommonSwiper";
import React from "react";

const MenuSwiper = ({ product }: { product: any[] }) => {
  return (
    <div>
      <CommonSwiper blogs={product} />
    </div>
  );
};

export default MenuSwiper;
