import Image from "next/image";
import Link from "next/link";
import React from "react";

const FoodMenuCart = ({ menu }: { menu: any }) => {
  return (
    <div className=" flex justify-center items-center gap-4">
      <div>
        <Image
          className=" rounded-full w-24 h-24"
          src={menu?.image}
          height={500}
          width={500}
          quality={100}
          alt=""
        />
      </div>
      <div className="">
        <p className=" uppercase">
          {" "}
          <Link className=" hover:text-yellow-600 duration-500" href={`menu/${menu?._id}`}>
            {menu?.category}
          </Link>
        </p>
        <p>{menu?.recipe.slice(0, 37)}</p>
      </div>
      <div>
        <p className=" text-yellow-500">${menu?.price}</p>
      </div>
    </div>
  );
};

export default FoodMenuCart;
