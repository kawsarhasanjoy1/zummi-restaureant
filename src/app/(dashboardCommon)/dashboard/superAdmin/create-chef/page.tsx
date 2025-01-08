"use client";
import FileUpload from "@/component/Form/FileUpload";
import { Input } from "@/component/Form/Input";
import ZForm from "@/component/Form/ZForm";
import { defaultChefValues } from "@/constance/constance";
import useUploadImage from "@/hooks/useUploadImage";
import { useCreateChefMutation } from "@/redux/api/chefApi";
import React from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "react-toastify";

const page = () => {
  const [createChef] = useCreateChefMutation()
  const handleSubmitChef = async (e: FieldValues) => {
    const image = await useUploadImage(e?.image);
    if (image?.id) {
           e.image = image?.display_url;
           e.experience = Number(e?.experience);
           const result = await createChef(e).unwrap();
           if (result?.success) {
             toast.success(result?.message);
           }
         }

  };
  return (
    <div className="md:max-w-4xl w-full mx-auto p-6 bg-white shadow-lg rounded-lg border">
      <ZForm onSubmit={handleSubmitChef} defaultValues={defaultChefValues}>
        <div className="text-2xl text-black font-semibold text-center mb-6 flex justify-center items-center gap-6">
          <p className="border md:w-[300px] w-[80px]"></p>
          <p>Add Chef</p>
          <p className="border md:w-[300px] w-[80px]"></p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 mb-6">
          {/* Chef Name */}
          <div>
            <Input
              placeholder="Enter chef name"
              label="Name"
              editL="text-black"
              name="name"
              edit="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
            />
          </div>

          {/* Email */}
          <div>
            <Input
              placeholder="Enter chef email"
              label="Email"
              editL="text-black"
              name="email"
              edit="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="email"
            />
          </div>

          {/* Title */}
          <div>
            <Input
              placeholder="Enter chef title"
              label="Title"
              editL="text-black"
              name="title"
              edit="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
            />
          </div>

          {/* Experience */}
          <div>
            <Input
              placeholder="Enter years of experience"
              label="Experience"
              editL="text-black"
              name="experience"
              edit="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="number"
              min={0}
            />
          </div>

          {/* Contact Number */}
          <div>
            <Input
              placeholder="Enter contact number"
              label="Contact Number"
              editL="text-black"
              name="contactNumber"
              edit="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
            />
          </div>

          {/* Password */}
          <div>
            <Input
              placeholder="Enter password (optional)"
              label="Password"
              editL="text-black"
              name="password"
              edit="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="password"
            />
          </div>
        </div>

        {/* Description */}
        <div className="mb-6">
          <Input
            placeholder="Enter description"
            label="Description"
            editL="text-black"
            name="description"
            edit="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
          />
        </div>

        {/* Image */}
        <div className="mb-6">
          <FileUpload
            placeholder="Upload chef image"
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

export default page;
