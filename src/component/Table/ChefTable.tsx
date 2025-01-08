import { useDeleteUserMutation } from "@/redux/api/userApi";
import { formatDate } from "@/utils/FormateDate/FormateDate";
import Image from "next/image";
import React from "react";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { toast } from "react-toastify";

const ChefTable = ({ chef }: { chef: Record<string, any> }) => {
  return (
    <tr>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
        <div className="flex items-center">
          <div>
            <Image
              className=" w-12 h-12 rounded-full"
              src={chef?.image}
              width={50}
              height={50}
              alt=""
            />
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
        <div className="text-sm leading-5 text-blue-900">{chef?.name}</div>
      </td>

      <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
        {chef?.title}
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
        {chef?.email}
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
        {chef?.contactNumber}
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
        {chef?.experience}
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">
        {formatDate("2025-01-07T06:47:53.307Z")}
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">
        <p
          className={`border flex justify-center items-center ${
            chef?.role == "chef"
              ? "bg-red-200 opacity-80 text-black rounded-full"
              : "bg-green-200 opacity-80 text-black rounded-full"
          }`}
        >
          {chef?.role}
        </p>
      </td>

      {/* <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">
        <RiDeleteBin2Fill
          className=" cursor-pointer"
          onClick={() => HandleToDelete(chef?._id)}
          size={20}
        />
      </td> */}
    </tr>
  );
};

export default ChefTable;
