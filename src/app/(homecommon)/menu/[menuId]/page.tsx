import ProductDetails from "@/component/ui/ProductDetails/ProductDetails";
import React from "react";
import product from "../../../../../public/menu.json";
import MenuSwiper from "@/component/ui/MenuSwiper/MenuSwiper";


const page = ({ params }: { params: any }) => {
  const singleMenu = product?.filter(
    (product) => product?._id == params?.menuId
  );

  return (
    <div className=" space-y-20">
      <div>
        {singleMenu?.map((product: any) => (
          <ProductDetails key={product?._id} product={product} />
        ))}
      </div>
      <div>
        <MenuSwiper product={product} />
      </div>
    </div>
  );
};

export default page;
