import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct, TProductId } from "../../product/product.model";

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

interface RemovePayload {
  productId: TProductId;
}

type CartAction = PayloadAction<CartPayload>;
type RemoveAction = PayloadAction<RemovePayload>;

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
    removeItem: (state, action: RemoveAction) => {
      const { productId } = action.payload;
      let el = state.products.find((p) => p.data.id === productId);
      if (el) {
        let index = state.products.indexOf(el);
        state.products.splice(index, 1);
      }
    },
  },
});

export const { incrementItem, decrementItem, updateQuantityItem, removeItem } =
  cartSlice.actions;

export default cartSlice.reducer;
