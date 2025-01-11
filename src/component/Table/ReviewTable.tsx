import { useDeleteReviewMutation } from "@/redux/api/reviewApi";
import { formatDate } from "@/utils/FormateDate/FormateDate";
import Image from "next/image";
import React from "react";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { toast } from "react-toastify";

const ReviewTable = ({ review }: { review: Record<string, any> }) => {
  const [deleteReview] = useDeleteReviewMutation();
  const HandleToDelete = async (e) => {
    try {
      const res = await deleteReview(e).unwrap();
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
        <div className="flex items-center">
          <div>
            <Image
              className=" w-12 h-12 rounded-full"
              src={review?.productId?.image || ''}
              width={50}
              height={50}
              alt=""
            />
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
        <div className="text-sm leading-5 text-blue-900">
          {review?.productId?.name}
        </div>
      </td>

      <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
        {review?.rating}
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
        {review?.productId?.category}
      </td>

      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">
        {formatDate(
          review?.createdAt ? review?.createdAt : "2025-01-07T06:47:53.307Z"
        )}
      </td>

      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">
        <RiDeleteBin2Fill
          className=" cursor-pointer"
          onClick={() => HandleToDelete(review?._id)}
          size={20}
        />
      </td>
    </tr>
  );
};

export default ReviewTable;
