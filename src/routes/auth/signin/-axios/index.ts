import apiInstance from "@/lib/axios";

type MagicLinkParams = {
  email: string;
};

type SuccessResponse = {
  data: {
    message: string;
  };
};

// type ErrorResponse = {
//   error: {
//     message: string;
//     name: string;
//   };
//   status: number;
//   success: boolean;
// };
export const getMagicLinkTokens = async ({ email }: MagicLinkParams) => {
  const response = await apiInstance<SuccessResponse>({
    method: "POST",
    url: "magic/send",
    data: {
      email,
    },
  });
  return response.data.data;
};
