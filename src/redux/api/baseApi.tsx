import { createApi } from "@reduxjs/toolkit/query/react";
import { TagTypeList } from "../TagTypes";
import { axiosBaseQuery } from "@/helpers/axios/axiosBaseQuery";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: axiosBaseQuery({
    baseUrl: "https://zummi-backend.vercel.app/api/v1",
  }),
  endpoints: (builder) => ({}),
  tagTypes: TagTypeList,
});
