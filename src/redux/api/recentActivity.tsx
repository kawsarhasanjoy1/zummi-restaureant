import { baseApi } from "./baseApi";

const recentActivity = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getActivity: builder.query({
      query: () => ({
        url: "/recent-activities",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetActivityQuery } = recentActivity;
