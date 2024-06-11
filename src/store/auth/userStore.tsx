import { create } from "zustand";
import { persist } from "zustand/middleware";
import zustyMiddleware from "zustymiddlewarets";

type Store = {
  email: string;
  _id: string;
};

type Actions = {
  updateEmail: (email: Store['email']) => void;
  updateId: (id: Store['_id']) => void;
};

const userStore = create<Store & Actions>()(
  persist(
    zustyMiddleware((set) => ({
      email: "",
      _id: "",
      updateEmail: (email) => set({ email }),
      updateId: (id) => set({ _id: id })
    })),
    { name: "study-user-store" }
  )
);

export const useUserStore = () => {
  const email = userStore((state) => state.email);
  const updateEmail = userStore((state) => state.updateEmail);

  const _id = userStore((state) => state._id)
  const updateId = userStore(state => state.updateId);

  return {
    email,
    updateEmail,

    _id,
    updateId
  };
};
