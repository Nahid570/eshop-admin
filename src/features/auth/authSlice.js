import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: {
    name: "",
    role: "",
    token: "",
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { firstName, role, token } = action.payload;
      state.currentUser.name = firstName;
      state.currentUser.role = role;
      state.currentUser.token = token;
    },
    logout: (state) => {
      state.currentUser.name = null;
      state.currentUser.role = null;
      state.currentUser.token = null;
    },
  },
});

export const selectCurrUser = (state) => state.auth.currentUser;

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
