import { Sidebar } from "@/components/sidebar/sidebar";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/")({
  component: DashboardPage,
});

function DashboardPage() {
  return (
    <div className="flex gap-4">
      <Sidebar />
      <div>hello /dashboard/</div>
    </div>
  );
}
