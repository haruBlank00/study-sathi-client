import { InputField } from "@/components/form/form-builder";
import { zodResolver } from "@hookform/resolvers/zod";

import zod from "zod";
export const challengeFields: InputField[] = [
  {
    name: "title",
    label: "",
    placeholder: "New challenge name here...",
    type: "text",
    customClass: {
      input: "h-full text-2xl px-0 font-semibold border-none shadow-none",
    },
  },
  {
    name: "tags",
    placeholder: "Add upto 4 tags...",
    customClass: {
      input: "h-full text-2xl px-0 font-semibold border-none shadow-none",
    },
    type: "text",
  },
  {
    name: "description",
    placeholder: "30 days of discipline :p",
    type: "markdown",
    customClass: {
      input: "h-96 shadow-md rounded-md",
    },
  },
];

const chellengeSchema = zod.object({
  title: zod.string().min(1, {
    message: "Please enter a name for your challenge.",
  }),
  tags: zod.string().min(1, {
    message: "Please enter at least one tag for your challenge.",
  }),
  description: zod.string().min(1, {
    message: "Please enter a description for your challenge.",
  }),
});

export const challengeResolver = zodResolver(chellengeSchema);
export type TChallengeSchema = zod.infer<typeof chellengeSchema>;
