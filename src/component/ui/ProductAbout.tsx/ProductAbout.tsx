import OtherButton from "@/component/Button/OtherButton";
import { TProduct } from "@/type/product";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useGetProduct } from "@/hooks/useGetProduct";
import { MotionDiv } from "../MotionWrapper/MotionDiv";

const ProductAbout = async () => {
  const data = await useGetProduct();
  const displayProducts = data?.data?.result.slice(0, 4) || [];

  return (
    <section className="bg-[#1a1d20] py-24 px-6 md:px-12 lg:px-20 mt-32">
      <div className="max-w-[1500px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {displayProducts.map((product: TProduct, index: number) => (
            <MotionDiv
              key={product?._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center group"
            >
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-yellow-500 rounded-full scale-0 group-hover:scale-110 transition-transform duration-500 opacity-20" />
                <Image
                  src={product?.image}
                  className="size-36 rounded-full object-cover border-4 border-gray-700 group-hover:border-yellow-500 transition-colors duration-500 shadow-2xl"
                  height={150}
                  width={150}
                  quality={100}
                  alt={product?.name || "Product"}
                />
              </div>

              <div className="space-y-3">
                <h3 className="text-white text-lg font-bold uppercase tracking-wider group-hover:text-yellow-500 transition-colors">
                  {product?.name}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 px-2">
                  {product?.description}
                </p>
              </div>

              <div className="mt-8">
                <Link href={`/products/${product?._id}`}>
                  <OtherButton className="px-6 py-2 text-xs uppercase tracking-widest border border-white/20 hover:bg-white hover:text-black transition-all duration-300">
                    Discover more
                  </OtherButton>
                </Link>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductAbout;