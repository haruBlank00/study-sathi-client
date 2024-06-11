import { useMutation } from "@tanstack/react-query";
import { CreateLogData, CreateLogResponse } from "../-interface";
import { ErrorResponse } from "@/types/response";
import { TLog } from "../../-form/fields";
import apiInstance from "@/lib/axios";

export const useCreateLog = () => {
  const { mutate, data, isPending } = useMutation<
    CreateLogResponse,
    ErrorResponse,
    CreateLogData
  >({
    mutationFn: async (data) => createLog(data),
  });

  return {
    createLog: mutate,
    log: data,
    isLogCreating: isPending,
  };
};

const createLog = async (data: TLog) => {
  return await apiInstance({
    method: "POST",
    url: `/logs`,
    data: data,
  });
};
