import { configureStore } from "@reduxjs/toolkit";

// import categoryReducer from "./";
// import userReducer from "./reducers/userReducer";
import productReducer from "../slices/productSlice"

export const store = configureStore({
  reducer: {
    // categories: categoryReducer,
    products: productReducer,
    // users: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
