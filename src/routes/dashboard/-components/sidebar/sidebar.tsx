import { Separator } from "@/components/ui/separator";
import { Burger } from "./components/burger";
import { ConfirmLogoutModal } from "./components/confirm-logout-modal";
import { Item, ItemsMapper } from "./components/items-mapper";
import { sidebarData } from "./data";
import { SathiAvatar } from "@/components/sathi-avatar/sathi-avatar";
import { Settings } from "lucide-react";
import { Route as SettingsRoute } from "@/routes/dashboard/_layout/settings";
import { useState } from "react";
import { useTailwindBreakpoint } from "@/hooks/useTailwindBreakPoint";
export const Sidebar = () => {
  const breakPoint = useTailwindBreakpoint();
  console.log({ breakPoint })
  const [showSidebar, setShowSidebar] = useState(['lg', '2xl'].includes(breakPoint));

  const toggleSidebar = () => setShowSidebar(prev => !prev)
  const className = showSidebar ? "translate-x-0 flex" : "sm:hidden lg:translate-x-0 "
  return (
    <div>
      <div className={`${className} flex-col pr-4 transition w-72`}>
        <div className="flex items-center justify-between p-4">
          <SathiAvatar />
          <Burger />
        </div>

        <Separator className="my-4" />

        <div className="flex flex-col  flex-1 justify-between transition">
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
      <div className="fixed top-4 right-4 lg:hidden" onClick={toggleSidebar}>
        <Burger />
      </div>
    </div>);
};
