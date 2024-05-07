import { create } from "zustand";
import zustyMiddleware from "zustymiddlewarets";
import { persist } from "zustand/middleware";
// export enum AUTH_STATUS {
//   UNAUTHENTICATED = "unauthenticated",
//   AUTHENTICATED = "authenticated",
//   LOADING = "loading",
// }

import { produce } from "immer";
export type AUTH_STATUS = "unauthenticated" | "authenticated" | "loading";

type Tokens = {
  access: string;
  refresh: string;
};
type State = {
  authStatus: AUTH_STATUS;
  isAuthenticated: boolean;
  tokens: Tokens;
};

type Actions = {
  updateAuthStatus: (status: AUTH_STATUS) => void;
  updateToken: (tokens: Tokens) => void;
};

export const authStore = create<State & Actions>()(
  persist(
    zustyMiddleware((set) => ({
      // *** STATE ***
      authStatus: "unauthenticated",
      isAuthenticated: false,
      tokens: {
        access: "",
        refresh: "",
      },

      // *** ACTIONS***
      updateAuthStatus: (status) =>
        set((state) =>
          produce(state, (draft) => {
            draft.authStatus = status;
            draft.isAuthenticated = status === "authenticated";
          })
        ),

      updateToken: (tokens) =>
        set((state) =>
          produce(state, (draft) => {
            draft.tokens = tokens;
          })
        ),
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
  const updateToken = authStore((state) => state.updateToken);
  return { authStatus, updateAuthStatus, isAuthenticated, tokens, updateToken };
};
