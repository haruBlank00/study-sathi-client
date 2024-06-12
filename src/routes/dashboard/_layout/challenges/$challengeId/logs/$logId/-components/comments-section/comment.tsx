import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { HandHeart, MessageCircleReply } from "lucide-react";

export const Comment = () => {
  return (
    <div className="flex gap-4">
      <Avatar className="outline outline-primary outline-offset-2">
        <AvatarFallback>Blank</AvatarFallback>
      </Avatar>

      <div className="flex-1">
        <div className="flex flex-col p-2 border border-secondary rounded-md">
          <span className="text-primary">John Doe</span>
          <span>Posted on dae</span>
          <p className="text-primary">Lorem ipsum dolor sit amet.</p>
        </div>

        <div className="flex my-2 gap-3 dark:text-slate-500">
          <span className="cursor-pointer hover:text-red-300">
            <HandHeart className="" />
          </span>
          <span className="flex gap-1 cursor-pointer hover:text-primary">
            <MessageCircleReply /> Reply
          </span>
        </div>
      </div>
    </div>
  );
};
