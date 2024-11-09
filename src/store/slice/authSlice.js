import { createSlice } from "@reduxjs/toolkit";
import { signInRequest, singUpRequest } from "../thunk/authThunks";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoading: false,
    isError: null,
    userData: null,
  },
  reducers: {
    isAuth: (state, action) => {
      state.userData = action.payload;
    },
    logOut: (state) => {
      localStorage.removeItem("auth");
      state.userData = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(singUpRequest.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(singUpRequest.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userData = action.payload.data.email;
      })
      .addCase(singUpRequest.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      });

    builder
      .addCase(signInRequest.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signInRequest.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userData = action.payload.data.email;
      })
      .addCase(signInRequest.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      });
  },
});

export const { isAuth, logOut } = authSlice.actions;
export const authReducer = authSlice.reducer;
