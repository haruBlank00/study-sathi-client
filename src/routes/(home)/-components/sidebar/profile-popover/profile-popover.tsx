import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { Link } from "@tanstack/react-router";

type ProfilePopoverPrps = {
  avatarSrc: string;
  name: string;
  userName: string;
};

const items = [
  {
    label: "dashboard",
    to: "/dashboard",
  },
  {
    label: "settings",
    to: "settings",
  },
];

export const ProfilePopover = (props: ProfilePopoverPrps) => {
  const { avatarSrc, name, userName } = props;

  return (
    <Popover>
      <PopoverTrigger>
        <Avatar className="cursor-pointer">
          <AvatarImage src={avatarSrc} />
          <AvatarFallback>Bk</AvatarFallback>
        </Avatar>
      </PopoverTrigger>

      <PopoverContent align="end" side="bottom" className="">
        <div className="flex flex-col p-x-2 gap-1">
          <span>{name}</span>
          <span>{userName}</span>
        </div>

        <Separator className="my-2" />
        <ul className="flex flex-col gap-2">
          {items.map((item) => (
            <li className="hover:bg-primary p-2 rounded-md cursor-pointer capitalize">
              <Link to={item.to}>{item.label}</Link>
            </li>
          ))}

          <li className="hover:bg-primary p-2 rounded-md cursor-pointer">
            Signout
          </li>
        </ul>
      </PopoverContent>
    </Popover>
  );
};
