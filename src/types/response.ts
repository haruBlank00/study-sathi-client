/**
 * path: src/types/response.ts
 * @description WE have a generic Success and Error response type which will be used to type the rest of the response of the api
 * The response will have
 * @param ()
 */
import { AxiosResponse } from "axios";

/**
 * We define the success and error responses from our backend
 */

export type SuccessResponse<T> = AxiosResponse<
  {
    message: string;
    success: true;
  } & T
>;

export type ErrorResponse = AxiosResponse<{
  statusCode: number;
  success: false;
  message: string;
  // error: {
  //   message: T;
  //   name: string;
  // };
}>;

export type ApiResponse<T> = SuccessResponse<T> | ErrorResponse;
// export type ApiResponse<T> =
