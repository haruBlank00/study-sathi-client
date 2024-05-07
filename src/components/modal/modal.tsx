import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React from "react";

type ModalProps = {
  trigger: JSX.Element;
  title: string;
  description: string;
  children: React.ReactNode;
};

export const Modal = (props: ModalProps) => {
  const { trigger, title, description, children } = props;
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div>{trigger}</div>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>

        {children}
      </DialogContent>
    </Dialog>
  );
};
