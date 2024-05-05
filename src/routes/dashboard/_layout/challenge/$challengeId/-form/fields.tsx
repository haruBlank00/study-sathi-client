import { InputField } from "@/components/form/form-builder";
import { zodResolver } from "@hookform/resolvers/zod";

import zod from "zod";
export const challengeFields: InputField[] = [
  {
    name: "title",
    label: "Name your challenge",
    placeholder: "30 days of discipline :p",
    type: "text",
  },
  {
    name: "tags",
    label: "Tags",
    placeholder: "#coding, #typescript, #lifeLongLearning",
    type: "text",
  },
  {
    name: "description",
    label: "Description",
    placeholder: "30 days of discipline :p",
    type: "markdown",
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
