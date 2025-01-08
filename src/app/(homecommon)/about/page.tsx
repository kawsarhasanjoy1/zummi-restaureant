'use client'
import About from "@/component/ui/About/About";
import ProductAbout from "@/component/ui/ProductAbout.tsx/ProductAbout";
import React from "react";
import Product from "../../../../public/product.json";
import CommonBanner from "@/component/Common/CommonBanner";
import CommonSwiper from "@/component/Common/CommonSwiper";

const page = () => {
  return (
    <div className="">
      <div>
        <CommonBanner name="About us" />
      </div>
      <div>
        <About />
      </div>
      <div className=" bg-[#343a40] md:flex justify-center items-center gap-8 px-16 py-24 md:mx-10 space-y-16 md:space-y-0 mt-40 rounded-md">
        {Product?.slice(0,4)?.map((product: any) => (
          <ProductAbout key={product?._id} Product={product} />
        ))}
      </div>
      <div className=" mt-16">
         <CommonSwiper blogs={Product}/>
      </div>
    </div>
  );
};

export default page;
