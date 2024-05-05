import apiInstance from "@/lib/axios";
import { ErrorResponse, SuccessResponse } from "@/types/response";
import { useMutation } from "@tanstack/react-query";

type VerifyMagicLinkParams = {
  email: string;
  token: string;
};

export const useVerifyMagicLink = () => {
  const { isPending, mutate } = useMutation<
    SuccessResponse,
    ErrorResponse,
    VerifyMagicLinkParams
  >({
    mutationKey: ["verify-magic-link"],
    mutationFn: ({ email, token }) => {
      return verifyMagicLink({ email, token });
    },
    onError: (err) => {
      console.log({ err });
    },
    // onSuccess: () => {
    //   navigate.
    // },
  });

  return {
    verifyMagicLink: mutate,
    isPending,
  };
};

const verifyMagicLink = ({ email, token }: VerifyMagicLinkParams) => {
  return apiInstance({
    method: "POST",
    url: "magic/verify",
    data: {
      email,
      token,
    },
  });
};
