import { SuccessResponse } from "@/types/response";
import { Challenge } from "../../-interface";

export type CreateChallengeResponse = SuccessResponse<{
  message: string;
  data: {
    challenge: Challenge;
  };
}>;
