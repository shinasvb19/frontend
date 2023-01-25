import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import instance from "../../app/api/instance";

export const getProfile = createAsyncThunk("profile/getProfile", async () => {
  // console.log("asadadadad", token);
  const res = await instance.get("/profile");
  return res.data;
});
const profileSlice = createSlice({
  name: "profile",
  initialState: {
    profileData: [],
    loading: false,
  },
  extraReducers: {
    [getProfile.pending]: (state, action) => {
      state.loading = true;
    },
    [getProfile.fulfilled]: (state, action) => {
      state.profileData = action.payload;
      state.loading = false;
    },
    [getProfile.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export default profileSlice.reducer;

export const selectCurrentProfile = (state) => state.profile.profileData;
