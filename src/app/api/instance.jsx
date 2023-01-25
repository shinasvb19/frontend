import axios from "axios";
import { store } from "../store";

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

instance.interceptors.request.use((config) => {
  const token = store.getState()?.auth?.token;
  console.log("sote get Stateis ", token);
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});
export default instance;
