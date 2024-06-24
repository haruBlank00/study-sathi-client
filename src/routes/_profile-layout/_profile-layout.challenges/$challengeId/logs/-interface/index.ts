import { SuccessResponse } from "@/types/response";
import { Log } from "../$logId/-interface";
import { Challenge } from "../../../-interface";

export type GetLogsResponse = SuccessResponse<{
  data: {
    logs: Log[];
    challenge: Challenge;
  };
}>;
