"use client";

import EmptyCard from "@/component/EmptyCard/EmptyCard";
import BlogTable from "@/component/Table/BlogTable";
import Pagination from "@/QueryBuilders/Pagination";
import { useFetchBlogQuery } from "@/redux/api/blogApi";
import { useState } from "react";

const page = () => {
  const [filters, setFilters] = useState({
    page: 1,
    limit: 2,
    searchTerm: "",
    sort: "-createdAt",
    // name: "",
  });

  const { error, data, refetch, isLoading } = useFetchBlogQuery(filters);
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
      {data?.data?.result?.length ? (
        <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 pr-10 lg:px-8">
          <div className="align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg">
            <div>
              <input
                onChange={handleToSearch}
                className=" border focus:outline-none px-4 py-2 rounded-md w-72 text-black "
                placeholder="Please search"
                type="search"
                name="search"
                id=""
              />
            </div>
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">
                    Image
                  </th>
                  <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                    Title
                  </th>

                  <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                    Created Date
                  </th>

                  <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                    Action
                  </th>

                  {/* <th className="px-6 py-3 border-b-2 border-gray-300"></th> */}
                </tr>
              </thead>
              <tbody className="bg-white">
                {data?.data?.result?.map((blog) => (
                  <BlogTable key={blog?._id} blog={blog} />
                ))}
              </tbody>
            </table>
            <div className=" text-black">
              {data?.data?.meta && (
                <Pagination
                  meta={data.data.meta}
                  onPageChange={handlePageChange}
                />
              )}
            </div>
          </div>
        </div>
      ) : (
        <EmptyCard />
      )}
    </div>
  );
};

export default page;
