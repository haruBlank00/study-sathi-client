import { useAxios } from "@/components/providers/axios-provider";
import { useMutation } from "@tanstack/react-query";
import { TProfile } from "../-form";
import { PutProfileResponse } from "../-interface";
import { ErrorResponse } from "@/types/response";

export const usePutProfile = () => {
  const axios = useAxios();
  const { mutate } = useMutation<PutProfileResponse, ErrorResponse, TProfile>({
    mutationFn: async ({ avatar, userName }) => {
      try {
        const formData = new FormData();
        avatar && formData.append("avatar", avatar);
        formData.append("userName", userName);
        const response = await axios({
          url: "/users/profile",
          method: "PUT",
          data: formData,
        });
        console.log({ response });
        return response.data;
      } catch (error) {
        console.log({ error });
      }
    },
    onSuccess(data) {
      console.log({ data }, "success....");
    },
    onError(error, variables, context) {
      console.log({ error, variables, context });
    },
  });

  return {
    putProfile: mutate,
  };
};
