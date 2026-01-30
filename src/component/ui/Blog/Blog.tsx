"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiCalendarDate } from "react-icons/ci";
import { RiAdminLine } from "react-icons/ri";
import Button from "@/component/Button/Button";

const Blog = ({ blog }: { blog: any }) => {
  return (
    <div className="group space-y-4 overflow-hidden border border-gray-100 dark:border-white/10 bg-white dark:bg-gray-900 shadow-sm hover:shadow-xl transition-all duration-300 rounded-2xl">
      <div className="relative h-[250px] md:h-[400px] overflow-hidden">
        <Image
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          src={blog?.image}
          fill
          quality={100}
          alt={blog?.title || "blog image"}
        />
      </div>

      <div className="space-y-6 px-6 py-6 md:px-8 md:py-8">
        {/* Meta Data */}
        <div className="flex gap-6 items-center text-sm font-medium text-gray-500 dark:text-gray-400">
          <p className="flex items-center gap-2 hover:text-yellow-600 transition-colors">
            <CiCalendarDate className="text-yellow-600 text-lg" />
            {blog?.date}
          </p>
          <p className="flex items-center gap-2 hover:text-yellow-600 transition-colors">
            <RiAdminLine className="text-yellow-600 text-lg" />
            By Admin
          </p>
        </div>

        {/* Title and Excerpt */}
        <div className="space-y-3">
          <h3 className="text-2xl font-black uppercase leading-tight text-gray-900 dark:text-white group-hover:text-yellow-600 transition-colors">
            {blog?.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 line-clamp-3">
            {blog?.description?.replace(/<[^>]*>?/gm, "").slice(0, 150)}...
          </p>
        </div>

        <div className="pt-4 border-t border-gray-100 dark:border-white/10">
          <Link href={`/blog/${blog?._id}`} className="inline-block">
            <Button className="group-hover:scale-105 transition-transform px-5 py-2 rounded-md">
              read more
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;
