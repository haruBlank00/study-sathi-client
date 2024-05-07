/* eslint-disable react-refresh/only-export-components */
import axiosInstance from "@/lib/axios";
import { useAuthStore } from "@/store/auth/authStore";
import { AxiosInstance, InternalAxiosRequestConfig } from "axios";
import React, { createContext, useEffect } from "react";

export const axiosContext = createContext<AxiosInstance>(axiosInstance);

export const AxiosProvider = ({ children }: { children: React.ReactNode }) => {
  const {
    isAuthenticated,
    tokens: { access },
  } = useAuthStore();

  const onFulfilled = (config: InternalAxiosRequestConfig) => {
    if (!isAuthenticated) return config;

    return {
      ...config,
      headers: {
        Authorization: "Bearer " + access,
      },
    } as unknown as InternalAxiosRequestConfig;
  };

  const onRejected = (error: Error) => {
    return error;
  };

  useEffect(() => {
    axiosInstance.interceptors.request.use(onFulfilled, onRejected);
  }, []);
  return (
    <axiosContext.Provider value={axiosInstance}>
      {children}
    </axiosContext.Provider>
  );
};

export const useAxios = () => {
  return React.useContext(axiosContext);
};
