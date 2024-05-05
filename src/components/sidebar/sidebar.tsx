import { SathiAvatar } from "../sathi-avatar/sathi-avatar";
import { Separator } from "@/components/ui/separator";
import { Burger } from "./components/burger";
import { ItemsMapper } from "./components/items-mapper";
import { sidebarData } from "./data";

export const Sidebar = () => {
  return (
    <div className="min-h-screen bg-red-200 w-40">
      <div className="flex items-center justify-between p-4">
        <SathiAvatar />
        <Burger />
      </div>

      <Separator className="my-4" />

      <ItemsMapper items={sidebarData} />
    </div>
  );
};
