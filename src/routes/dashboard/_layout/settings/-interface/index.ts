import { ApiResponse } from "@/types/response";

export type PutProfileResponse = ApiResponse<{
  username: string;
  avatar: string;
}>;
