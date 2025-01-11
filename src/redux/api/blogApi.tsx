import { baseApi } from "./baseApi";

const blogApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createBlog: build.mutation({
      query: (data) => ({
        url: "/create-blog",
        method: "POST",
        data,
      }),
    }),
    fetchBlog: build.query({
      query: (filters) => {
        const query = new URLSearchParams(filters).toString();
        return {
          url: `/get-blogs?${query}`,
          method: "GET",
        };
      },
    }),
    fetchSingleBlog: build.query({
      query: (id) => (
        {
          url: `/get-blog/${id}`,
          method: "GET",
        }
      ),
    }),
  }),
});

export const {
  useCreateBlogMutation,
  useFetchBlogQuery,
  useFetchSingleBlogQuery,
} = blogApi;
