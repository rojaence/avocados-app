import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../product/product.model";

interface CartItem {
  data: IProduct;
  quantity: number;
}

interface CartState {
  products: CartItem[];
}

const initialState: CartState = {
  products: [],
};

interface CartPayload {
  productPayload: IProduct;
  quantity?: number;
}

type CartAction = PayloadAction<CartPayload>;

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    incrementItem: (state, action: CartAction) => {
      const { productPayload, quantity = 1 } = action.payload;
      const product = state.products.find(
        (product) => product.data.id === productPayload.id
      );
      if (product) {
        product.quantity += quantity;
      } else {
        state.products.push({ data: productPayload, quantity });
      }
    },
    decrementItem: (state, action: CartAction) => {
      const { productPayload } = action.payload;
      const product = state.products.find(
        (product) => product.data.id === productPayload.id
      );
      if (product) {
        product.quantity -= 1;
      }
    },
    updateQuantityItem: (state, action: CartAction) => {
      const { productPayload, quantity } = action.payload;
      const product = state.products.find(
        (product) => product.data.id === productPayload.id
      );
      if (product) {
        product.quantity = quantity;
      } else {
        state.products.push({ data: productPayload, quantity });
      }
    },
    removeItem: () => {},
  },
});

export const { incrementItem, decrementItem, updateQuantityItem, removeItem } =
  cartSlice.actions;

export default cartSlice.reducer;