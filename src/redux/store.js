import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import paginationReducer from "./paginationSlice";
import modalReducer from "./modalSlice";

export const store = configureStore({
  reducer: {
    users: userReducer,
    pagination: paginationReducer,
    modal:modalReducer,
  },
});
