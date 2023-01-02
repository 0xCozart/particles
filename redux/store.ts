import { configureStore } from "@reduxjs/toolkit";
import loginStatusReducer from "./loginSlice";
import basicProfileReducer from "./selfid";

const store = configureStore({
  reducer: {
    basicProfile: basicProfileReducer,
    loginStatus: loginStatusReducer,
  },
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export { RootState, AppDispatch };
export default store;
