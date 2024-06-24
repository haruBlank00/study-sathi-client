import { CheckEmailForLogin } from "@/components/login/check-email";
import { authStore, useAuthStore } from "@/store/auth/authStore";
import { useUserStore } from "@/store/auth/userStore";
import { Outlet, createFileRoute, redirect } from "@tanstack/react-router";
import { Sidebar } from "./-components/sidebar/sidebar";
import { SathiCrumb } from "@/components/sathi-crumb/sathi-crumb";

export const Route = createFileRoute("/_profile-layout/_profile-layout")({
  beforeLoad: async ({ location }) => {
    const isGoinToDashboard = location.pathname === "/dashboard";

    const isAuthLoading = authStore.getState().authStatus === "loading";
    const skipAuth = isGoinToDashboard && isAuthLoading;

    const isAuthenticated = authStore.getState().isAuthenticated;
    if (!skipAuth && !isAuthenticated) {
      throw redirect({
        to: "/auth/signin/",
        search: {
          redirect: location.href,
        },
      });
    }
  },
  component: DashboardPage,
});
export function DashboardPage() {
  const { authStatus } = useAuthStore();
  const { email } = useUserStore();

  const isAuthLoading = authStatus === "loading";

  if (isAuthLoading) {
    return <CheckEmailForLogin email={email!} />;
  }

  return (
    <div className="flex gap-4 min-h-screen">
      <Sidebar />
      <div className="p-4 flex-1">
        <SathiCrumb />

        <Outlet />
      </div>
    </div>
  );
}
