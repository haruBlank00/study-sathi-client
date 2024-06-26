import { queryClient } from "@/components/providers/query-client/queryClient";
import { Button } from "@/components/ui/button";
import apiInstance from "@/lib/axios";
import {} from "@tanstack/query-core";

import { Link, createFileRoute, useLoaderData } from "@tanstack/react-router";
import { Plus } from "lucide-react";
import { Challenge, GetChallengesResponse } from "./-interface";
// import { SathiCrumb } from "@/components/sathi-crumb/sathi-crumb";
import { ChallengeList } from "./-components/challenge/challenge-list";
import { toast } from "sonner";

export const Route = createFileRoute(
  "/_profile-layout/_profile-layout/challenges/"
)({
  component: ChallengePage,
  loader: async (): Promise<Challenge[]> => {
    const result = await queryClient.ensureQueryData<GetChallengesResponse>({
      queryKey: ["challenges"],
      queryFn: async () => {
        return await apiInstance({
          method: "GEt",
          url: "/challenges",
        });
      },
    });
    const data = result.data;

    if (!data.success) {
      toast.error(data.message);
      return [];
    }
    return result.data.challenges;
  },
});

function ChallengePage() {
  const challenges = useLoaderData({
    from: "/_profile-layout/_profile-layout/challenges/",
  });

  console.log({ challenges });

  return (
    <div>
      <div className="flex justify-end">
        <Link
          to="/challenges/$challengeId"
          params={{
            challengeId: "new",
          }}
        >
          <Button className="gap-2 items-center">
            <Plus /> Create Challenge
          </Button>
        </Link>
      </div>

      <main className="mt-4">
        <h1 className="mb-4 text-2xl font-semibold">
          Keep on challenging yourself...{" "}
        </h1>
        <ChallengeList challenges={challenges} />
      </main>
    </div>
  );
}
