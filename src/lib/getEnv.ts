import { invariant } from "@tanstack/react-router";

type Env = "DEV" | "PROD" | "SSR" | "BASE_URL" | "MODE" | "SS_API_END_POINT";
export const getEnv = <T>(env: Env): T => {
  const value = import.meta.env[env];
  if (!value) {
    throw invariant('Environment variable "' + env + '" is not defined');
  }
  return value as T;
};
