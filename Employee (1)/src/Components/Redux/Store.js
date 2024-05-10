import { configureStore } from "@reduxjs/toolkit";
import UserDataSlice from "./Features/UserDataSlice";

export const Store = configureStore({
  reducer: {
    cart: UserDataSlice,
  },
});
