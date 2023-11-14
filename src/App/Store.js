import { configureStore, } from "@reduxjs/toolkit";
import { apiSlice } from "../features/Api/ApiSlice";
import cartReducer from "../features/Cart/CartSlice";

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath] : apiSlice.reducer,
        cart : cartReducer
    },
    middleware : getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
})