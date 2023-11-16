import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: [{ "id": "6544f5c164aca44518cb9966", "quantity": 1 }],
  reducers: {
    addToCart: (state, action) => {
      let inCart = state.find(item => item.id === action.payload.id)
      if (inCart) {
        inCart.quantity++
      }
      else {
        action.payload.quantity = 1
        state.push(action.payload)
      }
    },
    removeFromCart: (state, action) => {
      let inCart = state.find(item => item.id === action.payload.id)
      if (inCart.quantity > 1) {
        inCart.quantity--
      }
      else {
        state.splice(state.indexOf(inCart), 1)
      }
      return state;
    },
    removeOneFromCart: (state, action) => {
      let inCart = state.find(item => item.id === action.payload.id)
      state.splice(state.indexOf(inCart), 1)
      return state;
    },
    removeAllFromCart: () => {
      return [];
    }
  }
})

export const { addToCart, removeFromCart, clearCart , removeAllFromCart } = cartSlice.actions

export default cartSlice.reducer