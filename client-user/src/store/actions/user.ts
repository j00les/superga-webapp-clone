import { createAsyncThunk } from "@reduxjs/toolkit";
import { adminURL } from "../../apis/axiosInstance";

export const login = createAsyncThunk(
  "users/login",
  async (credential: { email: string; password: string }) => {
    try {
      const { data } = await adminURL({
        method: "post",
        url: "/login",
        data: {
          email: credential.email,
          password: credential.password,
        },
      });
      localStorage.setItem("access_token", data.access_token);
      return data;
    } catch (error) {
      throw error;
    }
  }
);

export const register = createAsyncThunk(
  "users/login",
  async (credential: { username: string; email: string; password: string }) => {
    try {
      const { data } = await adminURL({
        method: "post",
        url: "/register",
        data: {
          username: credential.username,
          email: credential.email,
          password: credential.password,
        },
      });
      return data;
    } catch (error) {
      throw error;
    }
  }
);
