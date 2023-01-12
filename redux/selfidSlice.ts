import { createSlice } from "@reduxjs/toolkit";
import { BasicProfile } from "@self.id/framework";

interface ContextType {
  basicProfile: BasicProfile | null;
  sessionSerial: string | null;
}

const initialState: ContextType = { basicProfile: null, sessionSerial: null };

const basicProfileSlice = createSlice({
  name: "selfid",
  initialState,
  reducers: {
    setBasicProfile(state, action) {
      state.basicProfile = { ...action.payload };
    },
    setSessionSerial(state, action) {
      state.sessionSerial = action.payload;
    },
  },
});

export const { setBasicProfile, setSessionSerial } = basicProfileSlice.actions;

export default basicProfileSlice.reducer;
