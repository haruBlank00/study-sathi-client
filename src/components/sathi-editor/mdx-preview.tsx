import { MDXEditorProps } from "@mdxeditor/editor";

import SathiEditor from "./sathi-editor";

type MdxPreviewProps = Pick<MDXEditorProps, "markdown">;
export const MdxPreview = ({ markdown }: MdxPreviewProps) => {
  return <SathiEditor markdown={markdown} readOnly />;
};
