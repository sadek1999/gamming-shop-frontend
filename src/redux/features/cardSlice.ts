import { createSlice } from "@reduxjs/toolkit";


const initialState={
    products: [] as any,
    selectedItems: 0,
    totalPrice: 0,
    tax: 0,
    taxRate: 0.1,
    grandTotal: 0,
}


export const cardSlice=createSlice({
    name:"card",
    initialState,
    reducers:{
        addProduct:(state,action)=>{
            state.products.push({...action.payload})
        }
    }
})

export const {addProduct}=cardSlice.actions;

export default cardSlice.reducer;