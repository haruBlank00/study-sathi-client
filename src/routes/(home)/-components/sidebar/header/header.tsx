import { IconInput } from "@/components/ui/input";
import { Bell, Search } from "lucide-react";
import { ProfilePopover } from "../profile-popover/profile-popover";
export const Header = () => {
  return (
    <div className="py-4 mb-4 shadow-sm ">
      <div className="container flex justify-between">
        <div className="flex gap-4 items-stretch">
          <div className="bg-foreground text-primary self-stretch p-2 text-lg rounded-xl">
            SS
          </div>
          <IconInput
            Icon={() => <Search />}
            name="search"
            placeholder="Search..."
            className="w-96"
          />
        </div>

        <div className="flex items-center gap-4">
          <Bell className="cursor-pointer" />
          <ProfilePopover name="John Doe" userName="@john" avatarSrc="" />
        </div>
      </div>
    </div>
  );
};
