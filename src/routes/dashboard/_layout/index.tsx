import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/_layout/")({
  component: DashboardPage,
});
function DashboardPage() {
  return <div className="flex gap-4">m dboard</div>;
}
