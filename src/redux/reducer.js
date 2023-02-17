import { createSlice } from "@reduxjs/toolkit";

const cartReducer = createSlice({
  name: "cart",
  initialState: {
    hidden: true,
    cartItems: [],
  },

  reducers: {
    addItemsToCart: (state, action) => {
      const alreadyIndex = state.cartItems.findIndex(
        (x) => x.id === action.payload.id
      );

      if (alreadyIndex > -1) {
        state.cartItems[alreadyIndex].quantity += 1;
      } else {
        state.cartItems = [...state.cartItems, { ...action.payload }];
      }
    },

    removeItemsToCart: (state, action) => {
      const index = state.cartItems.findIndex(
        (x) => x.id === action.payload.id
      );

      if (index >= -1)
        if (state.cartItems[index].quantity === 1) {
          state.cartItems.splice(index, 1);
        } else {
          state.cartItems[index].quantity -= 1;
        }
    },

    clearItemsToCart: (state, action) => {
      const index = state.cartItems.findIndex(
        (x) => x.id === action.payload.id
      );

      if (index > -1) {
        state.cartItems.splice(index, 1);
      }
    },

    toggleCartHidden: (state) => {
      state.hidden = !state.hidden;
    },
  },
});

export const {
  addItemsToCart,
  toggleCartHidden,
  removeItemsToCart,
  clearItemsToCart,
} = cartReducer.actions;
export default cartReducer.reducer;
