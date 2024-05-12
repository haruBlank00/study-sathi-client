/**
 *
 * TagsField component
 * It takes array of string to render as tags
 * it then take method to add new tag to the array
 * it also takes a method to remove a new tag to the array
 *
 * It will manage individual tag in it's internal state
 * but after the user has finished entering tag
 * it will add it to the array and clear the interal state
 *
 * take will be considered if the word is precedeed by ", " (i.e comman and whitespace or when the user press enter)
 */

import { X } from "lucide-react";
import { useState } from "react";
import { Badge } from "../ui/badge";
import { Input } from "../ui/input";
import { FormField } from "./types";

export interface TagsField extends FormField {
  type: "tags";
}

interface TagsFieldProps {
  name: string;
  placeholder?: string;
  value: string[];
  onChange: (value: string[]) => void;
}
export const TagsField = ({
  placeholder,
  name,
  value,
  onChange,
}: TagsFieldProps) => {
  const [tag, setTag] = useState("");

  const addTagToArray = (tag: string) => {
    if (!tag) return;

    const currentTags = value as string[];
    const newTag = "#" + tag.trim();
    const updatedTags = [...currentTags, newTag];
    onChange(updatedTags);
    setTag("");
  };

  const onInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    const lastCharPos = value.length - 1;
    const lastChar = value.charAt(lastCharPos);
    const secondtoLastChar = value.charAt(lastCharPos - 1);

    // if the last character is "," and the second last character is " ", we assume the user has finished entering the tag
    const tagConditionIsMet = secondtoLastChar === "," && lastChar === " ";
    if (tagConditionIsMet) {
      const sanitizedValue = value.slice(0, -2); // we remove commana and whitespace
      addTagToArray(sanitizedValue);
      return;
    }
    setTag(value);
  };

  const onKeyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addTagToArray(tag);
    }
  };

  const removeTag = (tag: string) => {
    const currentTags = value;
    const updatedTags = currentTags.filter(
      (survivedTag) => survivedTag !== tag
    );
    onChange(updatedTags);
  };

  const tagsUI = (
    <div className="flex gap-1 mr-2">
      {value.map((tag) => (
        <Badge key={tag} className="text-sm flex gap-2" variant={"secondary"}>
          {tag.trim()}
          <X
            className="w-3 h-3 cursor-pointer hover:text-red-600"
            onClick={() => removeTag(tag)}
          />
        </Badge>
      ))}
    </div>
  );
  const showTags = value.length > 0;
  return (
    <div className="flex items-center">
      {showTags && tagsUI}
      <Input
        value={tag}
        name={name}
        type="text"
        placeholder={placeholder}
        className="h-full text-2xl px-0 font-semibold border-none shadow-none flex-1"
        onKeyDown={onKeyPressHandler}
        onChange={onInputChangeHandler}
      />
    </div>
  );
};
