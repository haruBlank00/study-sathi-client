import { SuccessResponse } from "@/types/response";

export type Tag = {
  _id: string;
  tag: string;
  normalized: string;
  count: number;
};

export type Challenge = {
  _id: string;
  createdAt: Date;
  days: number;
  description: string;
  name: string;
  privacy: string;
  tags: Tag[];
};

export type GetChallengesResponse = SuccessResponse<{
  challenges: Challenge[];
}>;
