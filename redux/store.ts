import { configureStore } from "@reduxjs/toolkit";
import loginStatusReducer from "./loginSlice";
import selfidReducer from "./selfidSlice";

const store = configureStore({
  reducer: {
    selfid: selfidReducer,
    loginStatus: loginStatusReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
