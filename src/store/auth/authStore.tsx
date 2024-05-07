import { create } from "zustand";
import zustyMiddleware from "zustymiddlewarets";
import { persist } from "zustand/middleware";
// export enum AUTH_STATUS {
//   UNAUTHENTICATED = "unauthenticated",
//   AUTHENTICATED = "authenticated",
//   LOADING = "loading",
// }

export type AUTH_STATUS = "unauthenticated" | "authenticated" | "loading";

type State = {
  authStatus: AUTH_STATUS;
  isAuthenticated: boolean;
  tokens: {
    access: string;
    refresh: string;
  };
};

type Actions = {
  updateAuthStatus: (status: AUTH_STATUS) => void;
};

export const authStore = create<State & Actions>()(
  persist(
    zustyMiddleware((set) => ({
      authStatus: "unauthenticated",
      isAuthenticated: false,
      tokens: {
        access: "",
        refresh: "",
      },
      updateAuthStatus: (status) =>
        set({
          authStatus: status,
          isAuthenticated: status === "authenticated",
        }),
    })),
    {
      name: "study-auth-store",
    }
  )
);

export const useAuthStore = () => {
  const authStatus = authStore((state) => state.authStatus);
  const isAuthenticated = authStore((state) => state.isAuthenticated);
  const tokens = authStore((state) => state.tokens);

  const updateAuthStatus = authStore((state) => state.updateAuthStatus);
  return { authStatus, updateAuthStatus, isAuthenticated, tokens };
};
