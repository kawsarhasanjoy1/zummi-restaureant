import { tagTypes } from "../TagTypes";
import { baseApi } from "./baseApi";

const reviewApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createReview: build.mutation({
      query: (data) => ({
        url: "/create-review",
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.review],
    }),
    getReview: build.query({
      query: (filters) => {
        const query = new URLSearchParams(filters);
        return {
          url: `/get-reviews?${query}`,
          method: "GET",
        };
      },
      providesTags: [tagTypes.review]
    }),
    getUserReview: build.query({
      query: ({id,filters}) => {
        const query = new URLSearchParams(filters);
        return {
          url: `/get-review/${id}?${query}`,
          method: "GET",
        };
      },
      providesTags: [tagTypes.review]
    }),
    deleteReview: build.mutation({
      query: (id) => ({
        url: `/delete-review/${id}`,
        method: "DELETE",
      }),
       invalidatesTags: [tagTypes.review],
    }),
  }),
});

export const { useCreateReviewMutation, useGetReviewQuery , useDeleteReviewMutation, useGetUserReviewQuery} = reviewApi;
