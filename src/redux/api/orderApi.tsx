import { tagTypes } from "../TagTypes";
import { baseApi } from "./baseApi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createPayment: build.mutation({
      query: (data) => ({
        url: "/create-payment-order",
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.orders],
    }),
    fetchOrder: build.query({
      query: (filters) => {
        const query = new URLSearchParams(filters).toString();
        return {
          url: `/get-orders?${query}`,
          method: "GET",
        };
      },
      providesTags: [tagTypes.orders],
    }),
    fetchUserOrder: build.query({
      query: ({ id, filters }) => {
        const query = new URLSearchParams(filters).toString();
        return {
          url: `/get-user-order/${id}?${query}`,
          method: "GET",
        };
      },
      providesTags: [tagTypes.orders],
    }),
    getUserStats: build.query({
      query: (id) => {
        return {
          url: `/get-user-stats/${id}`,
          method: "GET",
        };
      },
      providesTags: [tagTypes.orders],
    }),
    getChefStats: build.query({
      query: () => {
        return {
          url: `/get-chef-stats`,
          method: "GET",
        };
      },
      providesTags: [tagTypes.orders],
    }),
    getAdminStats: build.query({
      query: () => {
        return {
          url: `/get-admin-stats`,
          method: "GET",
        };
      },
      providesTags: [tagTypes.orders],
    }),
    deleteUserOrder: build.mutation({
      query: (id) => ({
        url: `/delete-user-order/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.orders],
    }),
    deleteOrder: build.mutation({
      query: (id) => ({
        url: `/delete-order/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.orders],
    }),
  }),
});

export const {
  useFetchOrderQuery,
  useCreatePaymentMutation,
  useDeleteOrderMutation,
  useDeleteUserOrderMutation,
  useFetchUserOrderQuery,
  useGetAdminStatsQuery,
  useGetUserStatsQuery,
  useGetChefStatsQuery,
} = orderApi;
