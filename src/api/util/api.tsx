import axios, { AxiosRequestConfig } from "axios";

import { API_URL_POKEMON } from "routes";

const defaultOptions = {
  baseURL: API_URL_POKEMON,
  headers: {
    "Content-Type": "application/json",
  },
};

const instance = axios.create(defaultOptions);

instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export { instance as api };
