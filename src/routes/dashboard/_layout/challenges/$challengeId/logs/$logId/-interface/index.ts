// import { Challenge } from "@/routes/dashboard/_layout/challenges/-interface";

import { SuccessResponse } from "@/types/response";
import { TLog } from "../../-form/fields";
import { Challenge } from "../../../../-interface";

export type Log = {
  _id: string;
  createdAt: Date;
  content: string;
  day: number;
  challenge: Challenge;
};

export type CreateLogResponse = SuccessResponse<{
  log: Log;
}>;

export type CreateLogData = {
  challengeId: string;
} & TLog;

export type GetLogResponse = SuccessResponse<{
  data: {
    log: Log;
  };
}>;
