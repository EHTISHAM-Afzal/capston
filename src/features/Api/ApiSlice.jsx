import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice =  createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://littlelemon-oi3w.onrender.com/api'
    }),
    tagTypes: ['Dishes' , 'User'],
    endpoints: () => ({}),
})