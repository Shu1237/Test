import './App.css';

import Auth from './auth/login';
import ProductPage from './productPage'
import { useSelector, useDispatch } from "react-redux";

function App() {
  // value ban dau
  const isLoggedIn = useSelector((state) => state.auth.isLoggIn);
  console.log(isLoggedIn)
  return (
    <>
      {!isLoggedIn && <Auth />}
      {
        isLoggedIn && <ProductPage />
      }

    </>
  );
}

export default App;
