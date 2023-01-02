import { createSlice } from "@reduxjs/toolkit";
import { BasicProfile } from "@self.id/framework";

interface ContextType {
  basicProfile: BasicProfile | null;
}

const initialState: ContextType = { basicProfile: null };

const basicProfileSlice = createSlice({
  name: "selfid",
  initialState,
  reducers: {
    setBasicProfile(state, action) {
      state.basicProfile = { ...action.payload };
    },
    getBasicProfile(state, action) {
      return state.basicProfile ? state.basicProfile : null;
    },
  },
});

export const { setBasicProfile, getBasicProfile } = basicProfileSlice.actions;

export default basicProfileSlice.reducer;
