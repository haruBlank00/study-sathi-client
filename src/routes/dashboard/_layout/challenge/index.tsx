import { queryClient } from "@/components/providers/query-client/queryClient";
import { Button } from "@/components/ui/button";
import apiInstance from "@/lib/axios";
import {} from "@tanstack/query-core";

import { Link, createFileRoute, useLoaderData } from "@tanstack/react-router";
import { Plus } from "lucide-react";
import { GetChallengesResponse } from "./-interface";
import { SathiCrumb } from "@/components/sathi-crumb/sathi-crumb";
import { ChallengeList } from "./-components/challenge/challenge-list";

export const Route = createFileRoute("/dashboard/_layout/challenge/")({
  component: ChallengePage,
  loader: async (): Promise<GetChallengesResponse> => {
    const result = await queryClient.ensureQueryData({
      queryKey: ["challenges"],
      queryFn: async () => {
        return await apiInstance({
          method: "GEt",
          url: "/challenges",
        });
      },
    });
    return result;
  },
});

function ChallengePage() {
  const data = useLoaderData({
    from: "/dashboard/_layout/challenge/",
  });

  console.log({ data });

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

      <main>
        <SathiCrumb />

        <ChallengeList challenges={data.data.data.challenges} />
      </main>
    </div>
  );
}
