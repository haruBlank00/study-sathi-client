import { queryClient } from "@/components/providers/query-client/queryClient";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import apiInstance from "@/lib/axios";
import {
  Link,
  createFileRoute,
  useLoaderData,
  useParams,
} from "@tanstack/react-router";
import { toast } from "sonner";
import { GetLogsResponse } from "./-interface";
import { Timeline } from "./-components/timeline/timeline";
import { Separator } from "@/components/ui/separator";
export const Route = createFileRoute(
  "/_profile-layout/_profile-layout/challenges/$challengeId/logs/"
)({
  component: ChallengeLogs,
  loader: async ({ params }) => {
    const { challengeId } = params;
    const result = await queryClient.ensureQueryData<GetLogsResponse>({
      queryKey: ["logs", challengeId],
      queryFn: async () => {
        return await apiInstance({
          method: "GET",
          url: `/logs/${challengeId}`,
        });
      },
    });

    const data = result.data;
    if (!data.success) {
      toast.error(data.message);
      return {
        logs: [],
        challenge: null,
      };
    }

    const returnData = {
      logs: data.data.logs,
      challenge: data.data.challenge,
    };
    return returnData;
  },
});

function ChallengeLogs() {
  const { challengeId } = useParams({
    from: "/_profile-layout/_profile-layout/challenges/$challengeId/logs/",
  });

  const { logs, challenge } = useLoaderData({
    from: "/_profile-layout/_profile-layout/challenges/$challengeId/logs/",
  });

  console.log({ logs, challenge });

  return (
    <div>
      <Link
        to="/challenges/$challengeId/logs/$logId"
        params={{
          challengeId,
          logId: "new",
        }}
      >
        <Button type="button">Create Log</Button>
      </Link>

      <main className="mt-4">
        <div className="mb-4 prose">
          <h2 className="capitalize text-white">
            {challenge?.name}
            <span>({challenge?.days} Days)</span>
          </h2>
          <p className="text-white capitalize">{challenge?.description}</p>

          <ul className="flex gap-2 list-none">
            {challenge?.tags.map((tag) => {
              return (
                <li>
                  <Badge>{tag.tag}</Badge>
                </li>
              );
            })}
          </ul>
        </div>

        <Separator className="mb-4" />

        <Timeline logs={logs} title={`Logs for ${challenge?.name}`} />
      </main>
    </div>
  );
}
