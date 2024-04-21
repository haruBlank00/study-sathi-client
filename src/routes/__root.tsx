import { createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
export const Route = createRootRoute({
  component: RootPage,
});

function RootPage() {
  return (
    <div>
      <h1>Hello React :)</h1>

      <TanStackRouterDevtools />
    </div>
  );
}
