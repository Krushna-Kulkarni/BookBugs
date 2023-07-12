import { Routes, Route } from "react-router-dom"
import "./App.css";
import Mockman from "mockman-js";

import { Products } from "./pages/Products/Products";
import { Product } from "./pages/Product/Product";
import { Cart } from "./pages/Cart/Cart";
import { WishList } from "./pages/WishList/WishList";
import { Checkout } from "./pages/Checkout/Checkout";

import { ToastContainer } from 'react-toastify';
import { Profile } from "./pages/Profile/Profile";
import { PageNotFound } from "./pages/PageNotFound/PageNotFound";
import { Home } from "./pages/Home/Home";
import { useEffect } from "react";


function App() {

  useEffect(() => {
    document.body.style.zoom = "90%";
  }, []);


  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishList" element={<WishList />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/user" element={<Profile />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
