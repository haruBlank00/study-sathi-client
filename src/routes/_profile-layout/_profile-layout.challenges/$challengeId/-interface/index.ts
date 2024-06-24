import { ApiResponse } from "@/types/response";
import { Challenge } from "../../-interface";

export type CreateChallengeResponse = ApiResponse<{
  challenge: Challenge;
}>;

export type GetChallengeResponse = ApiResponse<{
  challenge: Challenge;
}>;

export type PutChallengeResponse = ApiResponse<{
  challenge: Challenge;
}>;
