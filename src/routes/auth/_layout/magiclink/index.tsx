import { useAuthStore } from "@/hooks/auth/useAuthStore";
import apiInstance from "@/lib/axios";
import {
  Navigate,
  createFileRoute,
  redirect,
  useLoaderData,
} from "@tanstack/react-router";
import { useEffect } from "react";
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
      const response = await apiInstance<VerifyMagicResponse>({
        method: "POST",
        url: "magic/verify",
        data: {
          email,
          token,
        },
      });
      return response.data.data.tokens;
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
  const { accessToken, refreshToken } = useLoaderData({
    from: "/auth/_layout/magiclink/",
  });
  const { setAuthData } = useAuthStore();

  useEffect(() => {
    setAuthData({
      isAuthenticated: true,
      accessToken,
      refreshToken,
    });
  }, []);
  return <Navigate to="/dashboard" />;
}
