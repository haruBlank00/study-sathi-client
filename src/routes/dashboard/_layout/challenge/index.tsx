import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/_layout/challenge/")({
  component: ChallengePage,
});

function ChallengePage() {
  return <div>Hello /dashboard/challenge/!</div>;
}
