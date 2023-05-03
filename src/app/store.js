import { configureStore } from '@reduxjs/toolkit'
import filterReducer from "./slices/filterSlice";
import cartReducer from "./slices/cartSlice";
import borschReducer from "./slices/borschSlice";

export const store = configureStore({
    reducer: {
        filterReducer,
        cartReducer,
        borschReducer,
    },
})
