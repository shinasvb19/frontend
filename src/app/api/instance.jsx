import axios from "axios";
import { logOut } from "../../features/auth/authSlice";
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
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // console.log("error occuraced in ");
    if (error.response.status === 403 || error.response.status === 401) {
      // console.log("logout have to tiger");
      store.dispatch(logOut());
    } else {
      return Promise.reject(error);
    }
  }
);
export default instance;
