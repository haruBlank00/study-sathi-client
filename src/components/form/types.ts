import { InputProps } from "@/components/ui/input";
import { SathiSelectField } from "@/components/sathi-select/sathi-select";

export interface FormField {
  name: string;
  label?: string;
  schema: Zod.Schema;
  default: unknown;
}

export interface InputField extends FormField, InputProps {
  name: string;
  type: "text" | "number" | "markdown" | "email";
  placeholder?: string;
  customClass?: {
    label?: string;
    input?: string;
  };
}

export type Field = InputField | SathiSelectField;
