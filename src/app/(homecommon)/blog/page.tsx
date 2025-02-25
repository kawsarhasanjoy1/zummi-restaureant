"use client";
import Blog from "@/component/ui/Blog/Blog";
import React from "react";
import BlogRight from "@/component/ui/Blog/BlogRight";
import CommonBanner from "@/component/Common/CommonBanner";
import CommonSwiper from "@/component/Common/CommonSwiper";
import { useFetchBlogQuery } from "@/redux/api/blogApi";

const page = () => {
  const { data } = useFetchBlogQuery(undefined);

  return (
    <div>
      <div>
        <CommonBanner name="Blog" />
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-12 gap-10 mt-20 md:px-20 px-2">
        <div className=" md:col-span-8 space-y-16">
          {data?.data?.result?.map((blog) => (
            <Blog key={blog?._id} blog={blog} />
          ))}
        </div>
        <div className=" md:col-span-3 ">
          <BlogRight blogs={data?.data?.result} />
        </div>
      </div>
      <div className=" mt-14">
        <CommonSwiper blogs={data?.data?.result} />
      </div>
    </div>
  );
};

export default page;
