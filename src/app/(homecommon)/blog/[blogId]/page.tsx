"use client";
import React, { use } from "react";
import { useFetchSingleBlogQuery } from "@/redux/api/blogApi";
import SingleBlog from "@/component/ui/Blog/SingleBlog";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Page = ({ params }: { params: any }) => {
  const blogId = use<any>(params).blogId;
  const { data,refetch } = useFetchSingleBlogQuery(blogId);
  console.log(data);
  return (
    <div>
      <SingleBlog blog={data?.data} />
    </div>
  );
};

export default Page;
