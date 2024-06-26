import { cryptoId } from "@/lib/utils";
import { LinkProps } from "@tanstack/react-router";
import { Gauge, Swords } from "lucide-react";

export interface SideBarItem extends LinkProps {
  id: string;
  label: string;
  icon: JSX.Element;
  to: string;
}
export const sidebarData: SideBarItem[] = [
  {
    id: cryptoId(),
    label: "dashboard",
    to: "/dashboard/",
    icon: <Gauge />,
  },
  {
    id: cryptoId(),
    label: "challenge",
    to: "/challenges/",
    icon: <Swords />,
  },
];
