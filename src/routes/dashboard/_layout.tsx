import { Sidebar } from "@/components/sidebar/sidebar";
import { isAuthenticated } from "@/hooks/auth/useAuthStore";
import { Outlet, createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/_layout")({
  beforeLoad: async ({ location }) => {
    if (!isAuthenticated) {
      console.log("sheet guysss.");
      console.log(location.href);
      throw redirect({
        to: "/auth/signin/",
        search: {
          redirect: location.href,
        },
      });
    }
    console.log("yooo head");
  },
  component: () => (
    <div className="flex gap-4">
      <Sidebar />
      <div className="p-4 flex-1">
        <Outlet />
      </div>
    </div>
  ),
});
