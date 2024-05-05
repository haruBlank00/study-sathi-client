import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type SathiAvatarProps = {
  name?: string;
  avatarUrl?: string | undefined;
};

const defaultName = "John Doe";
const defaultAvatar = "https://avatar.iran.liara.run/public/12";

export const SathiAvatar = ({
  avatarUrl = defaultAvatar,
  name = defaultName,
}: SathiAvatarProps) => {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  return (
    <Avatar className="h-12 w-12">
      <AvatarImage src={avatarUrl} />
      <AvatarFallback>{initials}</AvatarFallback>
    </Avatar>
  );
};
