import { createSlice } from '@reduxjs/toolkit'

// Load cart from localStorage or set to an empty array if not found
const persistedCart = JSON.parse(localStorage.getItem('cart')) || [];

const cartSlice = createSlice({
  name: 'cart',
  initialState: persistedCart,
  reducers: {
    addToCart: (state, action) => {
      let inCart = state.find(item => item._id === action.payload._id)
      if (inCart) {
        inCart.quantity++
      }
      else {
        const newItem = {...action.payload , quantity : 1}
        state.push(newItem)
      }
      // Save to localStorage
      localStorage.setItem('cart', JSON.stringify(state));
    },
    removeFromCart: (state, action) => {
      let inCart = state.find(item => item._id === action.payload._id)
      if (inCart.quantity > 1) {
        inCart.quantity--
      }
      else {
        state.splice(state.indexOf(inCart), 1)
      }
      // Save to localStorage
      localStorage.setItem('cart', JSON.stringify(state));
      return state;
    },
    removeOneFromCart: (state, action) => {
      let inCart = state.find(item => item._id === action.payload._id)
      state.splice(state.indexOf(inCart), 1)
      // Save to localStorage
      localStorage.setItem('cart', JSON.stringify(state));
      return state;
    },

    removeAllFromCart: () => {
      // Clear localStorage
      localStorage.removeItem('cart');
      return [];
    }
  }
})

export const { addToCart, removeFromCart, clearCart, removeAllFromCart , removeOneFromCart } = cartSlice.actions

export default cartSlice.reducer