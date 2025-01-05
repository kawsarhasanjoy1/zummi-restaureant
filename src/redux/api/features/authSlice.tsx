import { createSlice } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
export interface authState {
  user: any;
  token: string;
}

const initialState: authState = {
  user: "",
  token: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
    logOut: (state) => {
      state.user = null;
      state.token = "";
    },
  },
});

const authPersist = {
  key: "auth",
  storage,
};

export const authPersistReducer = persistReducer(
  authPersist,
  authSlice.reducer
);

export const { logOut, setUser } = authSlice.actions;

export default authSlice.reducer;
