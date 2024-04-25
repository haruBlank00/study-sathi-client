import axios from "axios";
import { getEnv } from "../getEnv";

export const apiInstance = axios.create({
  baseURL: getEnv<string>("SS_API_END_POINT"),
});

export default apiInstance;
