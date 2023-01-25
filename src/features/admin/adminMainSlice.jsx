import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../app/api/instance";

export const getAdmin = createAsyncThunk(
  "admin/getAdmin",
  async ({ email, password, Navigate }) => {
    const res = await instance.post("admin/signin", { email, password });
    Navigate("/dashboard");
    return res.data;
  }
);

const adminMainSlice = createSlice({
  name: "admin",
  initialState: {
    accessToken: null,
    id: null,
    loading: false,
  },
  extraReducers: {
    [getAdmin.pending]: (state, action) => {
      state.loading = true;
    },
    [getAdmin.fulfilled]: (state, action) => {
      const { id, accessToken } = action.payload;
      state.accessToken = accessToken;
      state.id = id;
      state.loading = false;
    },
    [getAdmin.rejected]: (state, action) => {
      state.loading = false;
    },
  },
  reducers: {
    logOutAdmin: (state, action) => {
      state.id = null;
      state.accessToken = null;
    },
  },
});
export const { logOutAdmin } = adminMainSlice.actions;
export default adminMainSlice.reducer;
export const selectCurrentAdmin = (state) => state.admin.accessToken;
export const selectLoading = (state) => state.admin.loading;
