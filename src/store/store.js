import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { cartReducer } from '../reducers/cartReducer';
import { customerReducer } from '../reducers/customerReducer';
import { productReducer } from '../reducers/productReducer';
import { uiReducer } from '../reducers/uiReducer';

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({
  customer: customerReducer,
  ui: uiReducer,
  cart: cartReducer,
  inventory: productReducer,
});

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
