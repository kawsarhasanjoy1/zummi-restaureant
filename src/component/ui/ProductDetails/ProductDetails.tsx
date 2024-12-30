import Button from "@/component/Button/Button";
import { MenuTpe } from "@/type/menu";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductDetails = ({ product }: { product: MenuTpe }) => {
  return (
    <div>
      <div className=" relative">
        <Image
          className="w-full h-[600px] object-cover blur-sm"
          src={product?.image}
          width={1400}
          height={1000}
          quality={100}
          alt="Product Image"
        />
        <div className=" uppercase absolute top-[40%] flex flex-col justify-center items-center w-full">
          <p className=" text-8xl">Shop Details</p>
          <div className="flex justify-center items-center gap-3">
            <Link className=" hover:text-yellow-600 duration-500" href={"/"}>
              home
            </Link>
            <p>{">"}</p>
            <p>Shop Details</p>
          </div>
        </div>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 justify-items-center mt-16">
        <div>
          <Image
            className=" h-[550px] w-[450px] object-cover rounded-sm"
            src={product?.image}
            height={1200}
            width={800}
            quality={100}
            alt=""
          />
        </div>
        <div className=" space-y-10">
          <div className=" space-y-4 uppercase">
            <p className=" text-red-500">${product?.price}</p>
            <p className=" text-">{product?.name}</p>
            <p className=" text-sm">{product?.description}</p>
          </div>
          <div className=" flex items-center gap-4">
            <div className=" flex justify-center items-center gap-4 border w-32 bg-white text-black">
              <button className=" text-xl">-</button>
              <input
                defaultValue={1}
                max={100}
                className=" w-10 ml-4 text-black flex justify-center items-center border-none hover:border-none focus:outline-none py-2"
                type="number"
                name=""
                id=""
              />
              <button className=" text-xl">+</button>
            </div>
            <div className="">
              <Button className=" size-36 group-hover:scale-100">
                Add to cart
              </Button>
            </div>
          </div>
          <div>
            <p className=" uppercase">
              Schedule :{" "}
              <span className=" text-gray-400"> Breakfast, Lunch</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
