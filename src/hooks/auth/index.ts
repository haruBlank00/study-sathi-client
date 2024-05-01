import { create } from "zustand";
import { persist } from "zustand/middleware";
type User = {
  id: string | null;
  email: string | null;
  name: string | null;
  avatar: string | null;
};

type UserAuthState = {
  isAuthenticated: boolean;
  accessToken: string | null;
  refreshToken: string | null;
  user: User;
};

type UserAuthStore = UserAuthState & {
  setAuthData: (data: Partial<UserAuthState>) => void;
};

export const useAuthStore = create<
  UserAuthStore,
  [["zustand/persist", UserAuthStore]]
>(
  persist(
    (set) => ({
      isAuthenticated: false,
      accessToken: null,
      refreshToken: null,
      user: {
        id: null,
        email: null,
        name: null,
        avatar: null,
      },
      setAuthData: (data) => set({ ...data }),
    }),
    {
      name: "auth-store",
    }
  )
);
