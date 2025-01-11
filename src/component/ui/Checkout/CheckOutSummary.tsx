"use client";
import { useCreatePaymentMutation } from "@/redux/api/orderApi";
import { useAppSelector } from "@/redux/hook";
import { RiLoader2Line } from "react-icons/ri";

const CheckOutSummary = () => {
  const [createPayment, { isLoading, isError, isSuccess, error }] =
    useCreatePaymentMutation();
  const { user } = useAppSelector((store: any) => store.auth);
  const { priceOfTotalSelectedProducts, selectedProducts, order } =
    useAppSelector((store: any) => store.order);

  const products = order.map((p) => ({
    productId: p?.productId,
    quantity: p?.quantity,
  }));
  
  const HandleToOrder = async (e) => {
    e.preventDefault();
    const target = e?.target;
    const name = target.name.value;
    const number = target.number.value;
    const district = target.district.value;
    const subdistrict = target.subdistrict.value;
    const data = {
      products: products,
      userId: user?.id,
      email: user?.email,
      quantity: selectedProducts,
      price: 15 * selectedProducts + priceOfTotalSelectedProducts,
      name,
      number,
      district,
      subdistrict,
    };
    try {
      const response = await createPayment(data).unwrap();
      if (response?.url) {
        window.location.replace(response.url);
      }
    } catch (err) {
      console.error("Payment failed:", err);
    }
  };

  return (
    <div className=" space-y-4">
      <p className=" font-semibold text-xl">Checkout Summary</p>
      <div className="">
        <p className=" border-t-2 py-2 border-dotted flex justify-between">
          <span>Total order</span> <span>{selectedProducts}</span>
        </p>
        <p className=" border-t-2 py-2 border-dotted flex justify-between">
          <span> Sub total </span>
          <span>${priceOfTotalSelectedProducts}</span>
        </p>
        <p className=" border-t-2 py-2 border-dotted flex justify-between">
          <span> Shipping</span> <span>{15 * selectedProducts}</span>
        </p>
        <p className=" border-t-2 py-2 border-dotted flex justify-between border-b-2">
          <span>Total</span>{" "}
          <span>${15 * selectedProducts + priceOfTotalSelectedProducts}</span>
        </p>
      </div>
      <p className=" text-xl font-semibold">Shipping address</p>
      <form onSubmit={HandleToOrder}>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            required
            placeholder="Name"
            className="peer w-full rounded-sm border border-[#1B8EF8] px-4 py-2 text-black focus:outline-none"
            name="name"
            type="text"
          />
          <input
            placeholder="Contract number"
            required
            className="peer w-full rounded-sm border border-[#1B8EF8] px-4 py-2 text-black focus:outline-none"
            name="number"
            type="number"
          />
          <input
            placeholder="District"
            required
            className="peer w-full rounded-sm border border-[#1B8EF8] px-4 py-2 text-black focus:outline-none"
            name="district"
            type="text"
          />
          <input
            placeholder="subDistrict"
            required
            className="peer w-full rounded-sm border border-[#1B8EF8] px-4 py-2 text-black focus:outline-none"
            name="subdistrict"
            type="text"
          />
        </div>

        <button
          disabled={isLoading}
          type="submit"
          className=" uppercase w-full border border-cyan-300   bg-cyan-300 hover:bg-transparent  duration-300 py-2 rounded-md mt-2 flex justify-center items-center"
        >
          {isLoading ? <RiLoader2Line size={20} /> : "Pay Now"}
        </button>
      </form>
    </div>
  );
};

export default CheckOutSummary;
