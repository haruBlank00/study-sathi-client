import { QueryClientProvider } from "@/components/providers/query-client/query-client-provider.tsx";
import { routeTree } from "./routeTree.gen.ts";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner.tsx";

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
      <Toaster richColors />
    </QueryClientProvider>
  );
};

export default App;
