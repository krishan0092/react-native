import {createSlice} from '@reduxjs/toolkit';

const initialState = [];
const CartSlice = createSlice({
  name: 'Cart',
  initialState,
  reducers: {
    addCart(state, action) {
      let MyIndex = -1;
      state.map((item, index) => {
        if (item.id == action.payload.id) {
          MyIndex = index;
        }
      });
      if (MyIndex == -1) {
        state.push({
          id: action.payload.id,
          name: action.payload.name,
          price: action.payload.price,
          image: action.payload.image,
          qty: action.payload.qty,
        });
      } else {
        state[MyIndex].qty = state[MyIndex].qty + 1;
      }
    },

    removeCart(state, action) {
      let MyIndex = -1;
      state.map((item, index) => {
        if (item.id == action.payload.id) {
          MyIndex = index;
        }
        if (MyIndex == -1) {
        } else {
          state[MyIndex].qty = state[MyIndex].qty - 1;
        }
      });
    },
    deleteCartItem(state, action) {
      return (state = state.filter(item => item.id !== action.payload));
    },
  },
});
export const {addCart, removeCart, deleteCartItem} = CartSlice.actions;
export default CartSlice.reducer;
