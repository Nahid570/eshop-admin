import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { logout, setCredentials } from "../auth/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:4000/api",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;

    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return token;
  },
});

// baseQuery with re-auth
const baseQueryWithReauth = async (args, api, extraOption) => {
  let result = await baseQuery(args, api, extraOption);

  if (result.originalStatus === 401) {
    // Try to get a new token
    const refreshResult = await baseQuery("/user/refresh-token");
   
    if (refreshResult?.data) {
      // Store the new token
      api.dispatch(setCredentials());
      // retry the original query with new access token
      result = await baseQuery(args, api, extraOption);
    } else {
      api.dispatch(logout());
    }
  }
  return result;
};

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReauth,
  keepUnusedDataFor: 5,
  endpoints: () => ({}),
});
