import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { ProductsContext, ProductProvider } from "./contexts/ProductsContext";
import { CartContext, CartProvider } from "./contexts/CartContext";
import { WishListContext, WishListProvider } from "./contexts/WishListContext";


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// Call make Server
makeServer();
export { ProductsContext, CartContext, WishListContext }
root.render(
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
  </React.StrictMode>
);
