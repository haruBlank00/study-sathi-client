import { Field } from "@/components/form/types";
import { getFieldDefault, getFieldSchema } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";

import zod from "zod";
export const challengeFields: Field[] = [
  {
    name: "name",
    label: "",
    placeholder: "New challenge name here...",
    type: "text",
    customClass: {
      input: "h-full text-2xl px-0 font-semibold border-none shadow-none",
    },
    schema: zod.string().min(1, { message: "Please enter a challenge name." }),
    default: "",
  },
  {
    name: "days",
    placeholder: "Enter number of days",
    type: "number",
    default: "",
    customClass: {
      input: "h-full text-2xl px-0 font-semibold border-none shadow-none",
    },
    schema: zod
      .string({
        required_error: "Please enter number of days",
      })
      .min(1),
  },
  {
    name: "privacy",
    type: "select",
    placeholder: "Public / Private",
    default: "",
    customClass: {
      input:
        "h-full text-2xl px-0 font-semibold border-none shadow-none text-gray-500",
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
    schema: zod.string().refine(
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
  },
  {
    name: "tags",
    placeholder: "Add upto 4 tags...",
    default: [],
    type: "tags",
    schema: zod.string().array().min(1, {
      message: "Please enter at least one tag for your challenge.",
    }),
  },
  {
    default: "",
    name: "description",
    placeholder: "30 days of discipline :p",
    type: "markdown",
    customClass: {
      input: "h-96 shadow-md rounded-md",
    },
    schema: zod.string().min(1, {
      message: "Please enter a description for your challenge.",
    }),
  },
];

const chellengeSchema = getFieldSchema(challengeFields);
export const initialValues = getFieldDefault(challengeFields);

export const challengeResolver = zodResolver(chellengeSchema);
export type TChallengeSchema = zod.infer<typeof chellengeSchema>;
