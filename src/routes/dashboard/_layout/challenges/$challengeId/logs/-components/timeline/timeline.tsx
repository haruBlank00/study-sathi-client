import { Log } from "../../$logId/-interface";
import { OneLine } from "./oneline";

type TimelineProps = {
  logs: Log[];
  title?: string;
  description?: string;
};
export const Timeline = ({ logs, title, description }: TimelineProps) => {
  return (
    <div>
      <h2 className="capitalize text-white">{title}</h2>
      <p className="text-white mb-4">{description}</p>
      <ol className="relative border-s border-primary">
        {logs.map((log) => {
          return <OneLine key={log._id} log={log} />;
        })}
      </ol>

    </div>
  );

};
