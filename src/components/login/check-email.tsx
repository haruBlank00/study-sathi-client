import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import { Edit2, MailCheck } from "lucide-react";

export const CheckEmailForLogin = ({ email }: { email: string }) => {
  return (
    <div className="h-screen w-screen grid place-items-center">
      <Card className="w-xl p-12 shadow-md">
        <CardHeader className="flex flex-col items-center">
          <MailCheck className="text-primary" size={64} />
          <h2 className="text-xl font-semibold">Check your email</h2>
        </CardHeader>

        <CardContent className="prose">
          <h3 className="text-lg">Login in using the magic link sent to</h3>
          <p className="text-center flex justify-end items-center bg-slate-200 rounded-sm p-2">
            <span className="font-bold">{email}</span>
            <Link
              to="/auth/signin"
              className="text-green-600 hover:scale-105 transition-transform w-fit h-fit "
            >
              <Edit2 className="h-4 w=4" />
            </Link>
          </p>
          <p className="text-center font-semibold">Check your inbox</p>
        </CardContent>
      </Card>
    </div>
  );
};
