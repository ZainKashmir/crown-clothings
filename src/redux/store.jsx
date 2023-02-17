import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "./users";
import cartReducer from "./reducer";
import logger from "redux-logger";
const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

export default store;
