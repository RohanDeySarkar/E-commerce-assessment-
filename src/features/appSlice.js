import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',

  initialState: {
    basket: [],
    transcations: []
  },

  reducers: {
    addToBasket: (state, action) => {
        state.basket = [...state.basket, action.payload];
    },

    removeFromBasket: (state, action) => {
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id == action.payload 
      );

      // console.log(index)

      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
          console.warn(`product ${action.payload} is not in basket!`)
      }

      state.basket = newBasket;
    },

    checkout: (state, action) => {
      state.basket = [];
      state.transcations = [...state.transcations, action.payload];
    },
  },
});

export const { addToBasket, removeFromBasket, checkout } = appSlice.actions;

export const selectBasket = state => state.app.basket;
export const selectTranscations = state => state.app.transcations;

export default appSlice.reducer;