import React from "react"
import Alert from '@mui/material/Alert';
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "./auth/ui-slice";
const Notification = ({ type, mess }) => {
    const dispatch = useDispatch()
    const notification = useSelector((state) => state.ui.notification);
    const handleClose =()=>{
        dispatch(uiActions.showNotification({
            open:false
        }))
    }
    return (
        <div>
            {
                notification.open && <Alert onClose={handleClose} severity={type}>
                    {mess}
                </Alert>
            }
        </div>
    )
}
export default Notification