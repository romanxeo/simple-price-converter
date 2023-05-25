import { configureStore } from "@reduxjs/toolkit";
import currencyReducer from "./reducers/currency";

const store = configureStore({
  reducer: { currency: currencyReducer },
});

export default store;
