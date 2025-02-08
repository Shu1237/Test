import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authLogin";
import cartSlice from "../auth/cart";
import uiSlice from "./ui-slice";
const store =configureStore({
    reducer:{
        auth:authSlice.reducer,
        cart :cartSlice.reducer,
        ui :uiSlice.reducer
    }
})
export default store