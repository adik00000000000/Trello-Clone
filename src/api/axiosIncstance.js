import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://dfc80c0c52f83a45.mokky.dev",
  timeout: 1000,
  headers: {
    Accept: "application/json",
  },
});
