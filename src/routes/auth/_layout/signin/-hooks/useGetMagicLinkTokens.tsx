import apiInstance from "@/lib/axios";
import { useAuthStore } from "@/store/auth/authStore";
import { useUserStore } from "@/store/auth/userStore";
import { ErrorResponse, SuccessResponse } from "@/types/response";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";
type MagicLinkParams = {
  email: string;
};

export const useGetMagicTokens = () => {
  const { updateAuthStatus } = useAuthStore();

  const { updateEmail } = useUserStore();

  const navigate = useNavigate();

  const { data, error, mutate, isSuccess, isError, isPending } = useMutation<
    SuccessResponse<{ message: string }>,
    ErrorResponse,
    MagicLinkParams
  >({
    mutationFn: ({ email }: MagicLinkParams) => getMagicLinkTokens({ email }),
    onError: (err) => {
      console.log("error here?", err)
      if (err.request) {
        const { error } = err.request.data;
        toast.error(error.message);
      }
    },
    onSuccess: (data, variables) => {
      toast.success(data.data.message);

      updateAuthStatus("loading");
      updateEmail(variables.email);

      navigate({ to: "/dashboard/" });
    },
  });

  return {
    data,
    error,
    getMagicTokens: mutate,
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
