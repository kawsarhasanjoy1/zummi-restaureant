"use client";
import CommonSwiper from "@/component/Common/CommonSwiper";
import { useGetProductsQuery } from "@/redux/api/productApi";
import React from "react";

const MenuSwiper = () => {
  const { data } = useGetProductsQuery(undefined);
  return (
    <div>
      <CommonSwiper blogs={data?.data?.result} />
    </div>
  );
};

export default MenuSwiper;
