import { configureStore, createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name:'auth',
    initialState :{isLoggIn:false},
    reducers:{
        login(state){
            state.isLoggIn=true
        },
        logout(state){
            state.isLoggIn=false
        }
    }

})
export  const authAcctions = authSlice.actions
export default authSlice
