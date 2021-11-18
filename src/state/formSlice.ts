import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: {
    phoneCode: "",
    phone: "",
  },
  password: "",
  confirmPassword: "",
  termsCondition: false,
};
export const formSlice = createSlice({
  name: "form",

  initialState,
  reducers: {
    setName: (state, action) => {
      if (action.payload.name === "firstName") {
        state.firstName = action.payload.value;
      } else {
        state.lastName = action.payload.value;
      }
    },
    setEmail: (state, action) => {
      state.email = action.payload.value;
    },
    setPassword: (state, action) => {
      if (action.payload.name === "password") {
        state.password = action.payload.value;
      } else {
        state.confirmPassword = action.payload.value;
      }
    },
    setPhoneCode: (state, action) => {
      state.phone.phoneCode = action.payload;
    },
    setPhone: (state, action) => {
      let codeLen = state.phone.phoneCode.length;
      state.phone.phone = action.payload.slice(codeLen + 2);
    },
    setChecked: (state) => {
      state.termsCondition = !state.termsCondition;
    },
  },
});

export const {
  setName,
  setEmail,
  setPassword,
  setPhoneCode,
  setPhone,
  setChecked,
} = formSlice.actions;

export default formSlice.reducer;
