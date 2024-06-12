import { QueryClientProvider } from "@/components/providers/query-client/query-client-provider.tsx";
import { routeTree } from "./routeTree.gen.ts";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner.tsx";
import { ThemeProvider } from "./providers/theme-provider.tsx";

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="sathi-theme">
      <QueryClientProvider>
        <RouterProvider router={router} />
        <Toaster richColors />
      </QueryClientProvider>
    </ThemeProvider>

  );
};

export default App;
