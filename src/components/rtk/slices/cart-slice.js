import { createSlice } from "@reduxjs/toolkit";

export const cartslice =createSlice({
    initialState: [],
    name: 'cartslice',
    reducers : {
        addtocart: (state, action) => {
            const  findProduct = state.find((product) => product.id === action.payload.id);
            if (findProduct) {
                findProduct.quantity +=1;
            } else{
                    const Productsclone = {...action.payload, quantity: 1}
                state.push(Productsclone)
            }

        },
        deletecart: (state, action) => {
            return state.filter((product) => product.id !== action.payload.id)
        },
        clear: (state, action) => {
            return []
        },
    }
})


export const {
    addtocart,
    deletecart,
    clear,
} = cartslice.actions;

export  default cartslice.reducer;