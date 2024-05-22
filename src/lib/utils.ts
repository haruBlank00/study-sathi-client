import { Field } from "@/components/form/types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function cryptoId() {
  return crypto.randomUUID();
}

export function getFieldDefault(fields: Field[]) {
  const fieldDefault = fields.reduce((acc, curr) => {
    return {
      ...acc,

      [curr.name]: "",
    };
  }, {});
  return fieldDefault;
}

export function ID() {
  return crypto.randomUUID();
}
