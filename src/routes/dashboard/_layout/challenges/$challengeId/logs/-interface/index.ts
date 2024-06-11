import { SuccessResponse } from "@/types/response";
import { Log } from "../$logId/-interface";

export type GetLogsResponse = SuccessResponse<{
  data: {
    logs: Log[];
  };
}>;
