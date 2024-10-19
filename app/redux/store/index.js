import { combineReducers, createStore } from 'redux';
import CounterReducer from '../reducers/CountReducer';
import CartReducer from '../reducers/CartReducer';
const rootReducer = combineReducers({
    cart: CartReducer,
    counter: CounterReducer,
  });
const store = createStore(rootReducer);

export default store;
