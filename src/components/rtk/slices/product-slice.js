import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchProduct = createAsyncThunk('productsslice/fetchProducts', async () => {
   const res = await fetch('https://fakestoreapi.com/products')
   const data = await res.json()
   return data;
});
const productsslice = createSlice({
    initialState: [],
    name: 'Productsslice',
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProduct.fulfilled, (state, action) => {
            return action.payload
        })
    }
});



export const {} = productsslice.actions;
export default productsslice.reducer;