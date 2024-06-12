import { SathiForm } from "@/components/form/sathi-form";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { TProfile, settingsFields, profileFormResolver } from "./-form";
import { usePutProfile } from "./-hooks/usePutProfile";

export const Route = createFileRoute("/dashboard/_layout/settings/")({
  component: SettingsPage,
});

function SettingsPage() {
  const { putProfile } = usePutProfile();
  const form = useForm<TProfile>({
    resolver: profileFormResolver,
    defaultValues: {
      userName: "",
      avatar: null,
    },
  });
  const onSubmitHandler = ({ avatar, userName }: TProfile) => {
    console.log({ avatar, userName });
    putProfile({ userName, avatar });
  };
  return (
    <div>
      <h1>Settings Page</h1>
      <Separator />

      <main className="max-w-96">
        <SathiForm
          form={form}
          fields={settingsFields}
          onSubmit={onSubmitHandler}
          className="flex flex-col gap-4"
        >
          <Button type="submit">Apply Settings</Button>
        </SathiForm>
      </main>
    </div>
  );
}

/**
 *
 * what will settings page have?
 * user name and avatar?
 * let's add bunch for avatar to choose
 */
