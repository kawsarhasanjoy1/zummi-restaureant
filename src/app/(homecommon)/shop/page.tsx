"use client";
import CommonBanner from "@/component/Common/CommonBanner";
import Shop from "@/component/ui/Shop/Shop";
import React, { useState } from "react";
import CommonSelect from "@/component/Common/CommonSelect";
import { useGetProductsQuery } from "@/redux/api/productApi";
import Pagination from "@/QueryBuilders/Pagination";

const page = () => {
  const [selectedValue, setSelectedValue] = useState<string | null>("-createdAt");
  console.log(selectedValue)
  const [filters, setFilters] = useState({
    page: 1,
    limit: 8,
    searchTerm: "",
    sort: selectedValue,
    // name: "",
  });

  const { error, data, refetch, isLoading } = useGetProductsQuery(filters);
  const handleFilterChange = (newFilters) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };
  const handleToSearch = (e) => {
    setFilters((prevQuery) => ({
      ...prevQuery,
      searchTerm: e.target.value,
    }));
    refetch();
  };

  const handlePageChange = (newPage: number) => {
    handleFilterChange({ page: newPage });
  };
  return (
    <div>
      <div>
        <CommonBanner name="Shop" />
      </div>
      <div className=" flex justify-center items-center py-10">
        <input
          className=" focus:outline-none border-none px-4 py-3 w-80 rounded-xl"
          onChange={handleToSearch}
          type="search"
          placeholder="Please search your products"
          name=""
          id=""
        />
      </div>
      <div className=" md:px-24 px-2 mt-10">
        <div className=" flex justify-between my-11">
          <p className=" uppercase">Product</p>
          <div>
            <CommonSelect
              selectedValue={selectedValue}
              setSelectedValue={setSelectedValue}
            />
          </div>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-4 gap-10">
          {data?.data?.result?.map((product) => (
            <Shop key={product?._id} product={product} />
          ))}
        </div>
        <div className=" mt-10">
          {data?.data?.meta && (
            <Pagination
              meta={data?.data?.meta}
              onPageChange={handlePageChange}
              edit="text-black"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default page;
