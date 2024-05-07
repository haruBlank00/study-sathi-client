import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/byebye/")({
  component: () => <div>Hello /byebye/!</div>,
});
