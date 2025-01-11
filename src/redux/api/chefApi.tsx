import { tagTypes } from "../TagTypes";
import { baseApi } from "./baseApi";

const chefApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createChef: build.mutation({
      query: (data) => ({
        url: "/create-chef",
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.chef]
    }),
    fetchChef: build.query({
      query: (filters) => {
        const query = new URLSearchParams(filters).toString();
        return {
          url: `/get-chefs?${query}`,
          method: "GET",
        };
      },
      providesTags: [tagTypes.chef]
    }),
  }),
});

export const { useCreateChefMutation, useFetchChefQuery } = chefApi;
