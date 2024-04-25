import apiInstance from "@/lib/axios";
import { getEnv } from "@/lib/getEnv";
import { createFileRoute } from "@tanstack/react-router";
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
  console.log("env varuable/", getEnv("SS_API_END_POINT"));

  useEffect(() => {
    apiInstance({
      method: "post",
      url: "auth/magic-link",
    });
  }, []);

  return <div>MagicLinkPage</div>;
}
