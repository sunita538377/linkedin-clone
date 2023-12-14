import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
  isAuthenticated: localStorage.getItem("facebook-token") ? true : false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("facebook-user", JSON.stringify(action.payload));
    },
    setToken: (state, action) => {
      state.token = action.payload;
      localStorage.setItem("facebook-token", action.payload);
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem("facebook-user");
      localStorage.removeItem("facebook-token");
    },
  },
});

export const { setUser, setToken, logout } = authSlice.actions;

export default authSlice.reducer;