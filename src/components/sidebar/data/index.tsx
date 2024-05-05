import { cryptoId } from "@/lib/utils";
import { FileRoutesByPath, LinkProps } from "@tanstack/react-router";
import { Gauge, Swords } from "lucide-react";

export interface SideBarItem extends LinkProps {
  id: string;
  label: string;
  to: keyof FileRoutesByPath;
  icon: JSX.Element;
}
export const sidebarData: SideBarItem[] = [
  {
    id: cryptoId(),
    label: "dashboard",
    to: "/dashboard/_layout",
    icon: <Gauge />,
  },
  {
    id: cryptoId(),
    label: "challenge",
    to: "/dashboard/_layout/challenge/",
    icon: <Swords />,
  },
];
