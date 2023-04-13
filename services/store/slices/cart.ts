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
      const { productPayload } = action.payload;
      const product = state.products.find(
        (product) => product.data.id === productPayload.id
      );
      if (product) {
        product.quantity += 1;
      } else {
        state.products.push({ data: productPayload, quantity: 1 });
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
    removeProduct: () => {},
  },
});

export const { incrementItem, decrementItem, updateQuantityItem } =
  cartSlice.actions;

export default cartSlice.reducer;
