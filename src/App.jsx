import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Products from './components/Products';
import CartItems from './components/CartItems';
import CheckoutPage from './components/Checkout';
import Success from './components/Success';
import Cancel from './components/Cancel';
import Login from './Login';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <Router>
        <Toaster />
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<CartItems />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/success" element={<Success />} />
          <Route path="/cancel" element={<Cancel />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
