import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css"; // Ensure styles are imported
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Shop = ({ menu }: { menu: any }) => {
  return (
    <Link href={`/shop/${menu?._id}`} className="border  shadow-lg bg-slate-800 border-gray-700 group relative overflow-hidden">
      <div className="absolute inset-0 bg-gray-400 opacity-60 transition-transform duration-300 ease-in-out group-hover:-translate-y-[150px] -translate-y-full"></div>
      <div className="overflow-hidden">
        <Image
          className="h-[280px] w-full object-cover"
          quality={100}
          src={menu?.image}
          width={500}
          height={500}
          alt={menu?.name || "Menu item"}
        />
      </div>

      {/* Card Content */}
      <div className="px-4 pb-6 space-y-3 relative z-10 pt-7">
        <Rating style={{ maxWidth: 100 }} value={menu?.review} readOnly />
        <p className="text-xl uppercase">{menu?.name}</p>
        <div className="flex gap-3 items-center relative">
          <p className="text-xl text-gray-400">${menu?.price}</p>
          <p
            className={`${
              menu?.off ? "border-b border-white w-11 absolute" : ""
            }`}
          ></p>
          <p className="text-xl text-red-500">
            {menu?.off ? `$${menu?.off}` : ""}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Shop;
