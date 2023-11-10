import { createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../Api/ApiSlice";
const TablesAdapter = createEntityAdapter({
    selectId: (Table) => Table._id
});

const initialState = TablesAdapter.getInitialState();

export const TablesApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getTables: builder.query({
            query: () => "/tables",
            transformResponse: (responseData) => {
                return TablesAdapter.setAll(initialState, responseData);
            },
            providesTags: (result) => [
                { type: "Tables", id: "LIST" },
                ...result.ids.map((id) => ({ type: "Tables", id })),
            ],
        }),

        getAvailableTimesOnDate: builder.query({
            query: (date) => `/tables?AvailibleTimesOnDate=${date}`,
            transformResponse: (responseData) => {
                return responseData; // Assuming the API returns the array directly
            },
            providesTags: () => [{ type: "AvailableTimes", id: "LIST" }],
        }),

        getTableById: builder.query({
            query: (id) => `/tables/${id}`,
            transformResponse: (responseData) => {
                return TablesAdapter.setAll(initialState, [responseData]);
            },
            providesTags: (result) => [
                ...result.ids.map((id) => ({ type: "Tables", id })),
            ],
        }),

        BookTable: builder.mutation({
            query: (postData) =>   ({
                url: "http://localhost:3002/api/tables",
                method: "POST",
                body: postData
            }),
            invalidatesTags: [{ type: "Post", id: "LIST" }],
        }),
    }),
});


export const { useGetTablesQuery, useGetTableByIdQuery , useBookTableMutation , useGetAvailableTimesOnDateQuery } = TablesApiSlice;
