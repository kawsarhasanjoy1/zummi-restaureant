import { MenuTpe } from "@/type/menu";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FoodMenuCart = ({ menu }: { menu: MenuTpe }) => {
  return (
    <div className=" flex justify-center items-center gap-4">
      <div>
        <Image
          className=" rounded-full md:w-28 md:h-28 w-16 h-16"
          src={menu?.image}
          height={500}
          width={500}
          quality={100}
          alt=""
        />
      </div>
      <div className="">
        <p className=" uppercase text-xl">
          {" "}
          <Link className=" hover:text-yellow-600 duration-500" href={`menu/${menu?._id}`}>
            {menu?.category}
          </Link>
        </p>
        <p>{menu?.description.slice(0, 46)}</p>
      </div>
      <div>
        <p className=" text-yellow-500">${menu?.price}</p>
      </div>
    </div>
  );
};

export default FoodMenuCart;
