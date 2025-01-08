import { baseApi } from "./baseApi";

const chefApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createChef: build.mutation({
      query: (data) => ({
        url: "/create-chef",
        method: "POST",
        data: data,
      }),
    }),
    fetchChef: build.query({
      query: (filters) => {
        const query = new URLSearchParams(filters).toString();
        return {
          url: `/get-chefs?${query}`,
          method: "GET",
        };
      },
    }),
  }),
});

export const { useCreateChefMutation, useFetchChefQuery } = chefApi;
