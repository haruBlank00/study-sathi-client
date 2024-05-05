import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/auth/_layout")({
  component: () => (
    <div>
      <Outlet />
    </div>
  ),
});
