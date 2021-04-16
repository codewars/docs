import React from "react";

// https://github.com/facebook/docusaurus/blob/master/packages/docusaurus-theme-classic/src/theme/MDXComponents/index.tsx
import OriginalComponents from "@theme-init/MDXComponents";
import CodeBlockWithCopy from "./CodeBlockWithCopy";

// Customize how `pre` and `code` are handled.
// https://mdxjs.com/guides/syntax-highlighting
const Components = {
  pre: (props) => <CodeBlockWithCopy {...props}></CodeBlockWithCopy>,
  code: (props) => <code {...props}></code>,
};
Object.keys(OriginalComponents).forEach((key) => {
  if (key !== "pre" && key !== "code") {
    Components[key] = OriginalComponents[key];
  }
});

export default Components;
