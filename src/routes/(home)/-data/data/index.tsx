import { cryptoId } from "@/lib/utils";
import { LinkProps } from "@tanstack/react-router";
import { Anvil, Home, Tags } from "lucide-react";

export interface SideBarItem extends LinkProps {
  id: string;
  label: string;
  icon: JSX.Element;
  // to: keyof FileRoutesByPath;
}
export const sidebarData: SideBarItem[] = [
  {
    id: cryptoId(),
    label: "Home",
    to: "/",
    icon: <Home />,
  },
  {
    id: cryptoId(),
    label: "Tags",
    to: "/tags",
    icon: <Tags />,
  },
  {
    id: cryptoId(),
    label: "Q&A",
    to: "q&a",
    icon: <Anvil />,
  },
];
