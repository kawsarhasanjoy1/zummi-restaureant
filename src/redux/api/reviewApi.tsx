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
      invalidatesTags: [tagTypes.review]
    }),
    getReview: build.query({
      query: () => ({
        url: "/get-reviews",
        method: "GET",
      }),
      providesTags: [tagTypes.review]
    }),
  }),
});

export const { useCreateReviewMutation, useGetReviewQuery } = reviewApi;
