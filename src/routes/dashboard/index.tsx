import apiInstance from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard/")({
  component: DashboardPage,
});

function DashboardPage() {
  const { data, isLoading } = useQuery({
    queryKey: ["dashboard"],
    queryFn: async () => {
      const response = await apiInstance({
        method: "GET",
        url: "/challenges",
      });
      return response.data;
    },
  });

  console.log({ data, isLoading });
  return <div>hello /dashboard/</div>;
}
