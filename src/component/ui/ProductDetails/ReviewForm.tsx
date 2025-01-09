"use client";
import { useCreateReviewMutation } from "@/redux/api/reviewApi";
import { useAppSelector } from "@/redux/hook";
import { Rating } from "@smastrom/react-rating";

import React, { useState } from "react";
import { toast } from "react-toastify";

const ReviewForm = ({ product }) => {
  const [rating, setRating] = useState(4.5);
  const { user } = useAppSelector((store) => store.auth);
  const [createReview] = useCreateReviewMutation();
  const handleToReview = async(e) => {
    try {
      e.preventDefault();
      const review = e?.target?.review?.value;
      const reviewField = {
        user: user?.id,
        productId: product?._id,
        rating,
        review,
      };
      const res = await createReview(reviewField).unwrap();
      if (res) {
        console.log(res);
        toast.success("success");
      }
    } catch (err:any) {
      toast.error(err?.data?.message)
    }
  };
  return (
    <div className="flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 dark:bg-gray-50 dark:text-gray-800">
      <div className="flex flex-col items-center w-full">
        <h2 className="text-3xl font-semibold text-center">
          Your opinion matters!
        </h2>
        <div className="flex flex-col items-center py-6 space-y-3">
          <span className="text-center">How was your experience?</span>
          <div className="flex space-x-3">
            <Rating
              style={{ maxWidth: 180 }}
              value={rating}
              onChange={(rating) => setRating(rating)}
            />
          </div>
        </div>
        <form onSubmit={handleToReview} className="flex flex-col w-full">
          <textarea
            rows={3}
            required
            name="review"
            placeholder="Message..."
            className="p-4 rounded-md resize-none dark:text-gray-800 dark:bg-gray-50 focus:outline-none border"
          ></textarea>
          <button
            type="submit"
            className="py-4 my-8 font-semibold rounded-md dark:text-gray-50 dark:bg-blue-600 uppercase"
          >
            Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReviewForm;
