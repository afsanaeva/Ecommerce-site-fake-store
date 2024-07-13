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
  const token = localStorage.getItem('token');

  return (
    <>
      <Router>
        <Toaster />
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={token ? <Products /> : <Navigate to="/login" />} />
          <Route path="/cart" element={token ? <CartItems /> : <Navigate to="/login" />} />
          <Route path="/checkout" element={token ? <CheckoutPage /> : <Navigate to="/login" />} />
          <Route path="/success" element={token ? <Success /> : <Navigate to="/login" />} />
          <Route path="/cancel" element={token ? <Cancel /> : <Navigate to="/login" />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
