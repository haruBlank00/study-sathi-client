import { Log } from "../../$logId/-interface";
import { OneLine } from "./oneline";

type TimelineProps = {
  logs: Log[];
};
export const Timeline = ({ logs }: TimelineProps) => {
  return (
    <ol className="relative border-s border-primary">
      {logs.map((log) => {
        return <OneLine key={log._id} log={log} />;
      })}
    </ol>
  );
};
