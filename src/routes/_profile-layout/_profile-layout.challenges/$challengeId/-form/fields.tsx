import { Field } from "@/components/form/types";
import { zodResolver } from "@hookform/resolvers/zod";

import zod from "zod";

const challengeSchema = zod.object({
  name: zod.string().min(1, { message: "Please enter a challenge name." }),
  // days: zod
  //   .string({
  //     required_error: "Please enter number of days",
  //   })
  //   .min(1)
  //   .refine((value) => {
  //     const isNum = zod.number();
  //     return isNum.safeParse(value);
  //   }),
  days: zod.coerce.number({ required_error: "Please enter number of days." }),
  privacy: zod.string().refine(
    (value) => {
      const result = zod.enum(["public", "private"]).safeParse(value);
      if (result.success) {
        return result.data;
      }
      return false;
    },
    {
      message: "Please select a privacy option.",
    }
  ),
  tags: zod.string().array().min(1, {
    message: "Please enter at least one tag for your challenge.",
  }),
  description: zod.string().min(1, {
    message: "Please enter a description for your challenge.",
  }),
});

export const challengeFields: Field[] = [
  {
    name: "name",
    label: "",
    placeholder: "What's the challenge?",
    type: "text",
    customClass: {
      input: "h-full text-2xl px-0 font-semibold border-none shadow-none",
    },
    default: "",
  },
  {
    name: "days",
    placeholder: "Challenge for X days?",
    type: "number",
    default: "",
    customClass: {
      input: "h-full text-2xl px-0 font-semibold border-none shadow-none",
    },
  },
  {
    name: "privacy",
    type: "select",
    placeholder: "Make it public? or private?",
    default: "",
    label: "Make it private or public?",
    customClass: {
      trigger: "",
    },
    options: [
      {
        label: "Public",
        value: "public",
      },
      {
        label: "Private",
        value: "private",
      },
    ],
  },
  {
    name: "tags",
    placeholder: "#4 tags to organize!!",
    default: [],
    type: "tags",
  },
  {
    default: "",
    name: "description",
    placeholder: "30 days of discipline :p",
    type: "markdown",
    customClass: {
      input: "h-96 shadow-md rounded-md",
    },
  },
];

export const initialValues = {
  name: "",
  days: 30,
  privacy: "",
  tags: [],
  description: "",
};

export const challengeResolver = zodResolver(challengeSchema);
export type TChallenge = zod.infer<typeof challengeSchema>;
