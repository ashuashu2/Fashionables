import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {BrowserRouter } from "react-router-dom"
import App from "./App";
import { makeServer } from "./server";
import { StoreProvider } from "./context/storeContext";
import { FilterProvider } from "./context/filterContext";
import { CartProvider } from "./context/cartContext";
import { WishlistProvider } from "./context/wishlistContext";


// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <FilterProvider>
    <StoreProvider>
      <CartProvider>
        <WishlistProvider> 
      <App />
      </WishlistProvider>
      </CartProvider>
    </StoreProvider>
    </FilterProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
