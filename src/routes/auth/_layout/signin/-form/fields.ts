import { InputField } from "@/components/form/form-builder";
import { emailSchema } from "@/schema";

export const loginFields: InputField[] = [
  {
    name: "email",
    label: "Email Address",
    placeholder: "johbdoe@gmail.com",
    type: "email",
    schema: emailSchema,
  },
];
