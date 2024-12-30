"use client";
import CommonSwiper from "@/component/Common/CommonSwiper";
import { MenuTpe } from "@/type/menu";
import React from "react";

const MenuSwiper = ({ product }: { product: MenuTpe[] }) => {
  return (
    <div>
      <CommonSwiper blogs={product} />
    </div>
  );
};

export default MenuSwiper;
