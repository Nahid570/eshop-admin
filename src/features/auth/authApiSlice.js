import { apiSlice } from "../api/apiSlice";

const extendedAuthApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userData) => ({
        url: "/user/login",
        method: "POST",
        body: userData,
      }),
    }),
    logout: builder.query({
      query: () => "/user/logout",
    }),
  }),
});

export const { useLoginMutation, useLogoutQuery } = extendedAuthApiSlice;
