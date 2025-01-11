'use client'
import ProductDetails from "@/component/ui/ProductDetails/ProductDetails";
import { useGetProductQuery } from "@/redux/api/productApi";
import LoadingSpinner from "@/app/loading";
import { use } from "react";

const page = ({ params }: { params: any }) => {
  const productId = use<any>(params).shopId;
  const { data, isLoading } = useGetProductQuery(productId);
  if (isLoading) {
    <LoadingSpinner />;
  }
  return (
    <div>
      <ProductDetails product={data?.data} />
    </div>
  );
};

export default page;
