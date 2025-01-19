import { TProduct } from "@/type/product";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FoodMenuCart = ({ menu }: { menu: TProduct }) => {
  return (
    <div className=" flex justify-center items-center gap-4">
      <div>
        <Image
          className=" rounded-full md:w-28 md:h-28 w-14 h-14 object-cover"
          src={menu?.image}
          height={500}
          width={500}
          quality={100}
          alt=""
        />
      </div>
      <div className="">
        <p className=" uppercase text-[20px]">
          {" "}
          <Link
            className=" hover:text-yellow-600 duration-500"
            href={`menu/${menu?._id}`}
          >
            {menu?.name}
          </Link>
        </p>
        <p>{menu?.description.slice(0, 40)}</p>
      </div>
      <div>
        <p className=" text-yellow-500">${menu?.price}</p>
      </div>
    </div>
  );
};

export default FoodMenuCart;
