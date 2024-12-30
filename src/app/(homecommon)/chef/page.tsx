'use client'
import CommonBanner from "@/component/Common/CommonBanner";
import CommonSwiper from "@/component/Common/CommonSwiper";
import Chef from "@/component/ui/Chef/Chef";
import chef from '../../../../public/chef.json'
import React from "react";

const page = () => {
  return (
    <div>
      <div>
        <CommonBanner name="Our chef"/>
      </div>
      <div><Chef chefs={chef} /></div>
      <div className=" mt-16">
        <CommonSwiper blogs={chef}/>
      </div>
    </div>
  );
};

export default page;
