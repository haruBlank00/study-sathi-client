import { create } from "zustand";
import { persist } from "zustand/middleware";
import zustyMiddleware from "zustymiddlewarets";

type Store = {
  email: string;
};

type Actions = {
  updateEmail: (email: string) => void;
};

const userStore = create<Store & Actions>()(
  persist(
    zustyMiddleware((set) => ({
      email: "",
      updateEmail: (email) => set({ email }),
    })),
    { name: "study-user-store" }
  )
);

export const useUserStore = () => {
  const email = userStore((state) => state.email);
  const updateEmail = userStore((state) => state.updateEmail);

  return {
    email,
    updateEmail,
  };
};
