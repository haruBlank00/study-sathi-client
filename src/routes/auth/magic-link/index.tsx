import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

// type SearchParams = {
//   email: string;
//   token: string;
// };

const magicParamsSchema = z.object({
  email: z.string().email().catch(""),
  token: z.string().catch(""),
});
export const Route = createFileRoute("/auth/magic-link/")({
  component: MagicLinkPage,
  validateSearch: magicParamsSchema,
});

function MagicLinkPage() {
  // const { email, token } = Route.useSearch();

  return <div>MagicLinkPage</div>;
}
