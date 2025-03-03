import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PhoneNumberState {
  phoneNumber: string;
}

const initialState: PhoneNumberState = {
  phoneNumber: "",
};

const phoneNumberSlice = createSlice({
  name: "phoneNumber",
  initialState,
  reducers: {
    setPhoneNumber: (state, action: PayloadAction<string>) => {
      state.phoneNumber = action.payload;
    },
    clearPhoneNumber: (state) => {
      state.phoneNumber = "";
    },
  },
});

export const { setPhoneNumber, clearPhoneNumber } = phoneNumberSlice.actions;

export default phoneNumberSlice.reducer;
