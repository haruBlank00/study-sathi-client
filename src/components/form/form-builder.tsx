import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input, InputProps } from "@/components/ui/input";
import { FieldValues, Path, UseFormReturn } from "react-hook-form";

export interface InputField extends InputProps {
  name: string;
  label: string;
  placeholder: string;
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
