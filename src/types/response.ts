import { AxiosError, AxiosResponse } from "axios";

/**
 * We define the success and error responses from our backend
 */
export type SuccessResponse<T> = AxiosResponse<{
  success: true;
  data: {
    // [key: string]: T;
    [key: string]: Record<string, T>;
  };
}>;

export type ErrorResponse<T = string> = AxiosError<{
  statusCode: number;
  success: false;
  error: {
    message: T;
    name: string;
  };
}>;

export type ApiResponse<T> = SuccessResponse<T> | ErrorResponse;
