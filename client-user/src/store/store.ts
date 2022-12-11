import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./reducers/rootReducer";

export const store = createStore(rootReducer, applyMiddleware(thunk));

/* pre-typed versions of the useDispatch and useSelector supaya ga nulis: 
  - For useSelector, it saves you the need to type (state: RootState) every time

  - For useDispatch, the default Dispatch type does not know about thunks or other middleware. In order to correctly dispatch thunks, you need to use the specific customized AppDispatch type from the store that includes the thunk middleware types, and use that with useDispatch. Adding a pre-typed useDispatch hook keeps you from forgetting to import AppDispatch where it's needed. */

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
