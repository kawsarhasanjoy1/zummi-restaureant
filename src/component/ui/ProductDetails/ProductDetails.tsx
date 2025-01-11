"use client";
import Button from "@/component/Button/Button";
import { TProduct } from "@/type/product";
const image = "https://i.ibb.co.com/Z6nf9r3/istockphoto-1416818056-612x612.jpg";
import Image from "next/image";
import Link from "next/link";
import DetailsReview from "./DetailsReview";
import ReviewForm from "./ReviewForm";
import SelectButton from "@/component/Button/SelectButton";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { addToOrder } from "@/redux/api/features/orderSlice";
import { toast } from "react-toastify";

const ProductDetails = ({ product }: { product: TProduct }) => {
  const [activeTab, setActiveTab] = useState("description");
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((store) => store?.auth);
  const [quantity, setQuantity] = useState<number>(1);
  const HandleToCount = (e) => {
    const count = e == "increase" ? quantity + 1 : quantity - 1;
    setQuantity(count);
  };
  const totalPrice: number =
    product?.priceOff > 0
      ? Number(product?.priceOff * quantity)
      : Number(product?.price * quantity);
  const HandleToCart = () => {
    const order = {
      userId: user?.id,
      productId: product?._id,
      name: product?.name,
      quantity: quantity,
      category: product?.category,
      price: totalPrice,
      image: product?.image,
    };
    try {
      dispatch(addToOrder({ order: order }));
    } catch (err: any) {
      toast?.error(
        err?.message || "An error occurred while adding to the order."
      );
    }
  };
  return (
    <div className="">
      <div className=" relative">
        <Image
          className="w-full h-[600px] object-cover blur-sm"
          src={product?.image ? product?.image : image}
          width={1400}
          height={1000}
          quality={100}
          alt="Product Image"
        />
        <div className=" uppercase absolute top-[40%] flex flex-col justify-center items-center w-full">
          <p className=" md:text-8xl text-3xl">Shop Details</p>
          <div className="flex justify-center items-center gap-3">
            <Link className=" hover:text-yellow-600 duration-500" href={"/"}>
              home
            </Link>
            <p>{">"}</p>
            <p>Shop Details</p>
          </div>
        </div>
      </div>
      <div className=" md:px-24 px-3">
        <div className=" grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-10 mt-16">
          <div>
            <Image
              className=" md:h-[550px] md:w-[450px] w-full h-full rounded-md object-cover md:rounded-sm"
              src={product?.image ? product?.image : image}
              height={1200}
              width={800}
              quality={100}
              alt=""
            />
          </div>
          <div className=" space-y-7">
            <div className=" space-y-4 uppercase">
              <p className=" text-red-500 text-2xl">
                ${product?.priceOff ? product?.priceOff : product?.price}
              </p>
              <p className=" text-xl">{product?.name}</p>
              <p className=" text-xl">{product?.title}</p>
              <p className=" text-sm">{product?.description.slice(0, 200)}</p>
            </div>
            <div className=" flex items-center gap-4">
              <div className=" flex justify-center items-center gap-4 border w-32 bg-white text-black h-11">
                <button
                  disabled={quantity === 1}
                  onClick={() => HandleToCount("disIncrease")}
                  className=" text-xl"
                >
                  -
                </button>
                <p>{quantity}</p>
                <button
                  disabled={quantity === 20}
                  onClick={() => HandleToCount("increase")}
                  className=" text-xl"
                >
                  +
                </button>
              </div>
              <div className="">
                <Button className=" size-36 group-hover:scale-100">
                  <span onClick={HandleToCart}>Add to cart</span>
                </Button>
              </div>
            </div>
            <div>
              <p className=" uppercase">
                Category :{" "}
                <span className=" text-gray-400"> {product?.category}</span>
              </p>
            </div>
            <div className=" space-y-8">
              <p className=" uppercase text-xl">Ingredients Of Oysters</p>
              <div>
                {product?.ingredients?.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className=" flex gap-10 items-start text-md uppercase"
                    >
                      <p className=" w-60 mb-2">{item?.name}</p>
                      <p className="  ">{item?.quantity}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className=" flex justify-between items-center text-xl">
              <p className="">Total price</p>
              <p className=" text-red-500">${totalPrice.toFixed(2)} </p>
            </div>
          </div>
        </div>
        <div className=" md:mt-20 mt-12">
          <div className="flex border-b border-gray-400 justify-center text-white items-center md:gap-3 md:text-sm text-[10px] font-semibold mb-20">
            <SelectButton
              tab="description"
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            <p className=" bg-yellow-500 w-1 h-1 rounded-full"></p>
            <SelectButton
              tab="Additional Information"
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            <p className=" bg-yellow-500 w-1 h-1 rounded-full"></p>
            <SelectButton
              tab="review"
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </div>
        </div>
        <div>
          {activeTab == "description" ? (
            <div className=" md:flex justify-between space-y-7 md:space-y-0">
              <p>{product?.description}</p>
              <Image
                className=" md:w-72 md:h-52 w-full h-full rounded-md "
                src={product?.image ? product?.image : image}
                width={300}
                height={300}
                alt="Product image"
              />
            </div>
          ) : (
            ""
          )}
          {activeTab === "Additional Information" ? (
            <div className=" bg-gray-500 space-y-6 py-6">
              <div className=" grid grid-cols-4 justify-items-center text-red-600 md:text-xl text-sm uppercase">
                <p>Size</p>
                <p>Calories</p>
                <p>Total Fat (g)</p>
                <p>Protein (g)</p>
              </div>
              <div className=" grid grid-cols-4 justify-items-center text-md">
                <p>{product?.additionalInfo?.size}</p>
                <p>{product?.additionalInfo?.calories}</p>
                <p>{product?.additionalInfo?.totalFat}</p>
                <p>{product?.additionalInfo?.protein}</p>
              </div>
            </div>
          ) : (
            ""
          )}
          {activeTab === "review" ? (
            <div>
              <h2 className="font-manrope font-bold text-4xl text-white mb-8 text-center">
                Our customer reviews
              </h2>
              <div className=" grid grid-cols-1 md:grid-cols-2">
                <div className=" h-[500px]">
                  <ReviewForm product={product} />
                </div>
                <div>
                  <DetailsReview product={product} />
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
