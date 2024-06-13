import { Sidebar } from "@/components/sidebar/sidebar";
import { createFileRoute } from "@tanstack/react-router";
import { sidebarData } from "./-data/data";
import { Header } from "./-components/sidebar/header/header";
export const Route = createFileRoute("/(home)/")({
  component: HomePage,
});

function HomePage() {
  return (
    <div className="flex flex-col">
      <Header />

      <div className="container">
        <Sidebar items={sidebarData} />
      </div>
    </div>
  );
}
