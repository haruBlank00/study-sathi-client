import { queryClient } from "@/components/providers/query-client/queryClient";
import apiInstance from "@/lib/axios";
import {
  createFileRoute,
  notFound,
  useLoaderData,
} from "@tanstack/react-router";
import { GetLogResponse } from "./-interface";
import { MdxPreview } from "@/components/sathi-editor/mdx-preview";
export const Route = createFileRoute(
  "/dashboard/_layout/challenges/$challengeId/logs/$logId/"
)({
  component: PreviewLog,
  loader: async ({ params: { challengeId, logId } }) => {
    if (!logId || !challengeId) {
      throw notFound();
    }

    const result = await queryClient.ensureQueryData<GetLogResponse>({
      queryKey: ["log", logId + challengeId],
      queryFn: async () => {
        return await apiInstance({
          url: `logs/${logId}/challenges/${challengeId}`,
          method: "GET",
        });
      },
    });

    if (!result.data.success) {
      throw notFound();
    }

    return result.data.data.log;
  },
});

function PreviewLog() {
  const log = useLoaderData({
    from: "/dashboard/_layout/challenges/$challengeId/logs/$logId/",
  });

  return (
    <main>
      <div className="prose capitalize">
        <h2 className="text-white">Day {log.day}</h2>
        <h1 className="text-white">{log.challenge.name}</h1>
      </div>

      <MdxPreview markdown={log.content} />
    </main>
  );
}
