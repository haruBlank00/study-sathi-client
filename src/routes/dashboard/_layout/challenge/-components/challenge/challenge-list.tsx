import { Challenge } from "../../-interface";
import { ChallengeCard } from "./challenge-card";

type ChallengeListProps = {
  challenges: Challenge[];
};
export const ChallengeList = ({ challenges }: ChallengeListProps) => {
  return (
    <div
      className="grid 
    grid-cols-1 md:grid-cols-2 lg:grid-cols-4
    gap-2 md:gap-4 lg:gap-6"
    >
      {challenges.map((challenge) => (
        <ChallengeCard key={challenge._id} challenge={challenge} />
      ))}
    </div>
  );
};
