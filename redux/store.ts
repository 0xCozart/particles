import { configureStore } from "@reduxjs/toolkit";
import loginStatusReducer from "./loginSlice";
import basicProfileReducer from "./selfidSlice";

const store = configureStore({
  reducer: {
    basicProfile: basicProfileReducer,
    loginStatus: loginStatusReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
