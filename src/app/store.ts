import { configureStore } from "@reduxjs/toolkit";
import loginPage from "../features/login/state/loginPageSlice";

export const store = configureStore({
  reducer: {
    loginPage,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
