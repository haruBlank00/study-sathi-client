import { getEnv } from "@/lib/getEnv";
import { Axios } from "axios";
import { Dispatch, createContext, useEffect, useState } from "react";
type AxiosContextTye = {
  axios: Axios | null;
  tokens: {
    access: string;
    refresh: string;
  };
  setTokens: Dispatch<
    React.SetStateAction<{
      access: string;
      refresh: string;
    }>
  >;
};

const axiosContext = createContext<AxiosContextTye>({
  axios: null,
  tokens: {
    access: "",
    refresh: "",
  },
  setTokens: () => {},
});

const baseURL = getEnv<string>("SS_API_END_POINT");
export const AxiosProvider = ({ children }: { children: React.ReactNode }) => {
  const [axios, setAxios] = useState<Axios | null>(null);
  const [tokens, setTokens] = useState({ access: "", refresh: "" });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const requestConfig = (config: any) => {
    const { access, refresh } = tokens;
    if (!access && refresh) return config;

    return {
      ...config,
      headers: {
        Authorization: "Bearer " + access,
      },
    };
  };

  const requestError = (error: Error) => {
    return Promise.reject(error);
  };

  useEffect(() => {
    if (axios) return;

    const newAxios = new Axios({ baseURL });
    newAxios.interceptors.request.use(requestConfig, requestError);
    setAxios(newAxios);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <axiosContext.Provider value={{ axios, tokens, setTokens }}>
      {children}
    </axiosContext.Provider>
  );
};
