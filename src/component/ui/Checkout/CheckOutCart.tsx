import {
  removeFromOrder,
  updateQuantity,
} from "@/redux/api/features/orderSlice";
import { useAppDispatch } from "@/redux/hook";
import Image from "next/image";
import { GiCancel } from "react-icons/gi";
import { toast } from "react-toastify";

const CheckOutCart = ({ order }: { order: any }) => {
//   console.log(order);
  const dispatch = useAppDispatch();
  const handleToQuantity = (id: string, type: string) => {
    const action = { id, type };
    dispatch(updateQuantity(action));
  };
  const HandleToDelete = (id: any) => {
    try {
      const res = dispatch(removeFromOrder(id));
      console.log(res);
      if (res.type) {
        toast.success("Order deleted successful");
      }
    } catch (err: any) {
      toast.error(err?.message);
    }
  };
  return (
    <div className=" border-b shadow-sm flex justify-between items-center px-3 py-2 text-black space-y-4">
      <div className="">
        <Image
          className=" w-16 h-16 rounded-full"
          height={50}
          width={50}
          src={order?.image}
          alt={order?.name}
        />
      </div>
      <div className=" md:w-28 w-20 md:text-sm text-[9px]">
        <p>{order?.name}</p>
      </div>
      <div className=" md:text-[16px] text-[10px] font-bold">
        <p>${(order.price * order.quantity).toFixed(2)}</p>
      </div>
      <div className=" flex md:gap-2 items-center border-2 h-full">
        <button
          onClick={() => handleToQuantity(order.productId, "decrement")}
          className=" md:text-2xl text-sm border-r-2 font-bold md:p-2 p-1"
        >
          -
        </button>
        <p className=" px-2 bg-white shadow-md">
          {order?.quantity ? order?.quantity : 0}
        </p>
        <button
          onClick={() => handleToQuantity(order.productId, "increment")}
          className=" md:text-2xl text-sm border-l-2 font-bold md:p-2 p-1"
        >
          +
        </button>
      </div>

      <div className=" flex gap-2 items-center bg-red-100 hover:bg-red-200 md:px-3 px-1 py-1 duration-500 rounded-full">
        <button onClick={() => HandleToDelete(order.productId)}>
          <GiCancel size={20} />
        </button>
      </div>
    </div>
  );
};

export default CheckOutCart;
