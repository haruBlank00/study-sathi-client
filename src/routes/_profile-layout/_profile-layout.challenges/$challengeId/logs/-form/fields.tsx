import { Field } from "@/components/form/types";
import { zodResolver } from "@hookform/resolvers/zod";
import zod from "zod";

const logSchema = zod.object({
  content: zod.string().min(1, { message: "Please enter a log." }),
});

export const logFields: Field[] = [
  {
    default: "",
    name: "content",
    label: "Log",
    type: "markdown",
    className: "h-56",
  },
];

export const defaultValues = { content: "" };
export const resolver = zodResolver(logSchema);
export type TLog = zod.infer<typeof logSchema>;
