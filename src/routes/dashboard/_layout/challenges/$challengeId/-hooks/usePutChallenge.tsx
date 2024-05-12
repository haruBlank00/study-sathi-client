import apiInstance from "@/lib/axios";
import { Challenge } from "@/routes/dashboard/_layout/challenges/-interface/index";
import { ErrorResponse } from "@/types/response";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { TChallenge } from "../-form/fields";
import { PutChallengeResponse } from "../-interface";
import { Route } from "../index";
export const usePutChallenge = () => {
  const { challengeId } = Route.useParams();
  const { mutate, data, isPending } = useMutation<
    PutChallengeResponse,
    ErrorResponse,
    TChallenge
  >({
    mutationKey: ["create-challenge"],
    mutationFn: async (data) =>
      apiInstance({
        url: "/challenges/" + challengeId,
        method: "PUT",
        data,
      }),

    onSuccess() {
      toast.success("Challenge updated successfully");
    },
    onError(error) {
      toast.error(error.data.message);
    },
  });

  let updatedChallenge: Challenge | undefined = undefined;

  if (data?.data.success) {
    updatedChallenge = data.data.challenge;
  }

  return {
    putChallenge: mutate,
    updatedChallenge,
    isChallengeUpdating: isPending,
  };
};
