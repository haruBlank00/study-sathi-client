import { InputField } from "@/components/form/form-builder";
import { SathiSelectField } from "@/components/sathi-select/sathi-select";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import zod from "zod";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function cryptoId() {
  return crypto.randomUUID();
}

export function getFieldSchema(schema: (InputField | SathiSelectField)[]) {
  const fieldSchema = schema.reduce((acc, curr) => {
    const { name, schema } = curr;
    return {
      ...acc,
      [name]: schema,
    };
  }, {});
  return zod.object(fieldSchema);
}
