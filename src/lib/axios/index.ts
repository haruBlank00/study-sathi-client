import { authStore } from "@/store/auth/authStore";
import axios, { AxiosError } from "axios";
import { getEnv } from "../getEnv";

export const apiInstance = axios.create({
  baseURL: getEnv<string>("SS_API_END_POINT"),
});

apiInstance.interceptors.request.use(
  // @ts-expect-error No types in axios config and i dunno which type to use
  (config) => {
    const { access } = authStore.getState().tokens;
    return {
      ...config,
      headers: {
        Authorization: "Bearer " + access,
      },
    };
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error instanceof AxiosError) {
      const originalRequest = error.config!;
      /**
       * if the status is 401, user is unauth
       * check for refresh token and try to refresh it
       * it it falils again, user is unauth
       * redirect them to bye bye page
       */
      const status = error.response?.status;
      // const retried = originalRequest?._retry;
      if (status === 401) {
        const refreshToken = authStore.getState().tokens.refresh;

        if (!refreshToken) {
          return Promise.reject(error);
        }

        const response = await apiInstance.post("auth/refresh-token", {
          refreshToken,
        });

        const { tokens } = response.data.data;
        const success = response.data.success;
        if (success) {
          const { accessToken, refreshToken } = tokens;
          const updateToken = authStore.getState().updateToken;
          updateToken({
            access: accessToken,
            refresh: refreshToken,
          });

          apiInstance.defaults.headers.common["Authorization"] =
            `Bearer ${accessToken}`;

          return apiInstance(originalRequest);
        }
      }
      return Promise.reject(error);
    }

    return Promise.reject(error);
  }
);
export default apiInstance;
