import { legacy_createStore as createStore, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension/';
import categoryReducer from './categories'
import activeCategoryReducer from './active-categories'
import productReducer from './products'
import cartReducer from '../Components/Cart/simplecart.js'

// activeCategory
const reducers = combineReducers({
  categoriesRed: categoryReducer,
  activeCategory: activeCategoryReducer,
  productsRed: productReducer,
  cartRed: cartReducer,
});

export default function store(){
  return createStore(reducers, composeWithDevTools())
}
