import { configureStore, } from "@reduxjs/toolkit";
import { apiSlice } from "../features/Api/ApiSlice";

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath] : apiSlice.reducer,
    },
    middleware : getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
})