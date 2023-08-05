import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/product-slice";
import cartslice from "./slices/cart-slice";
export const store = configureStore({
    reducer: {
        Products: productSlice,
        cart: cartslice,
    }
});