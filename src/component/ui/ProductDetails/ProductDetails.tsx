"use client";
import { TProduct } from "@/type/product";
import Image from "next/image";
import Link from "next/link";
import DetailsReview from "./DetailsReview";
import ReviewForm from "./ReviewForm";
import SelectButton from "@/component/Button/SelectButton";
import Button from "@/component/Button/Button";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { addToOrder } from "@/redux/api/features/orderSlice";
import { toast } from "react-toastify";
import { motion, AnimatePresence } from "framer-motion";

const defaultImage = "https://i.ibb.co.com/Z6nf9r3/istockphoto-1416818056-612x612.jpg";

const ProductDetails = ({ product, refetch }: { product: TProduct; refetch?: any }) => {
  const [activeTab, setActiveTab] = useState("description");
  const [quantity, setQuantity] = useState<number>(1);
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((store) => store?.auth);

  const currentPrice = product?.priceOff > 0 ? product?.priceOff : product?.price;
  const totalPrice = currentPrice * quantity;

  const handleQuantity = (type: "increase" | "decrease") => {
    if (type === "increase" && quantity < 20) setQuantity(prev => prev + 1);
    if (type === "decrease" && quantity > 1) setQuantity(prev => prev - 1);
  };

  const handleAddToCart = () => {
    if (!user) {
      return toast.warn("Please login to add items to cart!");
    }
    const order = {
      userId: user?.id,
      productId: product?._id,
      name: product?.name,
      quantity,
      category: product?.category,
      price: totalPrice,
      image: product?.image,
    };
    try {
      dispatch(addToOrder({ order }));
      toast.success(`${product?.name} added to cart!`);
    } catch (err: any) {
      toast.error(err?.message || "Failed to add to cart.");
    }
  };

  return (
    <div className="bg-white dark:bg-gray-950 pb-20">
      {/* Banner Section */}
      <div className="relative h-[400px] md:h-[500px] overflow-hidden">
        <Image
          className="w-full h-full object-cover blur-sm brightness-50"
          src={product?.image || defaultImage}
          width={1400}
          height={1000}
          alt="Banner"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-7xl font-black uppercase tracking-tighter"
          >
            Product Details
          </motion.h1>
          <div className="flex gap-2 text-sm md:text-base font-medium mt-4 uppercase">
            <Link className="hover:text-yellow-500 transition-colors" href="/">Home</Link>
            <span>/</span>
            <span className="text-yellow-500">Shop</span>
          </div>
        </div>
      </div>

      <div className="max-w-[1500px] mx-auto px-4 md:px-8 lg:px-12 mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Product Image Wrapper */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative group"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl bg-gray-100 dark:bg-white/5">
              <Image
                className="w-full h-[500px] md:h-[600px] object-cover hover:scale-105 transition-transform duration-700"
                src={product?.image || defaultImage}
                height={1200}
                width={800}
                alt={product?.name}
              />
            </div>
          </motion.div>

          {/* Product Info Section */}
          <div className="space-y-8">
            <div className="space-y-2">
              <span className="text-yellow-600 font-bold uppercase tracking-widest text-sm">
                {product?.category}
              </span>
              <h2 className="text-3xl md:text-5xl font-black uppercase text-gray-900 dark:text-white leading-none">
                {product?.name}
              </h2>
              <div className="flex items-center gap-4 pt-2">
                <p className="text-3xl font-bold text-red-600">${currentPrice}</p>
                {product?.priceOff > 0 && (
                  <p className="text-xl text-gray-400 line-through">${product?.price}</p>
                )}
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
              {product?.description}
            </p>

            {/* Ingredients Section */}
            <div className="bg-gray-50 dark:bg-white/5 p-6 rounded-2xl border border-gray-100 dark:border-white/5">
              <h4 className="text-lg font-bold uppercase mb-4 border-b pb-2">Main Ingredients</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product?.ingredients?.map((item, idx) => (
                  <div key={idx} className="flex justify-between text-sm font-medium uppercase text-gray-500">
                    <span>• {item?.name}</span>
                    <span className="text-gray-900 dark:text-white">{item?.quantity}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center bg-gray-100 dark:bg-white/10 rounded-full p-1 border border-gray-200 dark:border-white/10">
                <button 
                  onClick={() => handleQuantity("decrease")}
                  className="w-12 h-12 flex justify-center items-center hover:bg-white dark:hover:bg-gray-800 rounded-full transition-all text-xl font-bold"
                >-</button>
                <span className="w-10 text-center font-bold text-lg">{quantity}</span>
                <button 
                  onClick={() => handleQuantity("increase")}
                  className="w-12 h-12 flex justify-center items-center hover:bg-white dark:hover:bg-gray-800 rounded-full transition-all text-xl font-bold"
                >+</button>
              </div>

              <Button onClick={handleAddToCart} className="flex-1 md:flex-none px-12 py-4 h-auto rounded-full shadow-xl">
                Add To Cart — ${totalPrice.toFixed(2)}
              </Button>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mt-32">
          <div className="flex border-b border-gray-200 dark:border-white/10 justify-center gap-8 mb-12">
            {["description", "Additional Information", "review"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 text-sm font-bold uppercase tracking-widest transition-all relative ${
                  activeTab === tab ? "text-yellow-600" : "text-gray-400"
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-1 bg-yellow-600 rounded-full" />
                )}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="min-h-[300px]"
            >
              {activeTab === "description" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <p className="text-gray-600 dark:text-gray-400 leading-loose text-lg">{product?.description}</p>
                  <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl">
                    <Image src={product?.image || defaultImage} fill className="object-cover" alt="Desc" />
                  </div>
                </div>
              )}

              {activeTab === "Additional Information" && (
                <div className="max-w-4xl mx-auto overflow-hidden rounded-2xl border border-gray-100 dark:border-white/5">
                  <div className="grid grid-cols-4 bg-yellow-500 text-black p-4 font-bold uppercase text-center text-xs md:text-sm">
                    <span>Size</span><span>Calories</span><span>Total Fat</span><span>Protein</span>
                  </div>
                  <div className="grid grid-cols-4 bg-gray-50 dark:bg-white/5 p-6 text-center font-medium">
                    <span>{product?.additionalInfo?.size}</span>
                    <span>{product?.additionalInfo?.calories}</span>
                    <span>{product?.additionalInfo?.totalFat}g</span>
                    <span>{product?.additionalInfo?.protein}g</span>
                  </div>
                </div>
              )}

              {activeTab === "review" && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                  <div className="bg-gray-50 dark:bg-white/5 p-8 rounded-3xl">
                    <ReviewForm refetch={refetch} product={product} />
                  </div>
                  <DetailsReview product={product} />
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;