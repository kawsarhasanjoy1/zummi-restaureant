"use client";
import Image from "next/image";
import { CiCalendarDate } from "react-icons/ci";
import { RiAdminLine, RiShareLine } from "react-icons/ri";
import BlogRight from "./BlogRight";
import CommonSwiper from "@/component/Common/CommonSwiper";
import CommonBanner from "@/component/Common/CommonBanner";
import { useFetchBlogQuery } from "@/redux/api/blogApi";
import { formatDate } from "@/utils/FormateDate/FormateDate";
import { motion } from "framer-motion";

const SingleBlog = ({ blog }: { blog: any }) => {
  const { data: blogData, isLoading, isError } = useFetchBlogQuery(undefined);
  console.log(blog);
  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen">
      <CommonBanner name="Blog Details" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20 mt-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 space-y-8">
            {blog?.image && (
              <div className="relative h-[300px] md:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  className="object-cover"
                  src={blog?.image}
                  fill
                  priority
                  alt={blog?.title || "Blog Image"}
                />
              </div>
            )}

            <div className="flex flex-wrap items-center justify-between border-b border-gray-100 dark:border-white/5 pb-6 gap-4">
              <div className="flex gap-6 items-center text-sm font-medium text-gray-500 uppercase tracking-widest">
                <p className="flex items-center gap-2 hover:text-yellow-600 transition-colors">
                  <CiCalendarDate className="text-xl text-yellow-500" />
                  {formatDate(blog?.createdAt)}
                </p>
                <p className="flex items-center gap-2 hover:text-yellow-600 transition-colors">
                  <RiAdminLine className="text-xl text-yellow-500" />
                  By {blog?.author || "Admin"}
                </p>
              </div>
              <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-tighter hover:text-yellow-500 transition-all">
                <RiShareLine className="text-lg" /> Share
              </button>
            </div>

            <article className="space-y-6">
              <h1 className="text-3xl md:text-5xl font-black uppercase leading-tight text-gray-900 dark:text-white">
                {blog?.title}
              </h1>

              <div
                className="prose prose-lg md:prose-xl dark:prose-invert max-w-none 
  prose-p:text-gray-600 dark:prose-p:text-gray-400 prose-p:leading-relaxed
  prose-headings:text-gray-900 dark:prose-headings:text-white
  prose-img:rounded-3xl prose-strong:text-yellow-600
  selection:bg-yellow-200 selection:text-black
  pb-10 overflow-hidden" // overflow-hidden যোগ করা হয়েছে যাতে বড় টেবিল বা কোড ব্লক লেআউট না ভাঙে
                dangerouslySetInnerHTML={{
                  __html: blog?.description || "", // Fallback empty string
                }}
              />
            </article>
            {blog?.description?.replace(/<[^>]*>?/gm, "")}
          </div>

          {/* Sidebar Area */}
          <aside className="lg:col-span-4">
            <div className="sticky top-28 space-y-8">
              {isLoading ? (
                <div className="h-96 w-full animate-pulse bg-gray-100 dark:bg-white/5 rounded-2xl" />
              ) : isError ? (
                <p className="text-red-500">Failed to load sidebar.</p>
              ) : (
                <div className="bg-gray-50 dark:bg-white/5 p-8 rounded-3xl border border-gray-100 dark:border-white/5">
                  <BlogRight blogs={blogData?.data?.result} />
                </div>
              )}
            </div>
          </aside>
        </div>

        {/* Related Swiper Section */}
        <div className="mt-40 mb-20 border-t border-gray-100 dark:border-white/5 pt-20">
          <div className="flex flex-col mb-10">
            <span className="text-yellow-500 font-bold uppercase tracking-[0.3em] text-xs">
              Explore more
            </span>
            <h2 className="text-3xl font-black uppercase mt-2">
              Related Articles
            </h2>
          </div>

          {isLoading ? (
            <div className="h-64 w-full animate-pulse bg-gray-100 dark:bg-white/5 rounded-2xl" />
          ) : (
            <CommonSwiper blogs={blogData?.data?.result} />
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default SingleBlog;
