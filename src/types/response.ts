import { AxiosError, AxiosResponse } from "axios";

/**
 * We define the success and error responses from our backend
 */
export type SuccessResponse<T> = AxiosResponse<{
  success: true;
  data: T;
}>;

export type ErrorResponse = AxiosError<{
  statusCode: number;
  success: false;
  error: {
    message: string;
    name: string;
  };
}>;

export type ApiResponse<T> = SuccessResponse<T> | ErrorResponse;
