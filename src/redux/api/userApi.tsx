import { tagTypes } from "../TagTypes";
import { baseApi } from "./baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createUser: build.mutation({
      query: (data) => ({
        url: "/create-user",
        method: "POST",
        body: data,
      }),
    }),
    loginUser: build.mutation({
      query: (data) => ({
        url: "/login",
        method: "POST",
        body: data,
      }),
    }),
    upRole: build.mutation({
      query: ({ id, role }) => ({
        url: `/update-role/${id}`,
        method: "POST",
        body: role,
      }),
    }),
    fetchAllUser: build.query({
      query: () => ({
        url: `users`,
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }),
  }),
});

export const {
  useCreateUserMutation,
  useLoginUserMutation,
  useUpRoleMutation,
  useFetchAllUserQuery,
} = userApi;
