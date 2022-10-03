import { configureStore } from "@reduxjs/toolkit";
import studentsReducer from "../reducers/Students";

export default configureStore({
  reducer: {
    students: studentsReducer,
  },
});
