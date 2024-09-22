import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5001/api/v1" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (data) => {
        console.log(data)
        const params = new URLSearchParams();
        if (data) {
          params.append('category',data)
        }
        console.log(params)
        return {
          url: "/products",
          method: "GET",
          params:params
        };
      },
    }),
    addProducts: builder.mutation({
      query: (data) => ({
        url: "/products",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetProductsQuery, useAddProductsMutation } = baseApi;
