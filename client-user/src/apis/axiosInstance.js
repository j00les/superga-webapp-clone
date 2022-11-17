import axios from "axios";

export const pub = axios.create({
  baseURL: "http://localhost:3000/pub",
});

export const admin = axios.create({
  baseURL: "http://localhost:3000/admin",
});
