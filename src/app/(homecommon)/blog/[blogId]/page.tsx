import SingleBlog from "@/component/ui/Blog/SingleBlog";
import React from "react";
import blogs from '../../../../../public/blog.json'

const page = ({ params }: {params: any}) => {
  const singleBlog = blogs?.filter(blog => blog?._id == params?.blogId)
  console.log(singleBlog)
  return (
    <div>
      {
        singleBlog?.map(blog => <SingleBlog key={blog?._id} blog={blog} />)
      }
    </div>
  );
};

export default page;
