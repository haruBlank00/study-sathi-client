import { queryClient } from "@/components/providers/query-client/queryClient";
import apiInstance from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export const useDeleteChallenge = () => {
  const { mutate, isPending } = useMutation({
    mutationFn: async (challengeId: string) =>
      apiInstance({
        method: "DELETE",
        url: "/challenges/" + challengeId,
      }),
    onSuccess: () => {
      toast.success("Challenge deleted successfully");
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["challenges"],
      });
    },
    onError: (e) => {
      toast.error(e.message);
    },
  });

  return {
    deleteChallenge: mutate,
    isDeletingChallenge: isPending,
  };
};
