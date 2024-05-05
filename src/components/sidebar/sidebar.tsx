import { SathiAvatar } from "../sathi-avatar/sathi-avatar";
import { Burger } from "./components/burger";

export const Sidebar = () => {
  return (
    <div className="min-h-screen bg-red-200 w-40 p-4">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <SathiAvatar />
          <Burger />
        </div>
      </div>
    </div>
  );
};
