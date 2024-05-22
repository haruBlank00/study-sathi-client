import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  ControllerRenderProps,
  FieldValues,
  Path,
  UseFormReturn,
} from "react-hook-form";
import SathiEditor from "../sathi-editor/sathi-editor";
import { SathiSelect } from "../sathi-select/sathi-select";
import { TagsField } from "./tags-field";
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
    if (field.type === "custom") {
      const { Component, name, showError } = field;

      return (
        <FormField
          key={name}
          control={form.control}
          name={name as Path<T>}
          render={({ field }) => {
            return (
              <FormItem>
                <FormControl>
                  <Component
                    field={field as unknown as ControllerRenderProps}
                    name={name}
                  />
                </FormControl>
                {showError && <FormMessage />}
              </FormItem>
            );
          }}
        />
      );
    }
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
                    value={rhfField.value}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
      );
    }

    if (field.type === "tags") {
      return (
        <FormField
          key={name}
          control={form.control}
          name={name as Path<T>}
          render={({ field: rhfField }) => {
            return (
              <FormItem>
                <FormControl>
                  <TagsField
                    onChange={rhfField.onChange}
                    value={rhfField.value}
                    name={rhfField.name}
                    placeholder={placeholder}
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
            const props = {
              ...field,
              markdown: field.value,
            };
            return (
              <FormItem>
                <FormLabel className={customClass.label}>{label}</FormLabel>
                <FormControl>
                  <SathiEditor
                    {...props}
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

    if (type === "number") {
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
                  {...{
                    ...field,
                    onChange: (e) => field.onChange(Number(e.target.value)),
                  }}
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
