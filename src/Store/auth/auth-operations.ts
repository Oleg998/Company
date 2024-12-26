import { createAsyncThunk } from "@reduxjs/toolkit";
import { signupRequest, loginRequest, getMe } from "Api/auth-api";
import { UserValues } from "Components/Auth/RegistrationForm/RegistrationForm";
import { ApiResponseUserBuid } from "Store/User/user-operations";
 export interface SignupResponse {
  status_code: number;
  detail: string;
  result: {
    user_id: number;
  };
}

export interface LoginResponse {
  user_email: string;
  user_password: string;
  result: {
    access_token: string;
  };
}

export const signup = createAsyncThunk<
  SignupResponse,
  UserValues,
  { rejectValue: string }
>("auth/signup", async (body, { rejectWithValue }) => {
  try {
    const data = await signupRequest(body);
    return data;
  } catch (error) {
    const errorMessage = (error as Error).message;
    return rejectWithValue(errorMessage);
  }
});

export const login = createAsyncThunk<
  LoginResponse,
  UserValues,
  { rejectValue: string }
>("auth/login", async (body, { rejectWithValue }) => {
  try {
    const data = await loginRequest(body);
    return data;
  } catch (error) {
    const errorMessage = (error as Error).message;
    return rejectWithValue(errorMessage);
  }
});

export const fetchMe = createAsyncThunk<
  ApiResponseUserBuid,
  void,
  { rejectValue: string }
>("userMe/fetch", async (_, { rejectWithValue }) => {
  try {
    const data = await getMe();
    return data;
  } catch (error) {
    const errorMessage = (error as Error).message;
    return rejectWithValue(errorMessage);
  }
});
