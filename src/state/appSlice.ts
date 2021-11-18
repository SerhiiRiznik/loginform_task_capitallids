import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: "main",
};
export const appSlice = createSlice({
  name: "main",

  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const { setPage } = appSlice.actions;

export default appSlice.reducer;
