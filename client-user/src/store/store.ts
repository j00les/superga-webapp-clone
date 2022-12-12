import { configureStore } from "@reduxjs/toolkit";

import categoryReducer from "./reducers/categoryReducer";
import productReducer from "./reducers/productReducer";
import userReducer from "./reducers/userReducer";

const store = configureStore({
  reducer: {
    categories: categoryReducer,
    products: productReducer,
    users: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
