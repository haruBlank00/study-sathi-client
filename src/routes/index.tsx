import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: () => (
    <div>
      Hello /!
      <div>I am coomin soon. haha</div>
    </div>
  ),
});
