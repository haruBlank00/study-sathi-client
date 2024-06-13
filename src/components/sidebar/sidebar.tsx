import { useTailwindBreakpoint } from "@/hooks/useTailwindBreakPoint";
import { useState } from "react";
import { Burger } from "./components/burger";
import { ItemsMapper } from "./components/items-mapper";
import { SideBarItem } from "../../routes/(home)/-data/data";

export const Sidebar = ({ items }: { items: SideBarItem[] }) => {
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
        <div className="flex flex-col  flex-1 justify-between transition">
          <ItemsMapper items={items} />
        </div>
      </div>
      <div className="fixed top-4 right-4 lg:hidden" onClick={toggleSidebar}>
        <Burger />
      </div>
    </div>
  );
};
