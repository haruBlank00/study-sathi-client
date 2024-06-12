import { Field } from "@/components/form/types";
import { Card, CardContent } from "@/components/ui/card";
import { FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Upload, X } from "lucide-react";
import { useState } from "react";
import zod from "zod";

const profileSchema = zod.object({
  userName: zod.string().min(1, { message: "Please choose a username." }),
  avatar: zod
    .custom<File>((file) => file instanceof File)
    .refine((file) => file.size <= 10 * 1024 * 1024, {
      message: "File size should be less than 2MB",
    })
    .refine((file) => ["image/jpeg", "image/png"].includes(file.type), {
      message: "Please choose JPG/JPEG or PNG files.",
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
    Component: ({ field }) => {
      const { name, onChange } = field;
      const [previewSrc, setPreviewSrc] = useState("");

      const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (!files) return;

        const file = files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = () => {
          setPreviewSrc(reader.result as string);
        };
        reader.readAsDataURL(file);
        onChange(file);
      };

      const avatarRemoveHandler = (
        e: React.MouseEvent<SVGSVGElement, MouseEvent>
      ) => {
        e.stopPropagation();
        setPreviewSrc("");
        onChange(null);
      };

      const helperText = (
        <FormLabel htmlFor="avatar" className="cursor-pointer">
          <div className="space-y-1 gap-2">
            <Upload className="mx-auto" />
            <h3 className="text-primary text-xl">Upload Picture</h3>
            <p className="text-base text-slate-500">
              Choose avatar | Avatar size should be less than 2MB{" "}
            </p>
            <p className="text-base text-slate-500">
              and should be in{" "}
              <span className="text-primary text-lg">JPG, PNG, or GIF</span>{" "}
              format
            </p>
          </div>
        </FormLabel>
      );

      const imagePreviewer = (
        <figure className="h-full w-full">
          <img
            src={previewSrc}
            alt="Your avatar preview"
            className="block w-full h-full object-contain"
          />
        </figure>
      );

      return (
        <>
          <Input
            className="hidden"
            type="file"
            name={name}
            onChange={onChangeHandler}
            id="avatar"
          />

          <p className="text-base mb-4">Choose your avatar</p>

          <Card className="p-6 ">
            <CardContent className="relative h-56 border-2 border-slate-400 border-dashed rounded-md text-center p-8">
              {previewSrc && (
                <X
                  className="absolute top-2 right-2 hover:scale-125 hover:animate-spin transition-transform cursor-pointer"
                  onClick={avatarRemoveHandler}
                />
              )}
              {previewSrc ? imagePreviewer : helperText}
            </CardContent>
          </Card>

          <FormMessage />
        </>
      );
    },
  },
];

export const profileFormResolver = zodResolver(profileSchema);
export type TProfile = zod.infer<typeof profileSchema>;
