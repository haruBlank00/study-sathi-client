import { SathiForm } from "@/components/form/sathi-form";
import { queryClient } from "@/components/providers/query-client/queryClient";
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
import { usePutChallenge } from "./-hooks/usePutChallenge";
import { SathiButton } from "@/components/sathi-button/sathi-button";

export const Route = createFileRoute(
  "/dashboard/_layout/challenges/$challengeId/"
)({
  component: ChallengePage,
  loader: async ({
    params: { challengeId },
  }): Promise<TChallenge | undefined> => {
    const isNew = challengeId === "new";
    if (isNew) {
      return undefined;
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
    from: "/dashboard/_layout/challenges/$challengeId/",
  });
  const form = useForm<TChallenge>({
    resolver: challengeResolver,
    defaultValues: challenge ? challenge : initialValues,
  });
  const { createChallenge, isChallengeCreating } = useCreateChallenge();
  const { isChallengeUpdating, putChallenge } = usePutChallenge();

  const TITLE = challenge
    ? `Iterate on your amazing ${challenge.name}`
    : "Create a new challenge";
  const BTN_LABEL = challenge ? `Iterate Challenge` : "Let's Gooooo!!";
  const onSubmitHandler = (data: TChallenge) => {
    if (challenge) {
      putChallenge(data);
    } else {
      createChallenge(data);
    }
  };

  const isBtnDisabled = isChallengeCreating || isChallengeUpdating;
  const isBtnLoading = isChallengeCreating || isChallengeUpdating;
  return (
    <div className="max-w-2xl">
      <Card className="w-full px-6 py-8">
        <h2 className="font-semibold text-2xl">{TITLE} :)</h2>
        <SathiForm
          fields={challengeFields}
          form={form}
          onSubmit={onSubmitHandler}
          className="flex flex-col gap-4"
        >
          <div className="flex gap-4 mt-8">
            <SathiButton
              type="submit"
              disabled={isBtnDisabled}
              isLoading={isBtnLoading}
            >
              {BTN_LABEL}
            </SathiButton>
            <SathiButton
              variant={"outline"}
              disabled={isBtnDisabled}
              isLoading={isBtnLoading}
            >
              I am thinking. (save for later)
            </SathiButton>
          </div>
        </SathiForm>
      </Card>
    </div>
  );
}
