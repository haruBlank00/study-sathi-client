import { SathiForm } from "@/components/form/sathi-form";
import { queryClient } from "@/components/providers/query-client/queryClient";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import apiInstance from "@/lib/axios";
import "@mdxeditor/editor/style.css";
import { createFileRoute, useLoaderData } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import {
  TChallengeSchema,
  challengeFields,
  challengeResolver,
  initialValues,
} from "./-form/fields";
import { useCreateChallenge } from "./-hooks/useCreateChallenge";
import { CreateChallengeResponse } from "./-interface";

export const Route = createFileRoute(
  "/dashboard/_layout/challenge/$challengeId/"
)({
  component: ChallengePage,
  loader: async ({ params: { challengeId } }) => {
    const isNew = challengeId === "new";
    if (isNew) {
      return;
    }

    const challengeResponse =
      await queryClient.ensureQueryData<CreateChallengeResponse>({
        queryKey: ["challenge", challengeId],
        queryFn: async () =>
          apiInstance({
            url: "/challenges/" + challengeId,
          }),
      });

    return challengeResponse.data.data.data.data.challenge;
  },
});

function ChallengePage() {
  const challenge = useLoaderData({
    from: "/dashboard/_layout/challenge/$challengeId/",
  });
  const form = useForm({
    resolver: challengeResolver,
    defaultValues: initialValues,
  });
  const { createChallenge, isChallengeCreating } = useCreateChallenge();

  console.log({ challenge });

  const onSubmitHandler = (data: TChallengeSchema) => {
    createChallenge(data, {
      onError: (e) => {
        const data = e.response?.data?.error;
        console.log({ data, e });
      },
    });
  };

  return (
    <div>
      <h2>Take a new challenge :)</h2>
      <Card className="w-full px-6 py-8">
        <SathiForm
          fields={challengeFields}
          form={form}
          onSubmit={onSubmitHandler}
          className="flex flex-col"
        >
          <div className="flex gap-4 mt-8">
            <Button type="submit" disabled={isChallengeCreating}>
              Create a new challenge
            </Button>
            <Button variant={"outline"} disabled={isChallengeCreating}>
              Save Draft
            </Button>
          </div>
        </SathiForm>
      </Card>
    </div>
  );
}
