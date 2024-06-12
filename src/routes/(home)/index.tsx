import { Sidebar } from "@/components/sidebar/sidebar";
import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/(home)/")({
  component: HomePage,
});

function HomePage() {
  return (
    <div className="flex flex-col">
      <div>search</div>

      <div>
        <Sidebar />
      </div>
    </div>
  );
}
