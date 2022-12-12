import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "models";

interface ProductState {
  products: Product[];
  productById: Product;
  isLoading: Boolean;
  payResponse: any;
}

const initialState: ProductState = {
  products: [],
  productById: {
    id: 0,
    name: "",
    slug: "",
    description: "",
    price: 0,
    mainImg: "",
    categoryId: 0,
    authorId: 0,
    Images: [],
  },
  isLoading: false,
  payResponse: {},
};
export const productSlice = createSlice({
  name: "Products",
  initialState,
  reducers: {
    fetchProducts: (state, action: PayloadAction<Product>) => {},
  },
});
