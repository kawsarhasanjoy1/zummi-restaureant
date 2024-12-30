import { BlogType } from "@/type/blog";
import Image from "next/image";
import React from "react";
import { BsSearch } from "react-icons/bs";
import { CiCalendarDate } from "react-icons/ci";

const BlogRight = ({ blogs }: { blogs: BlogType[] }) => {
  const sortedBlogs = blogs.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <div className=" space-y-10">
      <div className=" flex items-center justify-center border w-[350px] py-16">
        <input
          className=" uppercase border-none h-14 focus:outline-none text-black px-3"
          type="text"
          placeholder="Enter keyword"
          name=""
          id=""
        />
        <p className=" bg-red-500 h-14 cursor-pointer flex justify-center items-center px-4">
          <BsSearch />
        </p>
      </div>
      <div className=" border w-[350px] px-3 py-6">
        <p className=" uppercase text-xl">Recent Posts</p>
        <div className=" space-y-4 mt-5">
          {sortedBlogs?.slice(0, 3)?.map((blog: BlogType) => {
            return (
              <div
                key={blog?._id}
                className="flex items-center justify-center gap-3"
              >
                <Image
                  className=" w-16 h-16 "
                  src={blog?.image}
                  width={100}
                  height={100}
                  alt=""
                />
                <div>
                  <p className=" text-[16px] hover:text-yellow-500 duration-500">
                    {blog?.title}
                  </p>
                  <p className=" flex items-center gap-1 text-sm hover:text-yellow-500 duration-500">
                    <CiCalendarDate />
                    {blog?.date}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BlogRight;
