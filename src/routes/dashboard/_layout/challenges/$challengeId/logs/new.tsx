import { createFileRoute, useParams } from "@tanstack/react-router";
import { useCreateLog } from "./$logId/-hooks/useCreateLog";
import { useForm } from "react-hook-form";
import { TLog, defaultValues, logFields, resolver } from "./-form/fields";
import { SathiForm } from "@/components/form/sathi-form";
import { SathiButton } from "@/components/sathi-button/sathi-button";
export const Route = createFileRoute(
  "/dashboard/_layout/challenges/$challengeId/logs/new"
)({
  component: CreatNewLogPage,
});

function CreatNewLogPage() {
  const { challengeId } = useParams({
    from: "/dashboard/_layout/challenges/$challengeId/logs/new",
  });
  const form = useForm({
    resolver,
    defaultValues,
  });
  const { createLog, isLogCreating } = useCreateLog();

  const onCreatLogHandler = async (data: TLog) => {
    console.log({ ...data, challengeId });
    createLog({
      ...data,
      challengeId,
    });
  };

  return (
    <main>
      <SathiForm fields={logFields} form={form} onSubmit={onCreatLogHandler}>
        {/* <Button type="submit">submit</Button> */}
        <SathiButton type="submit" isLoading={isLogCreating}>
          Submit
        </SathiButton>
      </SathiForm>
    </main>
  );
}
