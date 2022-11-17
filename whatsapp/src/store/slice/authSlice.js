import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initAuthState = {
  user: undefined,
  token: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initAuthState,
  reducers: {
    signOut: () => {
      return initAuthState;
    },
    signIn: (state, payload) => {
      return {
        ...payload.payload,
      };
    },
  },
});

export const { signIn, signOut } = authSlice.actions;

export default authSlice;
