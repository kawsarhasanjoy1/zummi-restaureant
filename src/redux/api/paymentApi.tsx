import { tagTypes } from "../TagTypes";
import { baseApi } from "./baseApi";

const paymentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    fetchPayment: build.query({
      query: (filters) => {
        const query = new URLSearchParams(filters).toString();
        return {
          url: `/get-payments?${query}`,
          method: "GET",
        };
      },
      providesTags: [tagTypes.payments],
    }),
    fetchUserPayment: build.query({
      query: ({ id, filters }) => {
        const query = new URLSearchParams(filters);
        return {
          url: `/get-payment/${id}?${query}`,
          method: "GET",
        };
      },
    }),
  }),
});

export const { useFetchPaymentQuery, useFetchUserPaymentQuery } = paymentApi;
