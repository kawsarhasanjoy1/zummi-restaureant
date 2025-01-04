"use client";
import React from "react";
import Input from "@/component/Form/Input";
import ZForm from "@/component/Form/ZForm";
import { FieldValues, useFieldArray } from "react-hook-form";
import IngredientsFields from "@/component/Form/addIntrigation";
import FileUpload from "@/component/Form/FileUpload";

const page = () => {
  const handleToAddProduct = (e: FieldValues) => {
    console.log(e);
  };

  return (
    <div className="md:max-w-4xl w-full mx-auto p-6 bg-white shadow-lg rounded-lg border">
      <ZForm
        onSubmit={handleToAddProduct}
        defaultValues={{
          name: "",
          title: "",
          price: 0,
          description: "",
          stock: 0,
          category: "",
          ingredients: [{ name: "", quantity: "" }],
          image: "",
          additionalInfo: {
            calories: 0,
            protein: "",
            totalFat: "",
            size: "",
          },
          ratingAverage: 0,
          ratingQuantity: 0,
        }}
      >
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
              name="name"
              edit="w-full md:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
            />
          </div>

          {/* Product Title */}
          <div>
            <Input
              placeholder="Enter product title"
              label="Title"
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
              name="stock"
              edit="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="number"
            />
          </div>

          {/* Category */}
          <div>
            <Input
              placeholder="Enter product category"
              label="Category"
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
              name="price"
              edit="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="number"
            />
          </div>

          {/* Discount Price */}
          <div>
            <Input
              placeholder="Enter discount price"
              label="Discount Price"
              name="priceOff"
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
        {/* //Description */}

        <div className=" mb-6">
          <Input
            placeholder="Enter product description"
            label="Description"
            name="description"
            edit="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
          />
        </div>
        {/* Image */}
        <div className="mb-6">
          <FileUpload  placeholder="Enter product image URL"
            label="Image"
            name="file"
            edit="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"/>
        </div>

        {/* Additional Info */}

        <div className=" grid grid-cols-1 md:grid-cols-2 md:gap-6 mb-6 ">
          <div>
            <Input
              placeholder="Enter calories"
              label="Calories"
              name="additionalInfo.calories"
              edit="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="number"
            />
          </div>
          <div>
            <Input
              placeholder="Enter protein value"
              label="Protein"
              name="additionalInfo.protein"
              edit="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
            />
          </div>

          <div>
            <Input
              placeholder="Enter total fat"
              label="Total Fat"
              name="additionalInfo.totalFat"
              edit="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
            />
          </div>
          <div>
            <Input
              placeholder="Enter product size"
              label="Size"
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

// Dynamic Ingredient Fields

export default page;
