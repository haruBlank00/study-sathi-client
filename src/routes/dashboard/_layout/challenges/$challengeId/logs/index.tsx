import { queryClient } from "@/components/providers/query-client/queryClient";
import { Button } from "@/components/ui/button";
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
export const Route = createFileRoute(
  "/dashboard/_layout/challenges/$challengeId/logs/"
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
      return [];
    }
    return data.data.logs;
  },
});

function ChallengeLogs() {
  const { challengeId } = useParams({
    from: "/dashboard/_layout/challenges/$challengeId/logs/",
  });

  const logs = useLoaderData({
    from: "/dashboard/_layout/challenges/$challengeId/logs/",
  });

  console.log({ logs })

  return (
    <div>
      <Link
        to="/dashboard/challenges/$challengeId/logs/$logId"
        params={{
          challengeId,
          logId: "new",
        }}
      >
        <Button type="button">Create Log</Button>
      </Link>

      <main className="mt-4">
        <Timeline logs={logs} />
      </main>
    </div>
  );
}
