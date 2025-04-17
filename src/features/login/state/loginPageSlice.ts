import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoginState } from "../types/loginTypes";

const initialState = { status: "unauthenticated" } as LoginState;

const loginPageSlice = createSlice({
  name: "loginPage",
  initialState,
  reducers: {
    loginAsAdmin(_: LoginState, action: PayloadAction<{ username: string }>) {
      return { status: "admin", username: action.payload.username };
    },
    loginAsUser(_: LoginState, action: PayloadAction<{ username: string }>) {
      return { status: "user", username: action.payload.username };
    },
    loginFailed(_: LoginState, action: PayloadAction<{ error: string }>) {
      return { status: "error", error: action.payload.error };
    },
    logout() {
      return { status: "unauthenticated" };
    },
  },
});

export const { loginAsAdmin, loginAsUser, loginFailed, logout } =
  loginPageSlice.actions;
export default loginPageSlice.reducer;
