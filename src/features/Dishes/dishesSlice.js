import { createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../Api/ApiSlice";

const dishesAdapter = createEntityAdapter({
  selectId: (dish) => dish._id
});

const initialState = dishesAdapter.getInitialState();

export const dishesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getDishes: builder.query({
      query: () => "/products",
      transformResponse: (responseData) => {
        return dishesAdapter.setAll(initialState, responseData);
      },
      providesTags: (result) => [
        { type: "Dishes", id: "LIST" },
        ...result.ids.map((id) => ({ type: "Dishes", id })),
      ],
    }),

    getDishesByCatagoryId: builder.query({
      query: (catagoryId) => `/products?catagory=${catagoryId}`,
      transformResponse: (responseData) => {
        return dishesAdapter.upsertMany(initialState,responseData);
      },
      providesTags: (result) => [
        { type: "Dishes", id: "LIST" },
        ...result.ids.map((id) => ({ type: "Dishes", id })),
      ],
    }),

    getDishById: builder.query({
      query: (id) => `/products/${id}`,
      transformResponse: (responseData) => {
        return dishesAdapter.setAll(initialState, [responseData]);
      },
      providesTags: (result) => [
        ...result.ids.map((id) => ({ type: "Dishes", id })),
      ],
    }),
  })
});

export const { useGetDishesQuery , useGetDishByIdQuery , useGetDishesByCatagoryIdQuery} = dishesApiSlice;
