import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom"
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { ProductsContext, ProductProvider } from "./contexts/ProductsContext";

// Call make Server
makeServer();
export {ProductsContext}
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <ProductProvider>
    <App/>
    </ProductProvider>
    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById("root")
);
