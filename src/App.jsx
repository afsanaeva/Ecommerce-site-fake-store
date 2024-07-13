import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import Navbar from "./components/Navbar";
import CartItems from "./components/CartItems";
import { Toaster } from "react-hot-toast";
import Success from "./components/Success";
import Cancel from "./components/Cancel";
import CheckoutPage from "./components/Checkout";

function App() {
  return (
    <>
      <Router>
        <Toaster />
        <Navbar />

        <Routes>
          <Route path="*" element={<Products />} />
          <Route path="/Cart" element={<CartItems />} />
          <Route path="/Checkout" element={<CheckoutPage/>} />
          <Route path="/success" element={<Success />} />
          <Route path="/cancel" element={<Cancel />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
