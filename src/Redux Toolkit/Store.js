import {configureStore} from '@reduxjs/toolkit';
import CartReducer from './CartSlice';
const myStore = configureStore({
  reducer: {
    Cart1: CartReducer,
  },
});
export default myStore;
