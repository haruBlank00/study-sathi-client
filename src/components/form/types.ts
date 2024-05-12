import { SathiSelectField } from "@/components/sathi-select/sathi-select";
import { InputProps } from "@/components/ui/input";
import { TagsField } from "./tags-field";

export interface FormField {
  name: string;
  label?: string;
  default: unknown;
  placeholder?: string;
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

export type Field = InputField | SathiSelectField | TagsField;
