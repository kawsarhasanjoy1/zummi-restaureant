import OtherButton from "@/component/Button/OtherButton";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductAbout = ({ Product }: { Product: any }) => {
  console.log(Product?.image);
  return (
    <div className=" flex flex-wrap justify-center items-center space-y-8 ">
      <Image
        src={Product?.image}
        className="  size-32"
        height={100}
        quality={100}
        width={100}
        alt=""
      />
      <div className=" text-center space-y-2">
        <p className=" text-md uppercase">{Product?.name}</p>
        <p className="">{Product?.description.slice(0, 90)}</p>
      </div>
      <Link href={'/'}>
        <OtherButton className=" w-36 h-8 before:border text-sm">
          Discover more
        </OtherButton>
      </Link>
    </div>
  );
};

export default ProductAbout;
