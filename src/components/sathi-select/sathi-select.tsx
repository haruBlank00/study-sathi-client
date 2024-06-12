import {
  SelectTrigger,
  Select,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from "@/components/ui/select";
import { FormField } from "../form/types";
import { Separator } from "@radix-ui/react-select";

type SathiSelectOption = {
  value: string;
  label: string;
};

export interface SathiSelectField extends FormField {
  type: "select";
  options: SathiSelectOption[];
  placeholder?: string;
  customClass?: {
    trigger?: string;
  };
}

interface SathiSelectProps
  extends Omit<Omit<SathiSelectField, "schema">, "default"> {
  onChange: (value: string) => void;
  value: string;
}
export const SathiSelect = ({
  placeholder,
  label,
  options,
  onChange,
  value,
}: SathiSelectProps) => {
  return (
    <Select
      onValueChange={(value) => {
        onChange(value);
      }}
      value={value}
    >
      <SelectTrigger
        className={
          "h-full px-0  shadow-none border-0 border-b border-primary rounded-none"
        }
      >
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>

      <SelectContent className="w-96">
        <SelectGroup>
          <SelectLabel className="text-white">{label}</SelectLabel>
          <Separator className="bg-primary" />
          {options.map((option) => (
            <SelectItem
              key={option.value}
              value={option.value}
              className="text-primary cursor-pointer"
            >
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
