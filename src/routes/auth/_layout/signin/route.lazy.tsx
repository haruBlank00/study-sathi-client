import { SathiForm } from "@/components/form/sathi-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github } from "@/components/ui/icons/github";
import { Google } from "@/components/ui/icons/google";
import { Separator } from "@/components/ui/separator";
import { createLazyFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { loginFields } from "./-form/fields";
import { TLoginSchema, loginResolver } from "./-form/login.schema";
import { useGetMagicTokens } from "./-hooks/useGetMagicLinkTokens";
import { SathiButton } from "@/components/sathi-button/sathi-button";

export const Route = createLazyFileRoute("/auth/_layout/signin")({
  component: LoginPage,
  notFoundComponent: () => <h2>opps not found vyao ne taw</h2>,
});

function LoginPage() {
  const form = useForm({
    resolver: loginResolver,
    defaultValues: {
      email: "",
    },
  });

  const { getMagicTokens, isPending } = useGetMagicTokens();
  const onLoginHandler = (data: TLoginSchema) => {
    getMagicTokens({
      email: data.email,
    });
  };

  return (
    <div className="h-screen grid place-items-center p-2">
      <Card className="md:w-1/2 lg:w-1/3">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl">Study Sathi</CardTitle>
          <p className="text-lg">Welcome back! Sign in to continue</p>
        </CardHeader>

        <CardContent className="flex flex-col">
          <div className="flex flex-col lg:flex-row justify-center gap-4">
            <Button className="flex-1 h-auto py-2 flex gap-2">
              <Github className="" />
              With Github
            </Button>
            <Button className="flex-1 h-auto py-2 flex gap-2">
              <Google className="" />
              With Google
            </Button>
          </div>

          <div className="flex gap-2 items-center my-6">
            <Separator className="flex-1" />
            or
            <Separator className="flex-1" />
          </div>

          <SathiForm form={form} fields={loginFields} onSubmit={onLoginHandler}>
            <SathiButton
              className="w-full py-2 mt-4"
              type="submit"
              isLoading={isPending}
            >
              Login with magic link
            </SathiButton>
          </SathiForm>
        </CardContent>
      </Card>
    </div>
  );
}
