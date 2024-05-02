import { useAuthStore } from "@/hooks/auth";
import axiosInstance from "@/lib/axios";
import { AxiosInstance, InternalAxiosRequestConfig } from "axios";
import React, { createContext, useEffect } from "react";

const axiosContext = createContext<AxiosInstance>(axiosInstance);

export const AxiosProvider = ({ children }: { children: React.ReactNode }) => {
  const { accessToken, isAuthenticated } = useAuthStore();

  const onFulfilled = (config: InternalAxiosRequestConfig) => {
    if (!isAuthenticated) return config;

    return {
      ...config,
      headers: {
        Authorization: "Bearer " + accessToken,
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
