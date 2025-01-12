import { formatDate } from "@/utils/FormateDate/FormateDate";
import Image from "next/image";
import React from "react";

const SuperAdminTable = ({ order }: { order: Record<string, any> }) => {
  return (
    <tr>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
        <div className="flex items-center">
          <div className=" w-10">
            {order?.products?.map((product) => (
              <Image
                className=" w-8 h-8 rounded-full object-cover"
                src={product?.productId?.image}
                width={50}
                height={50}
                alt=""
              />
            ))}
          </div>
          <div>
            <div className="text-sm leading-5 text-blue-900">
              {order?.products?.map((product) => product?.productId?.category)}
            </div>
            <div className="text-sm leading-5 text-blue-900 w-28">
              {order?.products?.map((product) => product?.productId?.name)}
            </div>
          </div>
        </div>
      </td>

      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
        <div className="text-sm leading-5 text-blue-900 w-32">
          {order?.name}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
        <div className="text-sm leading-5 text-blue-900 w-32">
          {order?.quantity}
        </div>
      </td>
     
      <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
        {order?.price.toFixed(2)}
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
        <p
          className={`${
            order?.status ? "bg-green-400" : " bg-red-500"
          } px-2 py-1 rounded-full text-white`}
        >
          {" "}
          {order?.status === true ? "Complete" : "Incomplete"}
        </p>
      </td>

      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">
        {formatDate(
          order?.createdAt ? order?.createdAt : "2025-01-07T06:47:53.307Z"
        )}
      </td>
    </tr>
  );
};

export default SuperAdminTable;
