import { useDeleteOrderMutation } from "@/redux/api/orderApi";
import { formatDate } from "@/utils/FormateDate/FormateDate";
import React from "react";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { toast } from "react-toastify";

const PaymentTable = ({ payment }: { payment: Record<string, any> }) => {
    console.log(payment)
  const [deleteOrder] = useDeleteOrderMutation();
  const HandleToDelete = async (e) => {
    try {
      const res = await deleteOrder(e).unwrap();
      if (res) {
        toast.success(res?.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <tr>
    
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
        <div className="text-sm leading-5 text-blue-900">{payment?.name}</div>
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
        <div className="text-sm leading-5 text-blue-900">
          {payment?.productId?.name}
        </div>
      </td>

      <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
        {payment?.number}
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
        {payment?.transactionId}
      </td>
    
      <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
        {payment?.price}
      </td>

      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">
        {formatDate(
          payment?.createdAt ? payment?.createdAt : "2025-01-07T06:47:53.307Z"
        )}
      </td>

      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">
        <RiDeleteBin2Fill
          className=" cursor-pointer"
          onClick={() => HandleToDelete(payment?._id)}
          size={20}
        />
      </td>
    </tr>
  );
};

export default PaymentTable;
