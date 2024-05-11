import { Field } from "@/components/form/types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import zod from "zod";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function cryptoId() {
  return crypto.randomUUID();
}

export function getFieldSchema(schemas: Field[]) {
  const fieldSchema = schemas.reduce((acc, curr) => {
    const { name, schema } = curr;
    return {
      ...acc,
      [name]: schema,
    };
  }, {});
  return zod.object(fieldSchema);
}

export function getFieldDefault(fields: Field[]): { ok: "fuck" } {
  const fieldDefault = fields.reduce((acc, curr) => {
    return {
      ...acc,
      [curr.name]: curr.default,
    };
  }, {});
  return fieldDefault;
}

export function ID() {
  return crypto.randomUUID();
}
