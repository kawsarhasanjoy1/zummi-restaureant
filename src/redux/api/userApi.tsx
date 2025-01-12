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
      invalidatesTags: [tagTypes.user]
    }),
    loginUser: build.mutation({
      query: (data) => ({
        url: "/login",
        method: "POST",
        data: data,
      }),
    }),
    upRole: build.mutation({
      query: ({ id, role }) => ({
        url: `/update-role/${id}`,
        method: "POST",
        body: role,
      }),
      invalidatesTags: [tagTypes.user]
    }),
    fetchAllUser: build.query({
      query: (filters) => {
        const query = new URLSearchParams(filters).toString();
        return {
          url: `/all-user?${query}`,
          method: "GET",
        };
      },
      providesTags: [tagTypes.user],
    }),
    getAllUser: build.query({
      query: () => ({
        url: `/fetch-users`,
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }),
    fetchAdmin: build.query({
      query: () => ({
        url: `/fetch-admin`,
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }),
    deleteUser: build.mutation({
      query: (id) => {
        return {
          url: `/delete-user/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: [tagTypes.user],
    }),
  }),
});

export const {
  useCreateUserMutation,
  useLoginUserMutation,
  useUpRoleMutation,
  useFetchAllUserQuery,
  useDeleteUserMutation,
  useGetAllUserQuery,
  useFetchAdminQuery
} = userApi;
