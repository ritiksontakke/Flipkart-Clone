import { createSlice } from "@reduxjs/toolkit";

let ProductSlice = createSlice({
  name: "ProductSlice",
  initialState: {
    productList: [],
    categories: [],
  },
  reducers: {
    saveProduct: (state, action) => {
      state.productList = action.payload;
    },
    saveCategories: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export default ProductSlice.reducer;
export const { saveProduct, saveCategories } = ProductSlice.actions;
