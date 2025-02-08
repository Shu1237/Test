import { configureStore, createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        itemsList: [],
        totalQuantity: 0,
        totalPriceAll: 0,
        showCart: false
    },
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload;
            const checkExist = state.itemsList.find((item) => item.id === newItem.id);
            if (checkExist) {
                checkExist.quantity++;
                checkExist.totalPrice += newItem.price;
            } else {
                state.itemsList.push({
                    id: newItem.id,
                    name: newItem.name,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                });
            }
            state.totalQuantity++;
            state.totalPriceAll = state.itemsList.reduce((sum, item) => sum + item.totalPrice, 0);


        },
        removeCart(state, action) {
            const id = action.payload;
            const checkExist = state.itemsList.find((item) => item.id === id);
            if (!checkExist) return;

            const isConfirmed = window.confirm("Do you want to delete this item?");
            if (!isConfirmed) return;


            state.itemsList = state.itemsList.filter((item) => item.id !== id);
            state.totalQuantity -= checkExist.quantity;
            state.totalPriceAll = state.itemsList.length > 0
                ? state.itemsList.reduce((sum, item) => sum + item.totalPrice, 0)
                : 0;  // k bi NA
        },

        up(state, action) {

            const id = action.payload.id;
            const price = action.payload.price

            const check = state.itemsList.find((item) => item.id === id)
            if (check) {
                check.totalPrice += price
                check.quantity++
                state.totalQuantity++
            }
            state.totalPriceAll = state.itemsList.length > 0
                ? state.itemsList.reduce((sum, item) => sum + item.totalPrice, 0)
                : 0;  // k bi NA
        },
        reduce(state, action) {
            const id = action.payload;
            const checkExist = state.itemsList.find((item) => item.id === id);
            if (checkExist.quantity === 1) {
                const isConfirmed = window.confirm("Do you want to delete this item?");
                if (!isConfirmed) return;
                state.itemsList = state.itemsList.filter((item) => item.id !== id);
            }
            else {
                checkExist.quantity--
                checkExist.totalPrice -= checkExist.price; 
            }
            state.totalQuantity--; 
            state.totalPriceAll = state.itemsList.length > 0
                ? state.itemsList.reduce((sum, item) => sum + item.totalPrice, 0)
                : 0;  // k bi NA
        },
        showCart(state) {
            state.showCart = !state.showCart;
        }
    }
})
export const cartAction = cartSlice.actions
export default cartSlice