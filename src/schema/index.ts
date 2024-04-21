import zod from "zod";

export const emailSchema = zod
  .string()
  .min(1, {
    message: "Please enter your email address.",
  })
  .email({
    message: "Please enter a valid email address.",
  });
