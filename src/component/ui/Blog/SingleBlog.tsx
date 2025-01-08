"use client";
import Image from "next/image";
import React from "react";
import blogs from "../../../../public/blog.json";
import { CiCalendarDate } from "react-icons/ci";
import { RiAdminLine } from "react-icons/ri";
import BlogRight from "./BlogRight";
import CommonSwiper from "@/component/Common/CommonSwiper";
import CommonBanner from "@/component/Common/CommonBanner";



const SingleBlog = ({ blog }: { blog: any }) => {
  return (
    <div className=" px-2">
     <div>
      <CommonBanner name="Blog details"/>
     </div>
      <div className=" grid grid-cols-1 md:grid-cols-12 gap-14 md:px-20 mt-28">
        <div className=" space-y-4 col-span-8">
          <Image
            className=" w-[700px] h-[400px] pb-4 object-cover col-span-8"
            src={blog?.image}
            width={500}
            height={700}
            quality={100}
            alt=""
          />
          <div className=" flex gap-8 items-center">
            <p className=" flex items-center gap-2">
              <CiCalendarDate />
              {blog?.date}
            </p>
            <p className=" flex items-center gap-2">
              <RiAdminLine />
              By Admin
            </p>
          </div>
          <div className=" space-y-3">
            <p className=" text-2xl uppercase">{blog?.title}</p>
            <p>{blog?.description}</p>
          </div>
        </div>

        <div>
          <BlogRight blogs={blogs} />
        </div>
      </div>
      <div className=" mt-48">
        <CommonSwiper blogs={blogs} />
      </div>
    </div>
  );
};

export default SingleBlog;
