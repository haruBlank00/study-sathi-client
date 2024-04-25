import { invariant } from "@tanstack/react-router";

interface Env extends Omit<ImportMetaEnv, "key"> {}

export const getEnv = <T>(env: keyof Env): T => {
  const value = import.meta.env[env];
  if (!value) {
    throw invariant('Environment variable "' + env + '" is not defined');
  }
  return value as T;
};
