import About from "@/component/ui/About/About";
import ProductAbout from "@/component/ui/ProductAbout.tsx/ProductAbout";
import React from "react";
import Product from "../../../../public/product.json";

const page = () => {
  return (
    <div className="">
      <About />
      <div className=" bg-[#343a40] md:flex justify-center items-center gap-8 px-16 py-24 md:mx-10 space-y-16 md:space-y-0 mt-40 rounded-md">
        {Product?.map((product) => (
          <ProductAbout key={product?._id} Product={product} />
        ))}
      </div>
    </div>
  );
};

export default page;
