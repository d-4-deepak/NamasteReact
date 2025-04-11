import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{
        addItems:(state,action)=>{
            state.items.push(action.payload);
        },
        removeItems:(state,action)=>{
            state.items.pop();
        },
        clear : (state,action)=>{
            state.items.length = 0; //[]
        }

    }
})
console.log("cartSlice.reducer",cartSlice.reducer);
console.log("cartSlice.actions",cartSlice.actions);

export const {addItems,removeItems,clear} = cartSlice.actions;

export default cartSlice.reducer;