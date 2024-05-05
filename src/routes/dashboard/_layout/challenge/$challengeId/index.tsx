import { SathiForm } from "@/components/form/sathi-form";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import "@mdxeditor/editor/style.css";
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
      <Card className="w-full px-6 py-8">
        <SathiForm
          fields={challengeFields}
          form={form}
          onSubmit={onSubmitHandler}
          className="flex flex-col"
        >
          <div className="flex gap-4 mt-8">
            <Button type="submit">Create a new challenge</Button>
            <Button variant={"outline"}>Save Draft</Button>
          </div>
        </SathiForm>
      </Card>
    </div>
  );
}
