const path = require("path");

const { getHighlighter, BUNDLED_LANGUAGES } = require("shiki");
const visit = require("unist-util-visit");

const syntaxPath = (name) =>
  path.resolve(__dirname, `./languages/${name}.tmLanguage.json`);

const langs = new Set([
  "asm",
  "c",
  "clojure",
  "cobol",
  "coffee",
  "cpp",
  "crystal",
  "csharp",
  "css",
  "d",
  "dart",
  "elixir",
  "elm",
  "erlang",
  "fsharp",
  "go",
  "groovy",
  "haskell",
  "html",
  "java",
  "javascript",
  "json",
  "jsonc",
  "jsx",
  "julia",
  "kotlin",
  "latex",
  "lisp",
  "lua",
  "markdown",
  "mdx",
  "nim",
  "objc",
  "ocaml",
  "pascal",
  "perl",
  "php",
  "powershell",
  "prolog",
  "purescript",
  "python",
  "r",
  "raku",
  "ruby",
  "rust",
  "scala",
  "shell",
  "solidity",
  "sql",
  "swift",
  "toml",
  "tsx",
  "typescript",
  "vb",
  "yaml",
]);

const languages = BUNDLED_LANGUAGES.filter((lang) => {
  return (
    langs.has(lang.id) ||
    (lang.aliases && lang.aliases.some((id) => langs.has(id)))
  );
});

// Remap language id to match Shiki.
const remapLanguageId = (id) => {
  switch (id) {
    case "coffeescript":
      return "coffee";
    case "nasm":
      return "asm";
    default:
      return id;
  }
};

// Use shiki for syntax highlighting.
// Also store Base64 encoded code in HTML, so we can use that to implement copy button.
// TODO Decoration. Like Docusaurus builtin, or https://github.com/shikijs/shiki/issues/5
//      or https://github.com/andrewbranch/gatsby-remark-vscode#line-highlighting
const createHighlighter = ({ theme = "nord" } = {}) => {
  // Reuse the same instance
  const highlighterPromise = getHighlighter({
    theme,
    langs: languages.concat([
      // See languages/README.md for sources.
      // TODO Open PR upstream
      {
        id: "fortran",
        scopeName: "source.fortran.free",
        path: syntaxPath("fortran"),
      },
      {
        id: "idris",
        scopeName: "source.idris",
        path: syntaxPath("idris"),
      },
      {
        id: "haxe",
        scopeName: "source.hx",
        path: syntaxPath("haxe"),
      },
      {
        id: "racket",
        scopeName: "source.racket",
        path: syntaxPath("racket"),
      },

      // TODO Remove these after a new shiki is released
      {
        id: "nim",
        scopeName: "source.nim",
        path: syntaxPath("nim"),
      },
      {
        id: "r",
        scopeName: "source.r",
        path: syntaxPath("r"),
      },
      {
        id: "raku",
        scopeName: "source.perl.6",
        path: syntaxPath("raku"),
      },
    ]),
  });

  return () => async (tree) => {
    const highlighter = await highlighterPromise;
    const fg = highlighter.getForegroundColor();
    const bg = highlighter.getBackgroundColor();

    visit(tree, "code", (node) => {
      // const meta = node.meta;
      const lang = node.lang || "text";
      const code = node.value;
      let tokenLines = null;
      try {
        tokenLines = highlighter.codeToThemedTokens(
          code,
          remapLanguageId(lang)
        );
      } catch (e) {
        if (/^No language registration for/.test(e.message)) {
          console.warn(`shiki: ${e.message}`);
          console.warn(`shiki: Falling back to "text"`);
          tokenLines = highlighter.codeToThemedTokens(code, "text");
        } else {
          throw e;
        }
      }

      const b64 = Buffer.from(code).toString("base64");
      let html = `<pre style="background-color: ${bg}" codedata="${b64}">`;
      html += `<code class="language-${lang}">`;
      for (const line of tokenLines) {
        html += `<span>`;
        for (const token of line) {
          const css = [`color: ${token.color || fg}`];
          switch (token.fontStyle) {
            case -1: // NotSet
            case 0: // None
              break;
            case 1: // Italic
              css.push(`font-style: italic`);
              break;
            case 2: // Bold
              css.push(`font-weight: bold`);
              break;
            case 4: // Underline
              css.push(`text-decoration: underline`);
              break;
          }
          const content = escapeHtml(token.content);
          html += `<span style="${css.join("; ")}">${content}</span>`;
        }
        html += `</span>\n`;
      }

      html = html.replace(/\n*$/, ""); // get rid of trailing new lines
      html += `</code></pre>`;

      node.value = html;
      node.type = "html";
    });
  };
};

module.exports = { createHighlighter };

const HTML_ESCAPES = Object.freeze({
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
});

const escapeHtml = (s) => s.replace(/[&<>"']/g, (c) => HTML_ESCAPES[c]);
