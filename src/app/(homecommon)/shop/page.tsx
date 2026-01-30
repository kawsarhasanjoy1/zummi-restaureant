"use client";
import CommonBanner from "@/component/Common/CommonBanner";
import Shop from "@/component/ui/Shop/Shop";
import React, { useEffect, useState } from "react";
import CommonSelect from "@/component/Common/CommonSelect";
import { useGetProductsQuery } from "@/redux/api/productApi";
import Pagination from "@/QueryBuilders/Pagination";
import LoadingSpinner from "@/app/loading";
import { FiSearch } from "react-icons/fi";

const ShopPage = () => {
  const [selectedValue, setSelectedValue] = useState<string | null>(
    "-createdAt",
  );

  const [filters, setFilters] = useState({
    page: 1,
    limit: 8,
    searchTerm: "",
    sort: "-createdAt",
  });

  useEffect(() => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      sort: selectedValue ?? "-createdAt",
      page: 1,
    }));
  }, [selectedValue]);

  const { data, refetch, isLoading } = useGetProductsQuery(filters);

  if (isLoading) return <LoadingSpinner />;

  const handleToSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters((prevQuery) => ({
      ...prevQuery,
      searchTerm: e.target.value,
    }));
    refetch();
  };

  const handlePageChange = (newPage: number) => {
    setFilters((prev) => ({ ...prev, page: newPage }));
  };

  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen pb-20">

      <CommonBanner name="Our Shop" />

      <div className="max-w-[1500px] mx-auto px-4 -mt-8 relative z-10">
        <div className="flex justify-center">
          <div className="relative w-full max-w-2xl group">
            <input
              className="w-full pl-14 pr-6 py-5 rounded-2xl bg-white dark:bg-gray-900 shadow-2xl border border-gray-100 dark:border-white/10 focus:ring-2 focus:ring-yellow-500 text-black dark:text-white outline-none transition-all duration-300"
              onChange={handleToSearch}
              type="search"
              placeholder="Search for your favorite food..."
            />
            <FiSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-2xl group-focus-within:text-yellow-500 transition-colors" />
          </div>
        </div>
      </div>

      <div className="max-w-[1500px] mx-auto md:px-12 px-4 mt-20">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 pb-6 border-b border-gray-100 dark:border-white/5 gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h2 className="text-2xl font-black uppercase tracking-tight text-gray-900 dark:text-white">
              Food Menu
            </h2>
            <p className="text-sm text-gray-500 font-medium">
              Showing {data?.data?.result?.length || 0} delicious items
            </p>
          </div>

          <div className="flex items-center gap-4 bg-gray-50 dark:bg-white/5 px-4 py-2 rounded-xl border border-gray-100 dark:border-white/10">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
              Sort By:
            </span>
            <CommonSelect
              selectedValue={selectedValue}
              setSelectedValue={setSelectedValue}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {data?.data?.result?.map((product: any) => (
            <div
              key={product?._id}
              className="transform hover:-translate-y-2 transition-transform duration-300"
            >
              <Shop product={product} />
            </div>
          ))}
        </div>

        {data?.data?.result?.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-xl font-medium">
              No products found. Try a different search!
            </p>
          </div>
        )}

        <div className="mt-24 flex justify-center border-t border-gray-100 dark:border-white/5 pt-12">
          {data?.data?.meta && (
            <Pagination
              meta={data?.data?.meta}
              onPageChange={handlePageChange}
              edit="text-black dark:text-white font-bold"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
