import { Form } from "@/components/ui/form";
import { FieldValues, UseFormReturn } from "react-hook-form";
import { FormBuilder, InputField } from "./form-builder";
import React from "react";

type SathiFormProps<T extends FieldValues> = {
  fields: InputField[];
  form: UseFormReturn<T>;
  onSubmit: (data: T) => void;
  children: React.ReactNode;
  className?: string;
};
export const SathiForm = <T extends FieldValues>({
  form,
  onSubmit,
  fields,
  children,
  className,
}: SathiFormProps<T>) => {
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={className}>
        <FormBuilder fields={fields} form={form} />
        {children}
      </form>
    </Form>
  );
};
