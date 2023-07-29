import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./reducers/home_slice";

export const store = configureStore({
  reducer: {
    home: homeSlice,
  },
});
