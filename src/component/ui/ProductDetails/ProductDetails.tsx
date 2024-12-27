import Button from "@/component/Button/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductDetails = () => {
  return (
    <div>
      <div className=" relative">
        <Image
          className="w-full h-[500px] object-cover"
          src="https://cristianonew.ukrdevs.com/wp-content/uploads/2016/08/product-8-370x247.jpg"
          width={2000}
          height={2000}
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
            className=" h-[600px] w-[400px] object-cover rounded-sm"
            src={
              "https://cristianonew.ukrdevs.com/wp-content/uploads/2016/08/product-2-370x247.jpg"
            }
            height={700}
            width={600}
            quality={100}
            alt=""
          />
        </div>
        <div className=" space-y-10">
          <div className=" space-y-4 uppercase">
            <p className=" text-red-500">$74.00</p>
            <p className=" text-">French Croissants</p>
            <p className=" text-sm">
              It is a long established fact that a reader will be distracted by
              the page readable content of a page when looking at its layout.
              The point using Lorem Ipsum is that it has a more-or-less normal.
            </p>
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
                <Button className=" size-36 group-hover:scale-100">Add to cart</Button>
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
