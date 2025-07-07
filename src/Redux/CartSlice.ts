import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Product {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
  quantity: number;
}


interface CartState {
  cart: Product[];
}


const initialState: CartState = {
  cart: [],
};


const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const itemInCart = state.cart.find(item => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity += action.payload.quantity;
      } else {
        state.cart.push(action.payload);
      }
    },

    
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.filter(item => item.id !== action.payload);
    },

  
    increaseQuantity: (state, action: PayloadAction<string>) => {
      const item = state.cart.find(item => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },

    // Decrease quantity by 1
    decreaseQuantity: (state, action: PayloadAction<string>) => {
      const item = state.cart.find(item => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },

    // Clear the entire cart
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

// Export actions and reducer
export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart
} = cartSlice.actions;

export default cartSlice.reducer;
