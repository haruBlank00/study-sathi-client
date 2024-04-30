import { Navigate, createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { If, Then } from "react-if";
import { z } from "zod";
import { MagicLoader } from "./-components/loader";
import { useGetMagicTokens } from "../signin/-hooks/useGetMagicLinkTokens";

const magicParamsSchema = z.object({
  email: z.string().email().catch(""),
  token: z.string().catch(""),
});

export const Route = createFileRoute("/auth/verify-magic-link/")({
  component: MagicLinkPage,
  validateSearch: magicParamsSchema,
});

function MagicLinkPage() {
  const { email, token } = Route.useSearch();
  const { getMagicTokens, isPending, isSuccess } = useGetMagicTokens();

  useEffect(() => {
    getMagicTokens({
      email,
    });
  }, [email, getMagicTokens, token]);

  if (isSuccess) {
    Navigate({
      to: "/dashboard",
    });
  }

  return (
    <If condition={isPending}>
      <Then>
        <MagicLoader />
      </Then>
    </If>
  );
}
