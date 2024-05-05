import { SathiForm } from "@/components/form/sathi-form";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { challengeFields, challengeResolver } from "./-form/fields";

export const Route = createFileRoute(
  "/dashboard/_layout/challenge/$challengeId/"
)({
  component: ChallengePage,
});

function ChallengePage() {
  const form = useForm({
    resolver: challengeResolver,
    defaultValues: {
      title: "",
      tags: "",
      description: "",
    },
  });

  const onSubmitHandler = () => {};
  return (
    <div>
      <h2>Take a new challenge :)</h2>

      <Card className="p-6">
        <SathiForm
          fields={challengeFields}
          form={form}
          onSubmit={onSubmitHandler}
          className="w-[30rem] flex flex-col gap-4"
        >
          <Button type="submit">Create a new challenge</Button>
        </SathiForm>
      </Card>
    </div>
  );
}
