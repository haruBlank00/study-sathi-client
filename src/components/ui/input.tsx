import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> { }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-9 w-full border rounded-sm border-primary bg-transparent px-3 py-1 text-sm shadow-md transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none  focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

export interface IconInputProps extends InputProps {
  Icon: () => JSX.Element;
}

const IconInput = React.forwardRef<HTMLInputElement, IconInputProps>(
  (props, ref) => {
    const { Icon, className } = props;
    return (
      <div className="border border-primary flex items-center px-2 shadow-sm rounded-md">
        {<Icon />}
        <Input {...props} ref={ref} className={cn('border-none', className)} />
      </div>
    );
  }
);

Input.displayName = "Input";
IconInput.displayName = "IconInput";
export { Input, IconInput };
