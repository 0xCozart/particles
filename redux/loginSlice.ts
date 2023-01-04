import { createSlice } from "@reduxjs/toolkit";
import { ConnectionStatus } from "../types/selfid";

const initialState: ConnectionStatus = "idle";

const loginStatusSlice = createSlice({
  name: "loginStatus",
  initialState,
  reducers: {
    setStatus(state, action) {
      state = action.payload;
    },
    // getStatus(state, action) {
    //   return state;
    // },
  },
});

export const { setStatus } = loginStatusSlice.actions;

export default loginStatusSlice.reducer;
