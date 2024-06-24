import { useAuthStore } from "@/store/auth/authStore";
import { useUserStore } from "@/store/auth/userStore";
import { useNavigate } from "@tanstack/react-router";

export const useLogout = () => {
  const { updateAuthStatus, updateToken } = useAuthStore();
  const { updateEmail } = useUserStore();
  const navigate = useNavigate();

  // ! TODO: make api request to logout and blackist token in backend

  const logout = () => {
    updateAuthStatus("unauthenticated");
    updateToken({ access: "", refresh: "" });
    updateEmail("");

    navigate({ to: "/byebye" });
  };

  return { logout };
};
