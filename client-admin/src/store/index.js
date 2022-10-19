import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import productReducer from './reducers/product-reducer';

export const store = createStore(productReducer, applyMiddleware(thunk));
