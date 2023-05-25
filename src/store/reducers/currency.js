import { createSlice } from "@reduxjs/toolkit";
import usImg from "../../assets/img/united-states-of-america-svgrepo-com 1.svg";
import euImg from "../../assets/img/european-union-svgrepo-com 1.svg";
import gbImg from "../../assets/img/united-kingdom-svgrepo-com 1.svg";
import auImg from "../../assets/img/australia-svgrepo-com 1.svg";
import caImg from "../../assets/img/canada-svgrepo-com 1.svg";

const initialState = {
  allCurrencies: [
    {
      value: "USD",
      logo: usImg,
      ratio: 1,
    },
    {
      value: "EUR",
      logo: euImg,
      ratio: 1.1,
    },
    {
      value: "GBP",
      logo: gbImg,
      ratio: 1.2,
    },
    {
      value: "AUD",
      logo: auImg,
      ratio: 0.6,
    },
    {
      value: "CAD",
      logo: caImg,
      ratio: 0.7,
    },
  ],
  selected: { value: "USD", logo: usImg, ratio: 1 },
};

export const currency = createSlice({
  name: "currency",
  initialState,
  reducers: {
    changeSelectedCurrency: (state, action) => {
      state.selected = state.allCurrencies.find(
        (item) => item.value === action.payload
      );
    },
  },
});

export const currencyActions = currency.actions;
export default currency.reducer;
