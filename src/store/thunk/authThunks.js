import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api/axiosIncstance";

export const singUpRequest = createAsyncThunk(
  "auth/singUpRequest",
  async ({ userData, navigate }, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post("/register", userData);

      localStorage.setItem("auth", JSON.stringify(data));

      navigate("/");
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const signInRequest = createAsyncThunk(
  "auth/signInRequest",
  async ({ userData, navigate }, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post("/auth", userData);

      localStorage.setItem("auth", JSON.stringify(data));

      navigate("/");
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
