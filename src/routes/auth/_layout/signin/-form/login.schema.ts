import { emailSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import zod from "zod";

const loginSchema = zod.object({
  email: emailSchema,
});

export const loginResolver = zodResolver(loginSchema);
export type TLoginSchema = zod.infer<typeof loginSchema>;
