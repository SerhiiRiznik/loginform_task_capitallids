import appSlice from "./appSlice";
import formSlice from "./formSlice";

import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    app: appSlice,
    form: formSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
