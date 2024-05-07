import { Modal } from "@/components/modal/modal";
import { Button } from "@/components/ui/button";
import { DialogClose, DialogFooter } from "@/components/ui/dialog";
import { useLogout } from "@/routes/dashboard/-hooks/useLogout";
import { LogOut } from "lucide-react";

export const ConfirmLogoutModal = () => {
  const { logout } = useLogout();
  const onSubmitHandler = () => {
    logout();
  };
  const Trigger = () => {
    return (
      <footer className="flex gap-2 justify-between cursor-pointer mt-auto p-4 capitalize hover:bg-yellow-200 transition">
        Logout
        <LogOut />
      </footer>
    );
  };
  return (
    <Modal
      description="Are you sure you want to logout?"
      title="Logout"
      trigger={<Trigger />}
    >
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
    </Modal>
  );
};
