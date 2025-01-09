"use client";
import LoadingSpinner from "@/app/loading";
import OtherButton from "@/component/Button/OtherButton";
import { useGetProductsQuery } from "@/redux/api/productApi";
import { TProduct } from "@/type/product";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductAbout = () => {
  const { data, isLoading } = useGetProductsQuery(undefined);
  if (isLoading) {
    return <LoadingSpinner />;
  }
  return (
    <div className=" bg-[#343a40] md:flex justify-center items-center gap-8 px-16 py-24 md:mx-10 space-y-16 md:space-y-0 mt-40 rounded-md">
      {data?.data?.result?.slice(0, 4)?.map((product: TProduct) => {
        return (
          <div
            key={product?._id}
            className=" flex flex-wrap justify-center items-center space-y-8 "
          >
            <Image
              src={product?.image}
              className="  size-32 rounded-full object-cover"
              height={100}
              quality={100}
              width={100}
              alt=""
            />
            <div className=" text-center space-y-2">
              <p className=" text-md uppercase">{product?.name}</p>
              <p className="">{product?.description.slice(0, 90)}</p>
            </div>
            <Link href={"/"}>
              <OtherButton className=" w-36 h-8 before:border text-sm">
                Discover more
              </OtherButton>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ProductAbout;
