import Image from "next/image";
import Link from "next/link";
import React from "react";
import BlogRight from "./BlogRight";
import blogs from "../../../../public/blog.json";
import { CiCalendarDate } from "react-icons/ci";
import { RiAdminLine } from "react-icons/ri";
import Button from "@/component/Button/Button";

const Blog = ({ blog }: { blog: any }) => {
  return (
    <div className=" space-y-4 col-span-8 border border-gray-600">
      <Image
        className=" w-[800px] h-[400px] pb-4 object-cover col-span-8"
        src={blog?.image}
        width={500}
        height={700}
        quality={100}
        alt=""
      />
      <div className=" space-y-4 px-8 py-8">
        <div className=" flex gap-8 items-center ">
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
          <p>{blog?.description.slice(0, 150)}</p>
        </div>
        <p className=" border-t border-gray-500"></p>
        <div>
          <Link href={`/blog/${blog?.id}`}>
            <Button className=" size-36 group-hover:scale-110">
              read more
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;
