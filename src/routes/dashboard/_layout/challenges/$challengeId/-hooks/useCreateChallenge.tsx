import { useAxios } from "@/components/providers/axios-provider";
import { useMutation } from "@tanstack/react-query";
import { TChallenge } from "../-form/fields";
import { CreateChallengeResponse } from "../-interface";
import { ErrorResponse } from "@/types/response";

export const useCreateChallenge = () => {
  const axios = useAxios();

  const { mutate, data, isPending } = useMutation<
    CreateChallengeResponse,
    ErrorResponse,
    TChallenge
  >({
    mutationKey: ["create-challenge"],
    mutationFn: (data) => {
      const { days } = data;

      const challengeData = {
        ...data,
        days,
      };
      return createChallenge(challengeData);
    },
    onSuccess: (data) => {
      console.log({ data });
    },
  });

  const createChallenge = async (data: TChallenge) => {
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
