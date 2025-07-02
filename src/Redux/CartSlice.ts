import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Product {
  id: string;
  description: string;
  price: string;
  title: string;
  image: string;
  quantity: number;
}

interface CartState {
  cart: Product[];
}

const initialState: CartState = {
  cart: [],
};
export interface CartItem {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
}


const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Omit<Product, "quantity">>) => {
      const itemInCart = state.cart.find(item => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.filter(item => item.id !== action.payload);
    },
    increaseQuantity: (state, action: PayloadAction<string>) => {
      const item = state.cart.find(item => item.id === action.payload);
      if (item) item.quantity += 1;
    },
    decreaseQuantity: (state, action: PayloadAction<string>) => {
      const item = state.cart.find(item => item.id === action.payload);
      if (item && item.quantity > 1) item.quantity -= 1;
    },
    clearCart: (state) => {
      state.cart = [];
    }
  },
});
export const {
  addToCart, removeFromCart,increaseQuantity,decreaseQuantity,clearCart
} = cartSlice.actions;

export default cartSlice.reducer;
