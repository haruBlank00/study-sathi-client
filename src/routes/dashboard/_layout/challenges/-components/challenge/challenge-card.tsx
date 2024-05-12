import { MdxPreview } from "@/components/sathi-editor/mdx-preview";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Challenge } from "../../-interface";
import { Link } from "@tanstack/react-router";
import { Eye, Pencil } from "lucide-react";
import { DeleteChallengeAlert } from "../delete-modal/delete-modal";

type ChallengeCardProps = {
  challenge: Challenge;
};

export const ChallengeCard = ({ challenge }: ChallengeCardProps) => {
  const challengeDays = `${challenge.days} day${challenge.days > 1 ? "s" : ""}`;
  return (
    <Card className="cursor-pointer group">
      <CardHeader className="flex flex-row justify-between">
        <div>
          <CardTitle className="capitalize">{challenge.name}</CardTitle>
          <CardDescription>{challengeDays}</CardDescription>
        </div>

        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity items-center">
          <Link
            to="/dashboard/challenges/$challengeId"
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

      <CardContent>
        <MdxPreview markdown={challenge.description} />
      </CardContent>
    </Card>
  );
};
