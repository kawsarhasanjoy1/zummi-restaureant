"use client";
import CommonBanner from "@/component/Common/CommonBanner";
import EmptyCard from "@/component/EmptyCard/EmptyCard";
import CheckOutCart from "@/component/ui/Checkout/CheckOutCart";
import CheckOutSummary from "@/component/ui/Checkout/CheckOutSummary";
import { clearToOrder } from "@/redux/api/features/orderSlice";
/* eslint-disable react-hooks/rules-of-hooks */
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { verifyToken } from "@/utils/verifyToken/verifyToken";
import { MdCancel } from "react-icons/md";


const Page = () => {
  const data = useAppSelector((store: any) => store.order.order);
  const { token } = useAppSelector((store: any) => store.auth);

  let user: any = null;
  if (token) {
    try {
      user = verifyToken(token);
    } catch (error) {
      console.error("Invalid token:", error);
    }
  }

  const filter = data?.filter((item: any) => item?.userId == user?.id);
  const dispatch = useAppDispatch();

  return (
    <>
      <div>
        <CommonBanner name="CheckOut" />
      </div>
      {data?.length ? (
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-[#FFFF] p-5 shadow-md">
            <div className="flex justify-between font-bold text-xl py-3 text-black">
              <p> Order </p>
              <button
                onClick={() => dispatch(clearToOrder({ order: [] }))}
                className="flex justify-center items-center gap-1 bg-red-600 hover:bg-red-700 duration-300 text-sm text-white rounded-md px-2 py-1"
              >
                <MdCancel />
                Clear Order
              </button>
            </div>
            <div className=" ">
              <div className="space-y-4">
                {filter?.map((order: any) => (
                  <CheckOutCart key={order?.productId} order={order} />
                ))}
              </div>
            </div>
          </div>
          <div className="p-10 bg-[#FFFFFF] shadow-xl text-black">
            <CheckOutSummary />
          </div>
        </div>
      ) : (
        <div>
          <EmptyCard />
        </div>
      )}
    </>
  );
};

export default Page;
