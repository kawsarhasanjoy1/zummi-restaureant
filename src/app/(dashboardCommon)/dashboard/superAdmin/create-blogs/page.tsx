"use client";

import FileUpload from "@/component/Form/FileUpload";
import { Input } from "@/component/Form/Input";
import ZForm from "@/component/Form/ZForm";
import { defaultBlogValues } from "@/constance/constance";
import useUploadImage from "@/hooks/useUploadImage";
import { useCreateBlogMutation } from "@/redux/api/blogApi";
import dynamic from "next/dynamic";
import { useRef, useState } from "react";
import { toast } from "react-toastify";

const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

const AddBlogForm = () => {
  const [description, setDescription] = useState("");
  const editor = useRef(null);
  const [createBlog] = useCreateBlogMutation();
  const handleSubmitBlog = async (data: any) => {
    const res = await useUploadImage(data?.image);
    if (res?.id) {
      const blogData = {
        ...data,
        description,
        image: res?.display_url,
      };
      const result = await createBlog(blogData).unwrap();
      console.log(result)
      if (result?.success) {
        toast.success(result?.message);
      }
    }
  };

  return (
    <div className="md:max-w-4xl w-full mx-auto p-6 bg-white shadow-lg rounded-lg border">
      <ZForm onSubmit={handleSubmitBlog} defaultValues={defaultBlogValues}>
        <div className="text-2xl text-black font-semibold text-center mb-6 flex justify-center items-center gap-6">
          <p className="border md:w-[300px] w-[80px]"></p>
          <p>Add Blog</p>
          <p className="border md:w-[300px] w-[80px]"></p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 mb-6">
          <div>
            <Input
              placeholder="Enter blog name"
              label="Name"
              editL="text-black"
              name="name"
              edit="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
            />
          </div>

          {/* Title */}
          <div>
            <Input
              placeholder="Enter blog title"
              label="Title"
              editL="text-black"
              name="title"
              edit="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
            />
          </div>
        </div>
        <div className="mb-6">
          <label className="text-black font-semibold mb-2 block">
            Description
          </label>
          <JoditEditor
            ref={editor}
            value={description}
            onChange={(newContent) => setDescription(newContent)}
            className="text-black"
          />
        </div>

        <div className="mb-6">
          <FileUpload
            placeholder="Upload blog image"
            label="Image"
            editL="text-black"
            name="image"
            edit="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="file"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg hover:bg-blue-600 mt-6"
        >
          Submit
        </button>
      </ZForm>
    </div>
  );
};

export default AddBlogForm;
