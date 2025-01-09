"use client";
import LoadingSpinner from "@/app/loading";
import CommonBanner from "@/component/Common/CommonBanner";
import CommonSwiper from "@/component/Common/CommonSwiper";
import FoodMenu from "@/component/ui/FoodMenu/FoodMenu";
import { useGetProductsQuery } from "@/redux/api/productApi";

const page = () => {
  const { data, isLoading } = useGetProductsQuery(undefined);
  if (isLoading) {
    return <LoadingSpinner />;
  }
  return (
    <div>
      <div>
        <CommonBanner name="Food menu" />
      </div>
      <div>
        <FoodMenu />
      </div>
      <div>
        <CommonSwiper blogs={data?.data?.result} />
      </div>
    </div>
  );
};

export default page;
