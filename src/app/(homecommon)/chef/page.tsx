"use client";
import LoadingSpinner from "@/app/loading";
import CommonBanner from "@/component/Common/CommonBanner";
import CommonSwiper from "@/component/Common/CommonSwiper";
import Chef from "@/component/ui/Chef/Chef";
import { useFetchChefQuery } from "@/redux/api/chefApi";
import React from "react";

const page = () => {
  const { data, isLoading } = useFetchChefQuery(undefined);
  if (isLoading) {
    <LoadingSpinner />;
  }
  console.log(data?.data);
  return (
    <div>
      <div>
        <CommonBanner name="Our chef" />
      </div>
      <div>
        <Chef />
      </div>
      <div className=" mt-16">
        <CommonSwiper blogs={data?.data?.result} />
      </div>
    </div>
  );
};

export default page;
