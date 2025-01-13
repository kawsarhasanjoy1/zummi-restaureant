"use client";
import LoadingSpinner from "@/app/loading";
import EmptyCard from "@/component/EmptyCard/EmptyCard";
import Pagination from "@/QueryBuilders/Pagination";
import { useFetchOrderQuery } from "@/redux/api/orderApi";
import React, { useEffect, useState } from "react";
import SuperAdminTable from "../../HomeTable/SuperAdminTable";
import StaticCard from "../../component/StaticCard/StaticCard";
import Chart from "../../component/Chart/Chart";
import { useGetActivityQuery } from "@/redux/api/recentActivity";
import { getTimeAgo } from "@/utils/LastActiveFromate/LastActiveFormate";
import LastActiveUser from "../LastActiveUser/LastActiveUser";

const SuperAdminHome = () => {
  const { data: activity } = useGetActivityQuery(undefined);

  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const [filters, setFilters] = useState({
    page: 1,
    limit: 8,
    searchTerm: "",
    sort: "-createdAt",
    // name: "",
  });

  const { error, data, refetch, isLoading } = useFetchOrderQuery(filters);

  if (isLoading) {
    return <LoadingSpinner />;
  }
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
    <div className={isDark ? "dark" : ""}>
      <div>
        <StaticCard />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-medium mb-4">Overview Chart</h2>
        <Chart />
      </div>
      <div>
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
                <table className="min-w-auto">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                        Products
                      </th>
                      <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                        Name
                      </th>
                      <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                        Quantity
                      </th>

                      <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                        Amount
                      </th>
                      <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                        Status
                      </th>

                      <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                        Created Date{" "}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {data?.data?.result?.map((order) => (
                      <SuperAdminTable key={order?._id} order={order} />
                    ))}
                  </tbody>
                </table>
                <div className=" text-black">
                  {data?.data?.meta && (
                    <Pagination
                      meta={data?.data?.meta}
                      onPageChange={handlePageChange}
                    />
                  )}
                </div>
              </div>
              <table className=" w-full mt-10 bg-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                      Image
                    </th>

                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                      Name
                    </th>

                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                      Role
                    </th>
                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="">
                  {activity?.data?.map((activeUser) => (
                    <LastActiveUser key={activeUser?._id} user={activeUser} />
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <EmptyCard />
          )}
        </div>
      </div>
    </div>
  );
};

export default SuperAdminHome;
