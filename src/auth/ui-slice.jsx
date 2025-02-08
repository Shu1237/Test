import { createAction, createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: 'ui',
    initialState: { notification: null },
    reducers: {
        showNotification(state, action) {
            state.notification = {
                type: action.payload.type,
                mess: action.payload.mess,
                open: action.payload.open
            }
        },
        hidenNotification(state) {
            state.notification = null;
        }
    }
})
export const uiActions = uiSlice.actions
export default uiSlice