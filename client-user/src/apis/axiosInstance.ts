import axios from "axios";

export const publicURL = axios.create({
  baseURL: "http://localhost:3002/public",
});

export const adminURL = axios.create({
  baseURL: "http://localhost:3002/admin",
});
