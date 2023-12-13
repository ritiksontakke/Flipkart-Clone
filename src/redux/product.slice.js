import { createSlice } from "@reduxjs/toolkit";

let ProductSlice = createSlice({
  name: "ProductSlice",
  initialState: {
    productList: [],
    categories: [],
    cart: [],
  },
  reducers: {
    saveProduct: (state, action) => {
      state.productList = action.payload;
    },
    saveCategories: (state, action) => {
      state.categories = action.payload;
    },
    saveToCart: (state, action) => {
      let index = state.cart.findIndex((cart) => cart.id === action.payload.id);
      if (index !== -1) {
        //qty update
        state.cart[index].qty += 1;
      } else {
        //add new record to cart
        state.cart.push(action.payload);
      }
    },
  },
});

export default ProductSlice.reducer;
export const { saveProduct, saveCategories, saveToCart } = ProductSlice.actions;
