import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import lengSliceReducer from "./lang/lang-slice";
import authReducer from "./auth/auth-slice";
import userSliceReducer from "./User/user-slice";

const persistAuthConfig = {
  key: "root",
  storage,
  whitelist: ["token", "isLogin", "user","auth"],
};
const persistLangConfig = {
  key: "lang",
  storage,
  whitelist: ["lang"],
};
const persistUserConfig = {
  key: "user",
  storage,
};

const persistedAuthReducer = persistReducer(persistAuthConfig, authReducer);
const persistedLangReducer = persistReducer(persistLangConfig, lengSliceReducer);
const persistedUserReducer = persistReducer(
  persistUserConfig,
  userSliceReducer
);

export const rootReducer = combineReducers({
  lang: persistedLangReducer,
  auth: persistedAuthReducer,
  user: persistedUserReducer,
});

export default rootReducer;
