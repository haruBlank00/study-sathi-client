import { useAxios } from "@/components/providers/axios-provider";
import { ErrorResponse } from "@/types/response";
import { useMutation } from "@tanstack/react-query";
import { TChallengeSchema } from "../-form/fields";
import { CreateChallengeResponse } from "../-interface";

export const useCreateChallenge = () => {
  const axios = useAxios();

  const { mutate, data, isPending } = useMutation<
    CreateChallengeResponse,
    ErrorResponse,
    TChallengeSchema
  >({
    mutationKey: ["create-challenge"],
    mutationFn: (data) => createChallenge(data),
    onError: (e) => {
      console.log({ e });
    },
    onSuccess: (data) => {
      console.log({ data });
    },
  });

  const createChallenge = async (data: TChallengeSchema) => {
    const result = await axios({
      method: "POST",
      url: "/challenge",
      data: data,
    });
    console.log({ result });
    return result;
  };

  return {
    createChallenge: (data: TChallengeSchema) => mutate(data),
    challenge: data,
    isChallengeCreating: isPending,
  };
};
