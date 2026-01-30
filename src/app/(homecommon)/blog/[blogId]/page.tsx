"use client";
import React, { use } from "react";
import { useFetchSingleBlogQuery } from "@/redux/api/blogApi";
import SingleBlog from "@/component/ui/Blog/SingleBlog";
const Page = ({ params }: { params: any }) => {
  const blogId = use<any>(params).blogId;
  console.log(blogId)
  const { data,refetch } = useFetchSingleBlogQuery(blogId);

  return (
    <div>
      <SingleBlog blog={data?.data} />
    </div>
  );
};

export default Page;
