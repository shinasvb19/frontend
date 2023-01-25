import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import profileReducer from "../features/profile/profileSlice";
import authReducer from "../features/auth/authSlice";

import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import adminMainSlice from "../features/admin/adminMainSlice";
const persistConfig = {
  key: "root",
  storage,
};

const reducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  auth: authReducer,
  profile: profileReducer,
  admin: adminMainSlice,
});
const persistedReducer = persistReducer(persistConfig, reducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});
