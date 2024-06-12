import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useLogout } from "@/routes/dashboard/-hooks/useLogout";
import { LogOut } from "lucide-react";
export const ConfirmLogoutModal = () => {
  const { logout } = useLogout();
  const onSubmitHandler = () => {
    logout();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <footer className="flex gap-2 justify-between cursor-pointer mt-auto p-4 capitalize transition hover:bg-purple-400 hover:text-purple-900 ">
          Logout
          <LogOut />
        </footer>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle> Are you sure you want to logout?</DialogTitle>
        </DialogHeader>

        <div>Are you sure you want to logout?</div>

        <DialogFooter className="sm:justify-start">
          <form onSubmit={onSubmitHandler}>
            <Button type="submit">Confirm</Button>
          </form>

          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Cancel
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
