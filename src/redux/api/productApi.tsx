import { baseApi } from "./baseApi";
const productApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createProduct: build.mutation({
      query: (data) => ({
        url: "/create-product",
        method: "POST",
        data,
      }),
    }),
    getProducts: build.query({
      query: (filters) => {
        const query = new URLSearchParams(filters).toString();
        return {
          url: `/get-products?${query}`,
          method: "GET",
        };
      },
    }),
    getProduct: build.query({
      query: (id: string) => ({
        url: `/get-product/${id}`,
        method: "GET",
      }),
    }),
    deleteProduct: build.mutation({
      query: (id: string) => ({
        url: `//delete-product/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useCreateProductMutation,
  useGetProductQuery,
  useGetProductsQuery,
  useDeleteProductMutation,
} = productApi;
