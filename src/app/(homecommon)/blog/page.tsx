"use client";
import Blog from "@/component/ui/Blog/Blog";
import React from "react";
import blogs from "../../../../public/blog.json";
import BlogRight from "@/component/ui/Blog/BlogRight";
import CommonBanner from "@/component/Common/CommonBanner";
import CommonSwiper from "@/component/Common/CommonSwiper";
import { BlogType } from "@/type/blog";

const page = () => {
  const BlogTs: BlogType[] = blogs;

  return (
    <div>
      <div>
        <CommonBanner name="Blog" />
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-12 gap-10 mt-20 md:px-20 px-2">
        <div className=" md:col-span-8 space-y-16">
          {BlogTs?.map((blog) => (
            <Blog key={blog?._id} blog={blog} />
          ))}
        </div>
        <div className=" md:col-span-3 ">
          <BlogRight blogs={BlogTs} />
        </div>
      </div>
      <div className=" mt-14">
        <CommonSwiper blogs={BlogTs} />
      </div>
    </div>
  );
};

export default page;
