import { Separator } from "@/components/ui/separator";
import { Burger } from "./components/burger";
import { ConfirmLogoutModal } from "./components/confirm-logout-modal";
import { ItemsMapper } from "./components/items-mapper";
import { sidebarData } from "./data";
import { SathiAvatar } from "@/components/sathi-avatar/sathi-avatar";

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

        <ConfirmLogoutModal />
      </div>
    </div>
  );
};
