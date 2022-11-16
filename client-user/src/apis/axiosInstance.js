import axios from "axios";

export const product = axios.create({
  baseURL: "http://localhost:3000/pub",
});
