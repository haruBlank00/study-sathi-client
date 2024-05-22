import { Field } from "@/components/form/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import zod from "zod";

const settingsSchema = zod.object({
  userName: zod.string().min(1, { message: "Please enter a name." }),
  avatar: zod
    .custom<File>((file) => file instanceof File)
    .refine((file) => file.size <= 2 * 1024 * 1024, {
      message: "File size should be less than 2MB",
    })
    .refine((file) => ["image/jpeg", "image/png"].includes(file.type), {
      message: "Only jpg/jpeg and png files are allowed",
    })
    .nullable(),
});

export const settingsFields: Field[] = [
  {
    name: "userName",
    label: "Enter username you want to choose.",
    placeholder: "@lolcat",
    type: "text",
  },
  {
    name: "avatar",
    type: "custom",
    Component: ({ field, name }) => {
      return (
        <div>
          <Input
            type="file"
            name={name}
            onChange={(e) => {
              field.onChange(e.target.files?.[0]);
            }}
          />
        </div>
      );
    },
  },
];

export const settingsFormResolver = zodResolver(settingsSchema);
export type TSettings = zod.infer<typeof settingsSchema>;
