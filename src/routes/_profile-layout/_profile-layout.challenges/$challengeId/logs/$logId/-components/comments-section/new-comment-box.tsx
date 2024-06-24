import {
  AdmonitionDirectiveDescriptor,
  BlockTypeSelect,
  BoldItalicUnderlineToggles,
  CreateLink,
  InsertImage,
  ListsToggle,
  MDXEditor,
  SandpackConfig,
  Separator,
  codeBlockPlugin,
  codeMirrorPlugin,
  directivesPlugin,
  headingsPlugin,
  imagePlugin,
  linkDialogPlugin,
  linkPlugin,
  listsPlugin,
  markdownShortcutPlugin,
  quotePlugin,
  sandpackPlugin,
  tablePlugin,
  toolbarPlugin,
} from "@mdxeditor/editor";

import "@mdxeditor/editor/style.css";
import "./new-comment-box.css";
import { SathiButton } from "@/components/sathi-button/sathi-button";

const Toolbars = () => (
  <>
    <BoldItalicUnderlineToggles />
    <Separator />

    <ListsToggle />
    <Separator />

    <BlockTypeSelect />
    <Separator />

    <CreateLink />
    <InsertImage />
    <Separator />
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

export const NewCommentBox = () => {
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
    toolbarPlugin({
      toolbarContents() {
        return <Toolbars />;
      },
    }),
  ];
  return (
    <div id="input-comment-box" className="mb-8">
      <form className="flex flex-col gap-4">
        <MDXEditor
          markdown=""
          plugins={plugins}
          placeholder="Add to discussion"
          contentEditableClassName="text-primary"
        />
        <div>
          <SathiButton>Submit</SathiButton>
          {/* <SathiButton>Preview</SathiButton> */}
        </div>
      </form>
    </div>
  );
};
