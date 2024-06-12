import { Loader2 } from "lucide-react";
import { Button, ButtonProps } from "../ui/button";

interface SathiButtonPops extends ButtonProps {
  isLoading?: boolean;
}
export const SathiButton = ({
  isLoading,
  children,
  ...rest
}: SathiButtonPops) => {
  return (
    <Button {...rest} disabled={isLoading}>
      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {children}
    </Button>
  );
};
