import { useMutation } from "@tanstack/react-query";
import { getMagicLinkTokens } from "../-axios";

type MagicLinkParams = {
  email: string;
};
export const useGetMagicTokens = () => {
  const { data, error, mutateAsync, isSuccess, isError, isPending } =
    useMutation({
      mutationFn: async ({ email }: MagicLinkParams) => {
        await getMagicLinkTokens({ email });
      },
    });

  console.log({ error });

  return {
    data,
    error,
    getMagicTokens: mutateAsync,
    isSuccess,
    isError,
    isPending,
  };
};
