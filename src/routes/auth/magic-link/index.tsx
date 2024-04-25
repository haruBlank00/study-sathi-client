import apiInstance from "@/lib/axios";
import { createFileRoute } from "@tanstack/react-router";
import { AxiosError } from "axios";
import { useEffect } from "react";
import { z } from "zod";

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

  useEffect(() => {
    apiInstance({
      method: "GET",
      url: "auth/magic-link",
      params: {
        email,
        token,
      },
    })
      .then((response) => {
        console.log({ response });
      })
      .catch((e) => {
        console.log({ e });
        if (e instanceof AxiosError) {
          console.log(e.message);
        }
      });
  }, []);

  return <div>MagicLinkPage</div>;
}
