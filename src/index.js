import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { ProductsContext, ProductProvider } from "./contexts/ProductsContext";
import { CartContext, CartProvider } from "./contexts/CartContext";
import { WishListContext, WishListProvider } from "./contexts/WishListContext";
import { ToastContext, ToastProvider } from "./contexts/ToastContext";

import ScrollToTop from "./helpers/ScrollToTop";
import { UserDetailsContext, UserDetailsProvider } from "./contexts/UserDetailsContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// Call make Server
makeServer();
export { ProductsContext, CartContext, WishListContext, ToastContext, UserDetailsContext }
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductProvider>
        <CartProvider>
          <WishListProvider>
            <ToastProvider>
              <UserDetailsProvider>
                <ScrollToTop />
                <App />
              </UserDetailsProvider>
            </ToastProvider>
          </WishListProvider>
        </CartProvider>
      </ProductProvider>
    </BrowserRouter>
  </React.StrictMode>
);
