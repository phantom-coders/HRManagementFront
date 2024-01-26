import { baseApi } from "./baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    verifyEmail: build.mutation({
      query: (loginData) => ({
        url: `/user/verify-email`,
        method: "POST",
        data: loginData,
        contentType: "application/json",
      }),
    }),
    createUser: build.mutation({
      query: (userData) => ({
        url: `/user/create-user`,
        method: "POST",
        data: userData,
        contentType: "application/json",
      }),
      invalidatesTags: ["user"],
    }),
    loginUser: build.mutation({
      query: (loginData) => ({
        url: `/user/login-user`,
        method: "POST",
        data: loginData,
        contentType: "application/json",
      }),
      invalidatesTags: ["user"],
    }),
  }),
});
export const {
  useVerifyEmailMutation,
  useCreateUserMutation,
  useLoginUserMutation,
} = authApi;
