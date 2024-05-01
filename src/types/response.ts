import { AxiosError, AxiosResponse } from "axios";

/**
 * We define the success and error responses from our backend
 */
export type SuccessResponse = AxiosResponse<{
  success: true;
  data: { message: string };
}>;

export type ErrorResponse = AxiosError<{
  statusCode: number;
  success: false;
  error: {
    message: string;
    name: string;
  };
}>;

export type ApiResponse = SuccessResponse | ErrorResponse;
