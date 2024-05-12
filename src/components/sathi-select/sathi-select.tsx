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

type SathiSelectOption = {
  value: string;
  label: string;
};

export interface SathiSelectField extends FormField {
  type: "select";
  options: SathiSelectOption[];
  placeholder?: string;
  customClass?: {
    input?: string;
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
  customClass = {
    input: "",
  },
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
      <SelectTrigger className={customClass.input}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>

      <SelectContent>
        <SelectGroup>
          <SelectLabel>{label}</SelectLabel>

          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
