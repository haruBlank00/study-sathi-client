import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FieldValues, Path, UseFormReturn } from "react-hook-form";
import SathiEditor from "../sathi-editor/sathi-editor";
import { SathiSelect } from "../sathi-select/sathi-select";
import { Field } from "./types";

type FormBuilderProps<T extends FieldValues> = {
  fields: Field[];
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
                    name={name as Path<T>}
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
