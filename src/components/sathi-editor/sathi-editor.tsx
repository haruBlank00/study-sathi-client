import {
  AdmonitionDirectiveDescriptor,
  BlockTypeSelect,
  BoldItalicUnderlineToggles,
  ChangeCodeMirrorLanguage,
  ConditionalContents,
  CreateLink,
  InsertAdmonition,
  InsertCodeBlock,
  InsertImage,
  InsertSandpack,
  InsertTable,
  InsertThematicBreak,
  ListsToggle,
  MDXEditor,
  MDXEditorMethods,
  MDXEditorProps,
  SandpackConfig,
  Separator,
  ShowSandpackInfo,
  UndoRedo,
  codeBlockPlugin,
  codeMirrorPlugin,
  sandpackPlugin,
} from "@mdxeditor/editor";

import {
  directivesPlugin,
  headingsPlugin,
  imagePlugin,
  linkDialogPlugin,
  linkPlugin,
  listsPlugin,
  markdownShortcutPlugin,
  quotePlugin,
  tablePlugin,
  toolbarPlugin,
} from "@mdxeditor/editor";

import "@mdxeditor/editor/style.css";
import React from "react";

type SathiEditorProps = MDXEditorProps;
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

export const SathiEditor = React.forwardRef<MDXEditorMethods, SathiEditorProps>(
  ({ onChange, placeholder, markdown, className, readOnly }, ref) => {
    const plugins = [
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
    ];

    if (!readOnly) {
      plugins.push(
        toolbarPlugin({
          toolbarContents: () => !readOnly && <Toolbars />,
        })
      );
    }

    return (
      <MDXEditor
        ref={ref}
        className={className}
        placeholder={placeholder}
        contentEditableClassName="prose dark:text-white"
        markdown={markdown}
        onChange={onChange}
        readOnly={readOnly}
        plugins={plugins}
      />
    );
  }
);
export default SathiEditor;
