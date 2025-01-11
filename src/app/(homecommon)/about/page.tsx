"use client";
import About from "@/component/ui/About/About";
import ProductAbout from "@/component/ui/ProductAbout.tsx/ProductAbout";
import React from "react";
import CommonBanner from "@/component/Common/CommonBanner";
import CommonSwiper from "@/component/Common/CommonSwiper";
import { useGetProductsQuery } from "@/redux/api/productApi";

const page = () => {
  const { data } = useGetProductsQuery(undefined);

  return (
    <div className="">
      <div>
        <CommonBanner name="About us" />
      </div>
      <div>
        <About />
      </div>
      <div className=" ">
        <ProductAbout />
      </div>
      <div className=" mt-16">
        <CommonSwiper blogs={data?.data?.result} />
      </div>
    </div>
  );
};

export default page;
