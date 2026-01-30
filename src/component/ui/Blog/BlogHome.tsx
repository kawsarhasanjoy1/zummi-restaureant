"use client";
import Image from "next/image";
import { MdOutlineDateRange, MdPersonOutline } from "react-icons/md";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import CommonDesign from "@/component/Common/CommonDesign";
import { useFetchBlogQuery } from "@/redux/api/blogApi";
import { formatDate } from "@/utils/FormateDate/FormateDate";
import { motion } from "framer-motion";

const BlogHome = () => {
  const { data, isLoading } = useFetchBlogQuery(undefined);

  if (isLoading) return null; 

  return (
    <section className="mt-40 mb-24 px-6 md:px-12 lg:px-24 max-w-[1500px] mx-auto">

      <div className="flex flex-col items-center md:items-start space-y-4 mb-16">
        <CommonDesign>Latest Articles</CommonDesign>
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-gray-900 dark:text-white">
          Insights & Food Stories
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        {data?.data?.result?.slice(0, 3)?.map((blog: any, index: number) => (
          <motion.div
            key={blog?._id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group bg-white dark:bg-[#1c1c1c] rounded-2xl overflow-hidden border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-2xl transition-all duration-500"
          >

            <div className="relative h-[260px] overflow-hidden">
              <Image
                className="transition-transform duration-700 ease-out group-hover:scale-110 object-cover"
                src={blog?.image}
                fill
                alt={blog?.title}
              />
      
              <div className="absolute top-4 left-4 bg-yellow-500 text-black text-[10px] font-bold uppercase px-3 py-1 rounded-full">
                Culinary
              </div>
            </div>

  
            <div className="p-7 space-y-5">
              <div className="flex items-center justify-between text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest border-b border-gray-100 dark:border-white/5 pb-4">
                <div className="flex items-center gap-2">
                  <MdOutlineDateRange className="text-yellow-600 text-lg" />
                  <span>{formatDate(blog?.createdAt)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MdPersonOutline className="text-yellow-600 text-lg" />
                  <span>By {blog?.name || "Admin"}</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-yellow-600 transition-colors duration-300 leading-snug min-h-[56px]">
                {blog?.title?.length > 55 ? `${blog?.title.slice(0, 55)}...` : blog?.title}
              </h3>

  
              <Link 
                href={`/blog/${blog?._id}`}
                className="inline-flex items-center gap-3 text-sm font-black uppercase tracking-widest text-gray-900 dark:text-white hover:text-yellow-600 transition-all group/btn"
              >
                Read Article
                <FaArrowRightLong className="transition-transform duration-300 group-hover/btn:translate-x-2 text-yellow-600" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BlogHome;