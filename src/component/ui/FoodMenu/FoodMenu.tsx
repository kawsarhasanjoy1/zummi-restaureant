"use client";
import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FoodMenuCart from "./FoodMenuCart";
import FoodVideo from "./FoodVideo";
import CommonDesign from "@/component/Common/CommonDesign";
import SelectButton from "@/component/Button/SelectButton";
import { useGetProductsQuery } from "@/redux/api/productApi";
import LoadingSpinner from "@/app/loading";

const FoodMenu = () => {
  const [activeTab, setActiveTab] = useState("morning");
  const { data, isLoading } = useGetProductsQuery(undefined);

  const categories = ["morning", "lunch", "dinner", "fast food", "beverage"];

  const filteredItems = useMemo(() => {
    return data?.data?.result
      ?.filter((menu: any) => menu?.category === activeTab)
      ?.slice(0, 4) || [];
  }, [data, activeTab]);

  if (isLoading) return <LoadingSpinner />;

  return (
    <section className="pt-24 pb-20 px-4 md:px-0 bg-[#f9f9f9] dark:bg-gray-950 transition-colors duration-500">
      <div className="flex flex-col justify-center items-center space-y-3 mb-12">
        <CommonDesign>From Our Menu</CommonDesign>
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-gray-900 dark:text-white">
          Our Special Offers
        </h2>
        <div className="w-20 h-1 bg-yellow-500 rounded-full" />
      </div>

      <div className="max-w-[1500px] mx-auto md:px-10 lg:px-20">
        <div className="flex flex-wrap border-b border-gray-200 dark:border-gray-800 justify-center items-center gap-2 md:gap-6 mb-16 pb-4 sticky top-20 bg-white/5 backdrop-blur-md z-10">
          {categories.map((cat, index) => (
            <React.Fragment key={cat}>
              <SelectButton
                tab={cat}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
              {index !== categories.length - 1 && (
                <span className="hidden md:block bg-yellow-500/30 w-1.5 h-1.5 rounded-full" />
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="min-h-[400px]">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
          >
            <AnimatePresence mode="wait">
              {filteredItems.length > 0 ? (
                filteredItems.map((item: any) => (
                  <motion.div
                    key={item?._id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FoodMenuCart menu={item} />
                  </motion.div>
                ))
              ) : (
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="col-span-full text-center text-gray-500 py-20"
                >
                  No items found in this category.
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-24 rounded-3xl overflow-hidden shadow-2xl"
        >
          <FoodVideo />
        </motion.div>
      </div>
    </section>
  );
};

export default FoodMenu;