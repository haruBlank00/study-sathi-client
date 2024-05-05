import { Button } from "@/components/ui/button";
import { Link, createFileRoute } from "@tanstack/react-router";
import { Plus } from "lucide-react";

export const Route = createFileRoute("/dashboard/_layout/challenge/")({
  component: ChallengePage,
});

function ChallengePage() {
  return (
    <div>
      <Link
        to="/dashboard/challenge/$challengeId"
        params={{
          challengeId: "new",
        }}
      >
        <Button className="gap-2 items-center">
          <Plus /> Create Challenge
        </Button>
      </Link>
    </div>
  );
}
