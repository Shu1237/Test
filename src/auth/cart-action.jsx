import { cartAction } from "./cart";
import axios from "axios";
import { uiActions } from "./ui-slice";


export const fetchData = () => {
    return async (dispatch) => {
        try {
            const res = await axios.get(
                "https://testredux-7dcf5-default-rtdb.firebaseio.com/cart.json"
            );

            if (res.status === 200 && res.data) {
                dispatch(cartAction.replaceData(res.data));
            }
        } catch (err) {
            dispatch(
                uiActions.showNotification({
                    type: "error",
                    mess: "Failed to fetch cart data",
                    open: true,
                })
            );
        }
    };
};

export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(
            uiActions.showNotification({
                type: "warning",
                mess: "Sending Request...",
                open: true,
            })
        );

        try {
            const res = await axios.put(
                "https://testredux-7dcf5-default-rtdb.firebaseio.com/cart.json",
                cart
            );

            if (res) {
                dispatch(
                    uiActions.showNotification({
                        type: "success",
                        mess: "Sent Request to Database Successfully!",
                        open: true,
                    })
                );
            }
        } catch (err) {
            dispatch(
                uiActions.showNotification({
                    type: "error",
                    mess: "Failed to request",
                    open: true,
                })
            );
        }
    };
};
