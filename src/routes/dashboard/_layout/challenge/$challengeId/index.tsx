import { SathiForm } from "@/components/form/sathi-form";
import { queryClient } from "@/components/providers/query-client/queryClient";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import apiInstance from "@/lib/axios";
import "@mdxeditor/editor/style.css";
import {
  createFileRoute,
  notFound,
  useLoaderData,
} from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import {
  TChallenge,
  challengeFields,
  challengeResolver,
  initialValues,
} from "./-form/fields";
import { useCreateChallenge } from "./-hooks/useCreateChallenge";
import { GetChallengeResponse } from "./-interface";

export const Route = createFileRoute(
  "/dashboard/_layout/challenge/$challengeId/"
)({
  component: ChallengePage,
  loader: async ({
    params: { challengeId },
  }): Promise<TChallenge | undefined> => {
    const isNew = challengeId === "new";
    if (isNew) {
      return;
    }

    const challengeResponse =
      await queryClient.ensureQueryData<GetChallengeResponse>({
        queryKey: ["challenge", challengeId],
        queryFn: async () =>
          apiInstance({
            url: "/challenges/" + challengeId,
            method: "GET",
          }),
      });

    const result = challengeResponse.data;
    if (!result.success) {
      throw notFound();
    }

    const challenge = result.challenge;
    const { days, name, description, privacy } = challenge;
    const tags = challenge.tags.map((tag) => tag.tag);
    const challengeForForm = {
      days,
      name,
      description,
      privacy,
      tags,
    };

    return challengeForForm;
  },
});

function ChallengePage() {
  const challenge = useLoaderData({
    from: "/dashboard/_layout/challenge/$challengeId/",
  });
  const form = useForm<TChallenge>({
    resolver: challengeResolver,
    defaultValues: Boolean(challenge) ? challenge : initialValues,
  });
  const { createChallenge, isChallengeCreating } = useCreateChallenge();
  // const {} =

  const TITLE = challenge
    ? `Iterate on your amazing ${challenge.name}`
    : "Create a new challenge";
  const BTN_LABEL = challenge ? `Iterate Challenge` : "Let's Gooooo!!";
  const onSubmitHandler = (data: TChallenge) => {
    createChallenge(data, {
      onError: (e) => {
        // const data = e.response?.data?.error;
        console.log({ data, e });
      },
    });
  };

  return (
    <div>
      <h2>{TITLE} :)</h2>
      <Card className="w-full px-6 py-8">
        <SathiForm
          fields={challengeFields}
          form={form}
          onSubmit={onSubmitHandler}
          className="flex flex-col"
        >
          <div className="flex gap-4 mt-8">
            <Button type="submit" disabled={isChallengeCreating}>
              {BTN_LABEL}
            </Button>
            <Button variant={"outline"} disabled={isChallengeCreating}>
              Ofc Thinkin takes Time (save for later)
            </Button>
          </div>
        </SathiForm>
      </Card>
    </div>
  );
}
