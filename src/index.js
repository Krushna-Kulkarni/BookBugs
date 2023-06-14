import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom"
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { ProductsContext, ProductProvider } from "./contexts/ProductsContext";
import { CartContext, CartProvider } from "./contexts/CartContext";
import { WishListContext, WishListProvider } from "./contexts/WishListContext";

// Call make Server
makeServer();
export { ProductsContext, CartContext, WishListContext }
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductProvider>
        <CartProvider>
          <WishListProvider>
            <App />
          </WishListProvider>
        </CartProvider>
      </ProductProvider>
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById("root")
);
