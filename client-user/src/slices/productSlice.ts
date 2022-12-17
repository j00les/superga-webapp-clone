import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from 'models';
import { fetchById, fetchProducts } from 'store/actions/product';

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
    name: '',
    slug: '',
    description: '',
    price: 0,
    mainImg: '',
    categoryId: 0,
    authorId: 0,
    Images: [],
  },
  isLoading: false,
  payResponse: {},
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},

  extraReducers(builder) {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });

    builder.addCase(fetchById.fulfilled, (state, action) => {
      console.log(action);
      //state.productById = action.payload;
    });
  },
});

export default productSlice.reducer;
