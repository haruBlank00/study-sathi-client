import apiInstance from "@/lib/axios";
import { authStore, useAuthStore } from "@/store/auth/authStore";
import { Navigate, createFileRoute, redirect } from "@tanstack/react-router";
import { z } from "zod";
import { VerifyMagicResponse } from "./-types";

const magicParamsSchema = z.object({
  email: z.string().email().catch(""),
  token: z.string().catch(""),
});

export const Route = createFileRoute("/auth/_layout/magiclink/")({
  component: MagicLinkPage,
  validateSearch: magicParamsSchema,
  loaderDeps: ({ search: { email, token } }) => ({ email, token }),
  loader: async ({ deps: { email, token } }) => {
    try {
      const updateToken = authStore.getState().updateToken;
      const updateAuthStatus = authStore.getState().updateAuthStatus;
      const response = await apiInstance<VerifyMagicResponse>({
        method: "POST",
        url: "magic/verify",
        data: {
          email,
          token,
        },
      });
      const { accessToken: access, refreshToken: refresh } =
        response.data.data.tokens;

      updateToken({ access, refresh });
      updateAuthStatus("authenticated");
    } catch (error) {
      redirect({
        to: "/auth/signin",
        throw: true,
      });
    }
  },
  errorComponent: () => <Navigate to="/auth/signin" />,
});

function MagicLinkPage() {
  const { updateAuthStatus } = useAuthStore();
  updateAuthStatus("authenticated");

  return <Navigate to="/dashboard" />;
}
