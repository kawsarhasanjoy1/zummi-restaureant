"use client";
import React, { use } from "react";
import { FieldValues } from "react-hook-form";
import IngredientsFields from "@/component/Form/addIntrigation";
import FileUpload from "@/component/Form/FileUpload";
import useUploadImage from "@/hooks/useUploadImage";
import { defaultAddProduct } from "@/constance/constance";
import { useAppSelector } from "@/redux/hook";
import { toast } from "react-toastify";
import { useGetProductQuery } from "@/redux/api/productApi";
import ZForm from "@/component/Form/ZForm";
import { Input } from "@/component/Form/Input";

const page = ({ params }: any) => {
  const resolvedParams = use(params) as any;
  const id = resolvedParams?.productId;
  const { data } = useGetProductQuery(id);
  const updateData = data?.data;

  // Properly structure the default data

  const { user } = useAppSelector((store) => store.auth);

  const updateProduct = async (e: FieldValues) => {
    try {
      const res = await useUploadImage(e?.image);
      if (res?.id) {
        e.image = res?.display_url;
        e.userId = user?.id;
        e.stock = Number(e?.stock);
        e.price = Number(e?.price);
        e.priceOff = Number(e?.priceOff);
        e.additionalInfo.calories = Number(e.additionalInfo.calories);
        // const result = await createProduct(e).unwrap();
        // if (result?.success) {
        //   toast.success(result?.message);
        // }
      }
    } catch (err: any) {
      toast.error(err?.data?.message);
    }
  };

  return (
    <div className="md:max-w-4xl w-full mx-auto p-6 bg-white shadow-lg rounded-lg border">
      <ZForm onSubmit={updateProduct} defaultValues={updateData}>
        <div className="text-2xl text-black font-semibold text-center mb-6 flex justify-center items-center gap-6">
          <p className=" border md:w-[300px] w-[80px]"></p>
          <p>Add Product</p>
          <p className=" border md:w-[300px] w-[80px]"></p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 mb-6">
          {/* Product Name */}
          <div>
            <Input
              placeholder="Enter product name"
              label="Name"
              editL="text-black"
              name="name"
              edit="w-full  border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              type="text"
            />
          </div>

          {/* Product Title */}
          <div>
            <Input
              placeholder="Enter product title"
              label="Title"
              editL="text-black"
              name="title"
              edit="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
            />
          </div>

          {/* Stock */}
          <div>
            <Input
              placeholder="Enter stock quantity"
              label="Stock"
              editL="text-black"
              name="stock"
              edit="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="number"
              min={1}
            />
          </div>

          {/* Category */}
          <div>
            <Input
              placeholder="Enter product category"
              label="Category"
              editL="text-black"
              name="category"
              edit="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
            />
          </div>

          {/* Price */}
          <div>
            <Input
              placeholder="Enter product price"
              label="Price"
              editL="text-black"
              name="price"
              edit="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="number"
              min={1}
            />
          </div>

          {/* Discount Price */}
          <div>
            <Input
              placeholder="Enter discount price"
              label="Discount Price"
              editL="text-black"
              name="priceOff"
              min={1}
              edit="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="number"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Ingredients */}
          <div className="col-span-2">
            <div className="space-y-4">
              {/* Use useFieldArray to handle dynamic inputs */}
              <IngredientsFields name="ingredients" />
            </div>
          </div>
        </div>
        {/* Description */}

        <div className=" mb-6">
          <Input
            placeholder="Enter product description"
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
            placeholder="Enter product image URL"
            label="Image"
            editL="text-black"
            name="image"
            edit="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="file"
          />
        </div>

        {/* Additional Info */}

        <div className=" grid grid-cols-1 md:grid-cols-2 md:gap-6 mb-6 ">
          <div>
            <Input
              placeholder="Enter calories"
              label="Calories"
              editL="text-black"
              name="additionalInfo.calories"
              edit="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              min={1}
              type="number"
            />
          </div>
          <div>
            <Input
              placeholder="Enter protein value"
              label="Protein"
              editL="text-black"
              name="additionalInfo.protein"
              edit="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
            />
          </div>

          <div>
            <Input
              placeholder="Enter total fat"
              label="Total Fat"
              editL="text-black"
              name="additionalInfo.totalFat"
              edit="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
            />
          </div>
          <div>
            <Input
              placeholder="Enter product size"
              label="Size"
              editL="text-black"
              name="additionalInfo.size"
              edit="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
            />
          </div>
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
