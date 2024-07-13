import { createSlice } from '@reduxjs/toolkit';

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState: {
    customerInfo: {
      name: '',
      email: '',
      address: '',
      city: '',
      postalCode: '',
    },
    orderPlaced: false,
  },
  reducers: {
    updateCustomerInfo: (state, action) => {
      state.customerInfo = action.payload;
    },
    placeOrder: (state) => {
      state.orderPlaced = true;
    },
  },
});

export const { updateCustomerInfo, placeOrder } = checkoutSlice.actions;

export default checkoutSlice.reducer;
