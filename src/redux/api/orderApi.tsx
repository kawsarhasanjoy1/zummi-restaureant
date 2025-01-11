import { baseApi } from "./baseApi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createOrder: build.mutation({
      query: (data) => ({
        url: "/create-order",
        method: "POST",
        data: data,
      }),
    }),
    createPayment: build.mutation({
      query: (data) => ({
        url: "/payment",
        method: "POST",
        data: data,
      }),
    }),

    fetchOrder: build.query({
      query: (filters) => {
        const query = new URLSearchParams(filters).toString();
        return {
          url: `/get-order?${query}`,
          method: "GET",
        };
      },
    }),
  }),
});

export const {
  useFetchOrderQuery,
  useCreateOrderMutation,
  useCreatePaymentMutation,
} = orderApi;
