import axios from "axios";

import { authSlice } from "@/store/reducers/auth-slice";

import { store } from "@/store/store";

import { tokenService } from "./token-service";
import config from "./config";

const api = axios.create({
  baseURL: `${config.apiUrl}/api/`,
  withCredentials: true,
});

api.interceptors.request.use(
  (config) => {
    const { token } = store.getState().auth;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (config) => config,
  (error) => {
    const { logout } = authSlice.actions;

    if (error.response.status === 401) {
      store.dispatch(logout());
      tokenService.clear();
    }

    return Promise.reject(error);
  }
);

export default api;
