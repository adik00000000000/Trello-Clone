import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slice/authSlice";
import { trelloReducer } from "./slice/trelloSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    trello: trelloReducer,
  },
});
