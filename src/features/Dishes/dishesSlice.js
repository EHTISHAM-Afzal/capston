import { createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../Api/ApiSlice";

const dishesAdapter = createEntityAdapter({
  selectId: (dish) => dish._id
});

const initialState = dishesAdapter.getInitialState();

export const dishesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getDishes: builder.query({
      query: () => "/dishes",
      transformResponse: (responseData) => {
        return dishesAdapter.setAll(initialState, responseData);
      },
      providesTags: (result) => [
        { type: "Dishes", id: "LIST" },
        ...result.ids.map((id) => ({ type: "Dishes", id })),
      ],
    }),
  }),
});

export const { useGetDishesQuery } = dishesApiSlice;
