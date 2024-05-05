import apiInstance from "@/lib/axios";
import { ErrorResponse, SuccessResponse } from "@/types/response";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
type MagicLinkParams = {
  email: string;
};

export const useGetMagicTokens = () => {
  const { data, error, mutateAsync, isSuccess, isError, isPending } =
    useMutation<
      SuccessResponse<{ message: string }>,
      ErrorResponse,
      MagicLinkParams
    >({
      mutationFn: ({ email }: MagicLinkParams) => {
        return getMagicLinkTokens({ email });
      },
      onError: (err) => {
        if (err.response) {
          const { error } = err.response.data;
          toast.error(error.message);
        }
      },
      onSuccess: (data) => {
        toast.success(data.data.data.message);
      },
    });

  return {
    data,
    error,
    getMagicTokens: mutateAsync,
    isSuccess,
    isError,
    isPending,
  };
};

const getMagicLinkTokens = ({ email }: MagicLinkParams) => {
  return apiInstance({
    method: "POST",
    url: "magic/send",
    data: {
      email,
    },
  });
};
