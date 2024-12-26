import { apiInstance } from "./api";
import { UserValues } from "../Components/Auth/RegistrationForm/RegistrationForm";

export const signupRequest = async (body: UserValues) => {
  const { data } = await apiInstance.post("/user/", body);
  return data;
};

export const loginRequest = async (body: UserValues) => {
  const { data } = await apiInstance.post("/auth/login/", body);
  return data;
};

export const getMe = async () => {
  const { data } = await apiInstance.get(`/auth/me/`);
  return data;
};