import { MdxPreview } from "@/components/sathi-editor/mdx-preview";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Challenge } from "../../-interface";
import { Link, useNavigate } from "@tanstack/react-router";
import { Eye, Pencil } from "lucide-react";
import { DeleteChallengeAlert } from "../delete-modal/delete-modal";
import { Separator } from "@/components/ui/separator";

type ChallengeCardProps = {
  challenge: Challenge;
};

export const ChallengeCard = ({ challenge }: ChallengeCardProps) => {
  const navigate = useNavigate();
  const challengeDays = `${challenge.days} day${challenge.days > 1 ? "s" : ""}`;

  const redirectToLogPage = () => {
    navigate({
      to: "/challenges/$challengeId/logs",
      params: {
        challengeId: challenge._id,
      },
    });
  };

  return (
    <Card
      className="cursor-pointer group h-full border-primary shadow-md hover:-translate-y-1 transition-transform"
      onClick={redirectToLogPage}
    >
      <CardHeader className="flex flex-row justify-between">
        <div>
          <CardTitle className="capitalize text-primary mb-2">
            {challenge.name}
          </CardTitle>
          <CardDescription>{challengeDays}</CardDescription>
        </div>

        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity items-center">
          <Link
            to="/challenges/$challengeId"
            params={{
              challengeId: challenge._id,
            }}
          >
            <Pencil className="text-green-600" />
          </Link>
          <Eye className="text-blue-600" />
          <DeleteChallengeAlert id={challenge._id} />
        </div>
      </CardHeader>

      <Separator className="bg-primary w-[90%] mx-auto" />

      <CardContent className="text-white p-0">
        <MdxPreview markdown={challenge.description} />
      </CardContent>
    </Card>
  );
};
