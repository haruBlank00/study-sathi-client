import { Form } from "@/components/ui/form";
import React from "react";
import { FieldValues, UseFormReturn } from "react-hook-form";
import { FormBuilder } from "./form-builder";
import { Field } from "./types";

type SathiFormProps<T extends FieldValues> = {
  fields: Field[];
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
