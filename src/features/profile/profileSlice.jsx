import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../auth/authSlice";

export const getProfile = createAsyncThunk(
  "profile/getProfile",
  async (token) => {
    const res = await axios.get("http://localhost:5000/profile", {
      headers: { "X-Custom-Header": `${token}` },
    });
    return res.data;
  }
);
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
