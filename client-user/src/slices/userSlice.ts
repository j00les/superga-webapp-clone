import { createSlice } from "@reduxjs/toolkit";
import { login } from "store/actions/user";

interface UserState {
  isAuthenticated: Boolean;
  userData: {
    name: string;
    email: string;
  };
}

const initialState: UserState = {
  isAuthenticated: false,
  userData: {
    name: "",
    email: "",
  },
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},

  extraReducers(builder) {
    builder.addCase(login.fulfilled, (state, action) => {
      state.userData = action.payload;
      state.isAuthenticated = true;
    });
  },
});

export default userSlice.reducer;
