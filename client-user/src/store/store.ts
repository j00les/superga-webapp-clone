import {configureStore} from "@reduxjs/toolkit";
import userReducer from "../slices/userSlice";
import productReducer from "../slices/productSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    users: userReducer,
  },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
