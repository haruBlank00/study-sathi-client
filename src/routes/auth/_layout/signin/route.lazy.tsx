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
    <div className="h-screen grid place-items-center">
      <Card className="w-[32rem] ">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl">Study Sathi</CardTitle>
          <p className="text-lg">Welcome back! Sign in to continue</p>
        </CardHeader>

        <CardContent className="flex flex-col">
          <div className="flex gap-4">
            <Button className="flex-1 h-auto py-2 ">
              <Github className="mr-2" />
              With Github
            </Button>
            <Button className="flex-1 h-auto py-2 ">
              <Google className="mr-2" />
              With Google
            </Button>
          </div>

          <div className="flex gap-2 items-center my-6">
            <Separator className="flex-1" />
            or
            <Separator className="flex-1" />
          </div>

          <SathiForm form={form} fields={loginFields} onSubmit={onLoginHandler}>
            <Button
              className="w-full py-2 mt-4"
              type="submit"
              disabled={isPending}
            >
              Login with magic link
            </Button>
          </SathiForm>
        </CardContent>
      </Card>
    </div>
  );
}
