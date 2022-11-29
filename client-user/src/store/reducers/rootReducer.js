import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import productReducer from "./productReducer";
import userReducer from "./userReducer";

export const rootReducer = combineReducers({
  product: productReducer,
  category: categoryReducer,
  user: userReducer,
});
