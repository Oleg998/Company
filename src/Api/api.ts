import axios from "axios";
import { getErrorMessages } from "../Utils/errorMessages";

const DB_HOST = "http://51.20.210.187";

export const apiInstance = axios.create({
  baseURL: DB_HOST,
  timeout: 5000,
  headers: { "Content-Type": "application/json" },
});

export interface CheckResponse {
  status_code: number;
  detail: string;
  result: string;
}

export const getStatus = async (): Promise<CheckResponse> => {
  const { data } = await apiInstance.get<CheckResponse>("/");
  return data;
 
};

apiInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const errorMessages = getErrorMessages(error);
    if (axios.isAxiosError(error)) {
      const { response } = error;
      const errorMessage =
        response && response.status in errorMessages
          ? errorMessages[response.status]
          : errorMessages.unexpected;
      return Promise.reject(new Error(errorMessage));
    }
    return Promise.reject(error);
  }
);

apiInstance.interceptors.request.use(
  (config) => {
    const persistedState = localStorage.getItem("persist:root");
    if (persistedState) {
      const parsedState = JSON.parse(persistedState);
      const token = parsedState?.token; 
      if (token) {
        const cleanToken = token.replace(/^"(.+)"$/, "$1");
        config.headers.Authorization = `Bearer ${cleanToken}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);