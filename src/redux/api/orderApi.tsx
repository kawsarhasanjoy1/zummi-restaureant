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
    }),
    deleteUserOrder: build.mutation({
      query: (id) => ({
        url: `/delete-user-order/${id}`,
        method: "DELETE",
      }),
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
} = orderApi;
