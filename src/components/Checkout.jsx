import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCustomerInfo, placeOrder } from "../Redux/CheckoutSlice";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
  const dispatch = useDispatch();
  const customerInfo = useSelector((state) => state.checkout.customerInfo);
  const orderPlaced = useSelector((state) => state.checkout.orderPlaced);

  const [formData, setFormData] = useState(customerInfo);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateCustomerInfo(formData));
    dispatch(placeOrder());
  };

  if (orderPlaced) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h2 className="text-2xl">Thank you for your order!</h2>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg p-8 border rounded-lg shadow-md"
      >
        <h2 className="text-2xl mb-4">Checkout</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="address">
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="city">
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-sm font-medium mb-1"
            htmlFor="postalCode"
          >
            Postal Code
          </label>
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>
        <Link to="/Success">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded"
          >
            Place Order
          </button>
        </Link>
      </form>
    </div>
  );
};

export default CheckoutPage;
