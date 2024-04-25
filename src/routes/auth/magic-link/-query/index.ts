import apiInstance from "@/lib/axios";
import { AxiosError } from "axios";

type MagicLinkParams = {
  email: string;
  token: string;
};
export const getMagicLinkTokens = async ({ email, token }: MagicLinkParams) => {
  try {
    const response = await apiInstance({
      method: "GET",
      url: "auth/magic-link",
      params: {
        email,
        token,
      },
    });
    return response.data.data;
  } catch (e) {
    if (e instanceof AxiosError) {
      throw Error(e.message);
    }
  }
};
