import { configureStore } from "@reduxjs/toolkit";
import fetchReducer from "../reducers/Students";

export default configureStore({
  reducer: {
    students: fetchReducer,
  },
});
