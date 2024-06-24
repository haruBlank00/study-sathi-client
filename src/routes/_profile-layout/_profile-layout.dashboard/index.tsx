import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/_profile-layout/_profile-layout/dashboard/"
)({
  component: () => (
    <div>Hello /_dashboard/_dashboard/dashboard/dashboard/!</div>
  ),
});
