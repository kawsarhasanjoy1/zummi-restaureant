import SingleBlog from "@/component/ui/Blog/SingleBlog";
import React from "react";
import blogs from "../../../../../public/blog.json";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Page = ({ params }: { params: any }) => {
  const { blogId } = params;
  const singleBlog = blogs.filter((blog) => blog._id === blogId); 

  return (
    <div>
      {singleBlog.length > 0 ? (
        singleBlog.map((blog) => <SingleBlog key={blog._id} blog={blog} />)
      ) : (
        <p>No blog found with the given ID.</p>
      )}
    </div>
  );
};

export default Page;
