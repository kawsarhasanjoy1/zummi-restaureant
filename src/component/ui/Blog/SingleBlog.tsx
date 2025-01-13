"use client";
import Image from "next/image";
import { CiCalendarDate } from "react-icons/ci";
import { RiAdminLine } from "react-icons/ri";
import BlogRight from "./BlogRight";
import CommonSwiper from "@/component/Common/CommonSwiper";
import CommonBanner from "@/component/Common/CommonBanner";
import { useFetchBlogQuery } from "@/redux/api/blogApi";
import { formatDate } from "@/utils/FormateDate/FormateDate";


const SingleBlog = ({ blog }: { blog: any }) => {
  const { data: blogData, isLoading, isError, refetch } = useFetchBlogQuery(undefined);

  return (
    <div className="px-2">
      {/* Banner Section */}
      <div>
        <CommonBanner name="Blog Details" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-14 md:px-20 mt-28">
        {/* Blog Details */}
        <div className="space-y-4 col-span-8">
          {/* Blog Image */}
          {blog?.image && (
            <Image
              className="w-full max-w-[700px] h-[400px] pb-4 object-cover"
              src={blog?.image}
              width={700}
              height={400}
              quality={100}
              alt={blog?.title || "Blog Image"}
            />
          )}

          {/* Blog Metadata */}
          <div className="flex gap-8 items-center">
            <p className="flex items-center gap-2">
              <CiCalendarDate />
              {formatDate(blog?.createdAt)}
            </p>
            <p className="flex items-center gap-2">
              <RiAdminLine />
              By Admin
            </p>
          </div>

          {/* Blog Title and Description */}
          <div className="space-y-3">
            <p className="text-2xl uppercase">{blog?.title}</p>
            <div
              className="blog-content"
              dangerouslySetInnerHTML={{
                __html: blog?.description, // Using sanitized HTML content
              }}
            />
          </div>
        </div>

        {/* Blog Sidebar */}
        <div>
          {isLoading ? (
            <p>Loading related blogs...</p>
          ) : isError ? (
            <p className="text-red-500">Failed to load related blogs.</p>
          ) : (
            <BlogRight blogs={blogData?.data?.result} />
          )}
        </div>
      </div>

      {/* Swiper Section */}
      <div className="mt-48">
        {isLoading ? (
          <p>Loading blogs...</p>
        ) : isError ? (
          <p className="text-red-500">Failed to load swiper blogs.</p>
        ) : (
          <CommonSwiper blogs={blogData?.data?.result} />
        )}
      </div>
    </div>
  );
};

export default SingleBlog;
