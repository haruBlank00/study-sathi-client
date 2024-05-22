import { SathiSelectField } from "@/components/sathi-select/sathi-select";
import { InputProps } from "@/components/ui/input";
import { ControllerRenderProps } from "react-hook-form";
import { TagsField } from "./tags-field";

export interface FormField {
  name: string;
  label?: string;
  default?: unknown;
  placeholder?: string;
}

export interface CustomField {
  type: "custom";
  name: string;
  showError?: boolean;
  Component: ({
    field,
    name,
  }: {
    field: ControllerRenderProps;
    name: string;
  }) => React.ReactNode;
}

export interface InputField extends FormField, InputProps {
  name: string;
  type: "text" | "number" | "markdown" | "email" | "file";
  placeholder?: string;
  customClass?: {
    label?: string;
    input?: string;
  };
}

export type Field = InputField | SathiSelectField | TagsField | CustomField;
