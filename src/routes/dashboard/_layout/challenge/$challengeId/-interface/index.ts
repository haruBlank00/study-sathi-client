import { SuccessResponse } from "@/types/response";

type Tag = {
  name: string;
  normalized: string;
  count: number;
};
type Challenge = {
  name: string;
  description: string;
  days: number;
  privacy: string;
  tags: Tag[];
};
export type CreateChallengeResponse = SuccessResponse<{
  message: string;
  data: {
    challenge: Challenge;
  };
}>;
