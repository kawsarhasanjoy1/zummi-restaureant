"use client";
import ProductDetails from "@/component/ui/ProductDetails/ProductDetails";
import React from "react";
import MenuSwiper from "@/component/ui/MenuSwiper/MenuSwiper";
import { useGetProductQuery } from "@/redux/api/productApi";
import LoadingSpinner from "@/app/loading";

const page = ({ params }: { params: any }) => {
  const menuId = React.use<any>(params).menuId; // Unwrap the promise

  const { data, isLoading } = useGetProductQuery(menuId);
  if (isLoading) {
    <LoadingSpinner />;
  }
  return (
    <div className=" space-y-20">
      <div>
        <ProductDetails product={data?.data} />
      </div>
      <div>
        <MenuSwiper />
      </div>
    </div>
  );
};

export default page;
