import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension/';
import thunk from './Middleware/thunk';

import categoryReducer from './categories.js'
import activeCategoryReducer from './active-categories.js'
import productReducer from './products.js'
import cartReducer from './simpleCart.js'

// add activeCategory
const reducers = combineReducers({
  categoriesRed: categoryReducer,
  activeCategory: activeCategoryReducer,
  productsRed: productReducer,
  cartRed: cartReducer,
});

export default function store(){
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))
}
