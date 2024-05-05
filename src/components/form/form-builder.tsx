import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input, InputProps } from "@/components/ui/input";
import {
  // ControllerRenderProps,
  FieldValues,
  Path,
  UseFormReturn,
} from "react-hook-form";
import SathiEditor from "../sathi-editor/sathi-editor";
import { SathiSelectField, SathiSelect } from "../sathi-select/sathi-select";
// Assuming Path<T> is a generic type

export interface FormField {
  name: string;
  label?: string;
  schema: Zod.Schema;
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
type FormBuilderProps<T extends FieldValues> = {
  fields: (InputField | SathiSelectField)[];
  form: UseFormReturn<T>;
};

export const FormBuilder = <T extends FieldValues>({
  fields,
  form,
}: FormBuilderProps<T>) => {
  return fields.map((field) => {
    const { label, name, placeholder, type } = field;

    if (field.type === "select") {
      const { customClass = { input: "" } } = field;
      return (
        <FormField
          key={name}
          control={form.control}
          name={name as Path<T>}
          render={({ field: rhfField }) => {
            return (
              <FormItem>
                <FormControl>
                  <SathiSelect
                    name={name}
                    options={field.options}
                    type="select"
                    placeholder={placeholder}
                    customClass={customClass}
                    onChange={rhfField.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
      );
    }

    const { customClass = { label: "", input: "" } } = field;

    if (type === "markdown") {
      return (
        <FormField
          key={name}
          control={form.control}
          name={name as Path<T>}
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel className={customClass.label}>{label}</FormLabel>
                <FormControl>
                  <SathiEditor
                    {...field}
                    placeholder="Type here..."
                    className={customClass.input}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
      );
    }

    return (
      <FormField
        key={name}
        control={form.control}
        name={name as Path<T>}
        render={({ field }) => (
          <FormItem>
            <FormLabel className={customClass.label}>{label}</FormLabel>
            <FormControl>
              <Input
                {...field}
                placeholder={placeholder}
                type={type}
                className={customClass.input}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    );
  });
};
