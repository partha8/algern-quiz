import { configureStore } from "@reduxjs/toolkit";
import quizReducer from "./reducers/quizSlice";
import authReducer from "./reducers/authSlice";

export const store = configureStore({
  reducer: {
    quiz: quizReducer,
    auth: authReducer,
  },
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
