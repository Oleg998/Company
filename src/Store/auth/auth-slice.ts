import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { pending, rejected } from "Utils/redux";
import { signup, login, fetchMe } from "./auth-operations";
import { delUsersById } from "Store/User/user-operations";
import { SignupResponse, LoginResponse } from "./auth-operations";
import {User} from "../User/user-slice"

type Auth = {
  user: User| null;
  userId: number | null;
  isLoading: boolean;
  isError: string | null;
  isLogin: boolean;
  token: string | null;
};

const initialState: Auth = {
  user:null,
  userId: null,
  isLoading: false,
  isError: null,
  isLogin: false,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.userId = null;
      state.isLoading = false;
      state.isError = null;
      state.isLogin = false;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signup.pending, pending)
      .addCase(
        signup.fulfilled,
        (state, { payload }: PayloadAction<SignupResponse>) => {
          state.userId = payload.result.user_id;
          state.isLoading = false;
          state.isLogin = true;
          state.isError = null;
        }
      )
      .addCase(signup.rejected, rejected)

      .addCase(login.pending, pending)
      .addCase(
        login.fulfilled,
        (state, { payload }: PayloadAction<LoginResponse>) => {
          state.isLoading = false;
          state.isLogin = true;
          state.isError = null;
          state.token = payload.result.access_token;
        }
      )
      .addCase(login.rejected, rejected)
      .addCase(fetchMe.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(fetchMe.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = null;
        state.user = payload.result;
      })
      .addCase(fetchMe.rejected, rejected)

      .addCase(delUsersById.pending, pending)
      .addCase(delUsersById.fulfilled, (state) => {
        state.isLoading = false;
        state.isError = null;
        state.isLogin=false
      })
      .addCase(delUsersById.rejected, rejected);
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
