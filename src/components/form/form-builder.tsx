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
// Assuming Path<T> is a generic type

export interface InputField extends InputProps {
  name: string;
  label: string;
  placeholder: string;
  render?: ({ field }: { field: object }) => JSX.Element;
}
type FormBuilderProps<T extends FieldValues> = {
  fields: InputField[];
  form: UseFormReturn<T>;
};

export const FormBuilder = <T extends FieldValues>({
  fields,
  form,
}: FormBuilderProps<T>) => {
  return fields.map((field) => {
    const { label, name, placeholder, type } = field;

    if (type === "markdown") {
      return (
        <FormField
          key={name}
          control={form.control}
          name={name as Path<T>}
          render={({ field }) => {
            console.log(field.value);
            return (
              <FormItem>
                <FormLabel>{label}</FormLabel>
                <FormControl>
                  <SathiEditor {...field} placeholder="Type here..." />
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
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <Input {...field} placeholder={placeholder} type={type} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    );
  });
};
