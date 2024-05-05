import {
  MDXEditor,
  MDXEditorMethods,
  UndoRedo,
  BoldItalicUnderlineToggles,
  ListsToggle,
  Separator,
  BlockTypeSelect,
  CreateLink,
  InsertImage,
  InsertTable,
  InsertThematicBreak,
  InsertCodeBlock,
  codeBlockPlugin,
  codeMirrorPlugin,
  SandpackConfig,
  sandpackPlugin,
  ConditionalContents,
  ChangeCodeMirrorLanguage,
  ShowSandpackInfo,
  InsertSandpack,
  InsertAdmonition,
  AdmonitionDirectiveDescriptor,
} from "@mdxeditor/editor";

import {
  toolbarPlugin,
  listsPlugin,
  headingsPlugin,
  linkPlugin,
  linkDialogPlugin,
  imagePlugin,
  quotePlugin,
  markdownShortcutPlugin,
  tablePlugin,
  directivesPlugin,
  //   diffSourcePlugin,
} from "@mdxeditor/editor";

import "@mdxeditor/editor/style.css";
import { useRef } from "react";

type SathiEditorProps = {
  value: string;
  placeholder: string;
  onChange: (markdown: string) => void;
  className?: string;
};

const Toolbars = () => (
  <>
    <UndoRedo />
    <Separator />

    <BoldItalicUnderlineToggles />
    <Separator />

    <ListsToggle />
    <Separator />

    <BlockTypeSelect />
    <Separator />

    <CreateLink />
    <InsertImage />
    <Separator />

    <InsertTable />
    <InsertThematicBreak />
    <Separator />

    <ConditionalContents
      options={[
        {
          when: (editor) => editor?.editorType === "codeblock",
          contents: () => <ChangeCodeMirrorLanguage />,
        },
        {
          when: (editor) => editor?.editorType === "sandpack",
          contents: () => <ShowSandpackInfo />,
        },
        {
          fallback: () => (
            <>
              <InsertCodeBlock />
              <InsertSandpack />
            </>
          ),
        },
      ]}
    />

    <Separator />

    <InsertAdmonition />
  </>
);

const defaultSnippetContent = `
export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
`.trim();

const simpleSandpackConfig: SandpackConfig = {
  defaultPreset: "react",
  presets: [
    {
      label: "React",
      name: "react",
      meta: "live react",
      sandpackTemplate: "react",
      sandpackTheme: "light",
      snippetFileName: "/App.js",
      snippetLanguage: "jsx",
      initialSnippetContent: defaultSnippetContent,
    },
  ],
};

function SathiEditor({
  value,
  onChange,
  placeholder,
  className = "",
}: SathiEditorProps) {
  const ref = useRef<MDXEditorMethods>(null);
  return (
    <MDXEditor
      className={className}
      placeholder={placeholder}
      contentEditableClassName="prose"
      ref={ref}
      markdown={value}
      onChange={onChange}
      plugins={[
        toolbarPlugin({
          toolbarContents: () => <Toolbars />,
        }),
        headingsPlugin(),
        listsPlugin(),
        linkPlugin(),
        linkDialogPlugin(),
        quotePlugin(),
        imagePlugin(),
        tablePlugin(),

        codeBlockPlugin({ defaultCodeBlockLanguage: "js" }),
        sandpackPlugin({ sandpackConfig: simpleSandpackConfig }),
        codeMirrorPlugin({
          codeBlockLanguages: { js: "JavaScript", css: "CSS" },
        }),

        directivesPlugin({
          directiveDescriptors: [AdmonitionDirectiveDescriptor],
        }),
        markdownShortcutPlugin(),
      ]}
    />
  );
}

export default SathiEditor;
