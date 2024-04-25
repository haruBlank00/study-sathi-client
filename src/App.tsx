import { QueryClientProvider } from "@/components/providers/query-client-provider.tsx";
import { routeTree } from "./routeTree.gen.ts";
import { RouterProvider, createRouter } from "@tanstack/react-router";

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
const App = () => {
  return (
    <QueryClientProvider>
      <RouterProvider router={router} />;
    </QueryClientProvider>
  );
};

export default App;
