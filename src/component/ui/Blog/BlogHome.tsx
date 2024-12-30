import React from "react";
import Image from "next/image";
import blogs from "../../../../public/blog.json";
import { MdOutlineDateRange } from "react-icons/md";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";
import CommonDesign from "@/component/Common/CommonDesign";

const BlogHome = () => {
  return (
    <div className=" mt-48 md:px-24 px-2">
      <div className="  space-y-4 mb-14">
        <CommonDesign>Expert blog</CommonDesign>
        <p className=" md:text-4xl text-2xl uppercase">MEET OUR EXPERT CHEFS</p>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogs.slice(0, 3)?.map((blog) => {
          return (
            <div key={blog?._id} className=" space-y-6 bg-stone-800">
              <div className="group overflow-hidden relative">
                <Image
                  className="transition-transform duration-500 ease-in-out group-hover:scale-110 h-[240px]"
                  src={blog?.image}
                  width={400}
                  height={400}
                  alt=""
                />
              </div>
              <div className=" space-y-4 px-5">
                <div className=" flex justify-between uppercase text-[16px]">
                  <p className=" flex gap-1 items-center">
                    <MdOutlineDateRange />
                    {blog?.date}
                  </p>
                  <p>{blog?.category}</p>
                </div>
                <div className=" uppercase">
                  <p>{blog?.title}</p>
                </div>
                <div className=" py-9 uppercase hover:text-yellow-500 duration-500 flex items-center gap-2">
                  <Link href={`/blog/${blog?._id}`} className=" ">
                    read more
                  </Link>
                  <FaLongArrowAltRight />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogHome;
