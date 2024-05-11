import { SuccessResponse } from "@/types/response";

export type Tag = {
  _id: string;
  name: string;
  normalized: string;
  count: number;
};

export type Challenge = {
  _id: string;
  name: string;
  description: string;
  days: number;
  privacy: string;
  tags: Tag[];
};

export type GetChallengesResponse = SuccessResponse<{
  message: string;
  data: {
    challenge: Challenge[];
  };
}>;
