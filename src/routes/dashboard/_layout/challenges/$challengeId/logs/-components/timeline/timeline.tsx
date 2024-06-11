import { Log } from "../../$logId/-interface";
import { OneLine } from "./oneline";

type TimelineProps = {
  logs: Log[];
};
export const Timeline = ({ logs }: TimelineProps) => {
  return (
    <ol className="relative border-s border-gray-200 dark:border-gray-700">
      {logs.map((log) => {
        return <OneLine key={log._id} log={log} />;
      })}
    </ol>
  );
};
