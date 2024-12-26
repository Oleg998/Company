import { PayloadAction } from "@reduxjs/toolkit";

type Status = {
  isLoading: boolean;
  isError: string | unknown;
  isLogin: boolean;
};

export const pending = (state: Status) => {
  state.isLoading = true;
  state.isError = null;
  state.isLogin = false;
};

export const rejected = (
  state: Status,
  action: PayloadAction<string | undefined>
) => {
  state.isLogin = false;
  state.isLoading = false;
  state.isError = action.payload;
};
