import { IconInput } from "@/components/ui/input";
import { Bell, Search } from "lucide-react";
import { ProfilePopover } from "../profile-popover/profile-popover";
import { useAuthStore } from "@/store/auth/authStore";
import { Else, If, Then } from "react-if";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";

export const Header = () => {
  const { isAuthenticated } = useAuthStore()
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
          <If condition={isAuthenticated}>
            <Then>
              <Bell className="cursor-pointer" />
              <ProfilePopover name="John Doe" userName="@john" avatarSrc="" />
            </Then>
            <Else>
              <Link to="/auth/signin">
                <Button variant={'ghost'}>Login</Button>
              </Link>

              <Button>Join our crew </Button>
            </Else>

          </If>
        </div>
      </div>
    </div>
  );
};
