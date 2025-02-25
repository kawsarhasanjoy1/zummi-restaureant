"use client";
import { clearToOrder } from "@/redux/api/features/orderSlice";
import { useAppDispatch } from "@/redux/hook";
import Link from "next/link";
import React, { use } from "react";

const page = ({ params }) => {
  const id = use<any>(params).tranId;
  const dispatch = useAppDispatch();
  if (id) {
    dispatch(clearToOrder({ order: [] }));
  }
  return (
    <div className="bg-gray-100 h-screen">
      <div className=" flex flex-col justify-center items-center h-screen">
        <svg
          viewBox="0 0 24 24"
          className="text-green-600 w-16 h-16 mx-auto my-6"
        >
          <path
            fill="currentColor"
            d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
          />
        </svg>
        <div className="text-center">
          <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
            Payment Done!
          </h3>
          <p className="text-gray-600 my-2">
            Thank you for completing your secure online payment.
          </p>
          <p className=" text-black">Have a great day!</p>
          <div className="py-10 text-center">
            <Link href="/">
              <button className="px-12 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3">
                GO BACK
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
