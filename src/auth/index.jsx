import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authLogin";
import cartSlice from "../auth/cart";
const store =configureStore({
    reducer:{
        auth:authSlice.reducer,
        cart :cartSlice.reducer
    }
})
export default store