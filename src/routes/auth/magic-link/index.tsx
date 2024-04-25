import { useQuery } from "@tanstack/react-query";
import { Navigate, createFileRoute } from "@tanstack/react-router";
import { Else, If, Then } from "react-if";
import { z } from "zod";
import { MagicLoader } from "./-components/loader";
import { getMagicLinkTokens } from "./-query";

const magicParamsSchema = z.object({
  email: z.string().email().catch(""),
  token: z.string().catch(""),
});

export const Route = createFileRoute("/auth/magic-link/")({
  component: MagicLinkPage,
  validateSearch: magicParamsSchema,
});

function MagicLinkPage() {
  const { email, token } = Route.useSearch();
  const { error, isLoading } = useQuery({
    queryKey: [token],
    queryFn: async () => await getMagicLinkTokens({ email, token }),
  });

  return (
    <If condition={isLoading && !error}>
      <Then>
        <MagicLoader />
      </Then>
      <Else>
        <Navigate to="/dashboard" />
      </Else>
    </If>
  );
}
