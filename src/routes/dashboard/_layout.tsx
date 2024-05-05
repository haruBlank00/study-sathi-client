import { Sidebar } from "@/components/sidebar/sidebar";
import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/_layout")({
  component: () => (
    <div className="flex gap-4">
      <Sidebar />
      <div className="p-4 flex-1">
        <Outlet />
      </div>
    </div>
  ),
});
