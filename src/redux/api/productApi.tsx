import { tagTypes } from "../TagTypes";
import { baseApi } from "./baseApi";
const productApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createProduct: build.mutation({
      query: (data) => ({
        url: "/create-product",
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.products]
    }),
    getProducts: build.query({
      query: (filters) => {
        const query = new URLSearchParams(filters).toString();
        return {
          url: `/get-products?${query}`,
          method: "GET",
        };
      },
      providesTags: [tagTypes.products]
    }),
    getProduct: build.query({
      query: (id: string) => ({
        url: `/get-product/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.products]
    }),
    deleteProduct: build.mutation({
      query: (id: string) => ({
        url: `/delete-product/${id}`,
        method: "DELETE",
      }),
      invalidatesTags:[tagTypes.products]
    }),
  }),
});

export const {
  useCreateProductMutation,
  useGetProductQuery,
  useGetProductsQuery,
  useDeleteProductMutation,
} = productApi;
