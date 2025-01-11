import { tagTypes } from "../TagTypes";
import { baseApi } from "./baseApi";

const blogApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createBlog: build.mutation({
      query: (data) => ({
        url: "/create-blog",
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.blog]
    }),
    fetchBlog: build.query({
      query: (filters) => {
        const query = new URLSearchParams(filters).toString();
        return {
          url: `/get-blogs?${query}`,
          method: "GET",
        };
      },
      providesTags: [tagTypes.blog]
    }),
    fetchSingleBlog: build.query({
      query: (id) => (
        {
          url: `/get-blog/${id}`,
          method: "GET",
        }
      ),
      providesTags: [tagTypes.blog]
    }),
  }),
});

export const {
  useCreateBlogMutation,
  useFetchBlogQuery,
  useFetchSingleBlogQuery,
} = blogApi;
