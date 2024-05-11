import { useAxios } from "@/components/providers/axios-provider";
import { useMutation } from "@tanstack/react-query";
import { TChallengeSchema } from "../-form/fields";
import { CreateChallengeResponse } from "../-interface";
import { ErrorResponse } from "@/types/response";

export const useCreateChallenge = () => {
  const axios = useAxios();

  const { mutate, data, isPending } = useMutation<
    CreateChallengeResponse,
    ErrorResponse,
    TChallengeSchema
  >({
    mutationKey: ["create-challenge"],
    mutationFn: (data) => {
      const { days } = data;
      return createChallenge({
        ...data,
        days: Number(days),
      });
    },
    onSuccess: (data) => {
      console.log({ data });
    },
  });

  const createChallenge = async (data: TChallengeSchema) => {
    const result = await axios({
      method: "POST",
      url: "/challenges",
      data: data,
    });
    return result;
  };

  return {
    createChallenge: mutate,
    challenge: data,
    isChallengeCreating: isPending,
  };
};
