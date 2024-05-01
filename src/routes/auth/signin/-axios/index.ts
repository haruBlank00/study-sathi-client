import apiInstance from "@/lib/axios";
import axios from "axios";

export const getMagicLinkTokens = async ({ email }: MagicLinkParams) => {
  try {
    const response = await apiInstance<SuccessResponse>({
      method: "POST",
      url: "magic/send",
      data: {
        email,
      },
    });
    const data = response.data.data;
    return { success: true, data };
  } catch (error) {
    if (error) {
      // throw new Error(e.message);
      if (axios.isAxiosError<ErrorResponse>(error)) {
        const errorData = error.response?.data.error;
        return { success: false, error: errorData };
      }
    }
  }
};

type MagicLinkParams = {
  email: string;
};

type SuccessResponse = {
  data: {
    message: string;
  };
};

type ErrorResponse = {
  error: {
    message: string;
    name: string;
  };
  status: number;
  success: boolean;
};
