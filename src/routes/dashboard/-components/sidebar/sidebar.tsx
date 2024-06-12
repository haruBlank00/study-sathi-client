import { Separator } from "@/components/ui/separator";
import { Burger } from "./components/burger";
import { ConfirmLogoutModal } from "./components/confirm-logout-modal";
import { Item, ItemsMapper } from "./components/items-mapper";
import { sidebarData } from "./data";
import { SathiAvatar } from "@/components/sathi-avatar/sathi-avatar";
import { Settings } from "lucide-react";
import { Route as SettingsRoute } from "@/routes/dashboard/_layout/settings";
export const Sidebar = () => {
  return (
    <div className="w-50 flex flex-col pr-4">
      <div className="flex items-center justify-between p-4">
        <SathiAvatar />
        <Burger />
      </div>

      <Separator className="my-4" />

      <div className="flex flex-col  flex-1 justify-between">
        <ItemsMapper items={sidebarData} />

        <div>
          <Item
            item={{
              icon: <Settings />,
              label: "Settings",
              to: SettingsRoute.path,
              id: crypto.randomUUID(),
            }}
          />
          <ConfirmLogoutModal />
        </div>
      </div>
    </div>
  );
};
