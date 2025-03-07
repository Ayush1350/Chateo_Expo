import { configureStore } from "@reduxjs/toolkit";
import phoneNumberReducer from "./phoneNumberSlice";

export const store = configureStore({
  reducer: {
    phoneNumber: phoneNumberReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
