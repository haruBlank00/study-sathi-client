import { Separator } from "@/components/ui/separator";
import { LogOut } from "lucide-react";
import { SathiAvatar } from "../sathi-avatar/sathi-avatar";
import { Burger } from "./components/burger";
import { ItemsMapper } from "./components/items-mapper";
import { sidebarData } from "./data";

export const Sidebar = () => {
  return (
    <div className=" bg-red-200 w-40 flex flex-col">
      <div className="flex items-center justify-between p-4">
        <SathiAvatar />
        <Burger />
      </div>

      <Separator className="my-4" />

      <div className="flex flex-col  flex-1 justify-between">
        <div>
          <ItemsMapper items={sidebarData} />
        </div>

        <footer className="flex gap-2 justify-between cursor-pointer mt-auto p-4 capitalize hover:bg-yellow-200 transition">
          Logout
          <LogOut />
        </footer>
      </div>
    </div>
  );
};
