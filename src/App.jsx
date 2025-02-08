import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import Auth from './auth/login';
import ProductPage from './productPage'
import { useSelector, useDispatch } from "react-redux";
import Notification from './Notification';
import { uiActions } from './auth/ui-slice';
import { fetchData, sendCartData } from './auth/cart-action';

function App() {
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.ui.notification);
  const isLoggedIn = useSelector((state) => state.auth.isLoggIn);
  const cart = useSelector((state) => state.cart);

  // State để kiểm soát lần render đầu tiên
  const [isFirstRender, setIsFirstRender] = useState(true);

  
  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])
  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
      return;
    }
    if(cart.change){
      dispatch(sendCartData(cart))
    }
   
  }, [cart, dispatch]);

  return (
    <>
      {notification && <Notification type={notification.type} mess={notification.mess} />}
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <ProductPage />}
    </>
  );
}

export default App;
