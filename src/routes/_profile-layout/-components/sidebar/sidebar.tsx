import { Separator } from "@/components/ui/separator";
import { Burger } from "./components/burger";
import { ConfirmLogoutModal } from "./components/confirm-logout-modal";
import { Item, ItemsMapper } from "./components/items-mapper";
import { sidebarData } from "./data";
import { SathiAvatar } from "@/components/sathi-avatar/sathi-avatar";
import { Settings } from "lucide-react";
import { Route as SettingsRoute } from "@/routes/_profile-layout/settings";
import { useState } from "react";
import { useTailwindBreakpoint } from "@/hooks/useTailwindBreakPoint";
export const Sidebar = () => {
  const breakPoint = useTailwindBreakpoint();
  const [showSidebar, setShowSidebar] = useState(
    ["lg", "2xl"].includes(breakPoint)
  );

  console.log({ breakPoint, showSidebar });
  const toggleSidebar = () => setShowSidebar((prev) => !prev);
  const className = showSidebar
    ? "translate-x-0 flex"
    : "hidden lg:translate-x-0 ";
  return (
    <div className="relative">
      <div
        className={`${className} flex-col pr-4 transition w-72 h-screen sticky top-0`}
      >
        <div className="flex items-center justify-between p-4">
          <SathiAvatar />
          <div onClick={toggleSidebar} className="lg:hidden">
            <Burger />
          </div>
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
    </div>
  );
};
