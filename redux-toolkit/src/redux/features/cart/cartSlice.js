import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../../../utility/cartItems';

const initialState = {
  cartItems,
  amount: 4,
  isLoading: false,
  total: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
      //   return { ...state, cartItems: [] };
    },
  },

  removeItem: (state, action) => {
    const itemId = action.payload;
    state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
  },
});

// console.log(cartSlice);

export const { clearCart, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
