import apiInstance from "@/lib/axios";
import { Navigate, createFileRoute, redirect } from "@tanstack/react-router";
import { z } from "zod";

const magicParamsSchema = z.object({
  email: z.string().email().catch(""),
  token: z.string().catch(""),
});

export const Route = createFileRoute("/auth/magiclink/")({
  component: MagicLinkPage,
  validateSearch: magicParamsSchema,
  loaderDeps: ({ search: { email, token } }) => ({ email, token }),
  loader: ({ deps: { email, token } }) => {
    try {
      apiInstance({
        method: "POST",
        url: "magic/verify",
        data: {
          email,
          token,
        },
      });
    } catch (error) {
      console.log({ error });
      console.error("Fuck!!!");
      redirect({
        to: "/auth/signin",
        throw: true,
      });
    }
  },
  errorComponent: () => <Navigate to="/auth/signin" />,
});

function MagicLinkPage() {
  return <Navigate to="/dashboard" />;
  // const { email, token } = Route.useSearch();
  // const { isPending, verifyMagicLink } = useVerifyMagicLink();
  // console.log("second");
  // useEffect(() => {
  //   verifyMagicLink({
  //     email,
  //     token,
  //   });
  // }, [email, token, verifyMagicLink]);

  // if (isPending) {
  //   return <MagicLoader />;
  // }
  // return <h1>ok wait</h1>;
}
