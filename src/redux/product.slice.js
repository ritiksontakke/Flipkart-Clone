import { createSlice } from "@reduxjs/toolkit";

let ProductSlice = createSlice({
  name: "ProductSlice",
  initialState: {
    productList: [],
  },
  reducers: {
    saveProduct: () => {
      console.log("this is save product function");
    },
  },
});

export default ProductSlice.reducer;