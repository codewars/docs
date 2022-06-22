const fs = require("fs");
const path = require("path");

const { getHighlighter } = require("shiki");
const visit = require("unist-util-visit");

const grammar = (name) =>
  JSON.parse(
    fs.readFileSync(
      path.resolve(__dirname, `./languages/${name}.tmLanguage.json`)
    )
  );

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
// TODO Decoration. Like Docusaurus builtin, or https://github.com/shikijs/shiki/issues/5
//      or https://github.com/andrewbranch/gatsby-remark-vscode#line-highlighting
const createHighlighter = ({ theme = "nord" } = {}) => {
  // Reuse the same instance
  const highlighterPromise = getHighlighter({ theme }).then(
    async (highlighter) => {
      const langs = [
        // See languages/README.md for sources.
        {
          id: "factor",
          scopeName: "source.factor",
          grammar: grammar("factor"),
        },
        {
          id: "fortran",
          scopeName: "source.fortran.free",
          grammar: grammar("fortran"),
        },
        {
          id: "idris",
          scopeName: "source.idris",
          grammar: grammar("idris"),
        },
        {
          id: "haxe",
          scopeName: "source.hx",
          grammar: grammar("haxe"),
        },
        {
          id: "racket",
          scopeName: "source.racket",
          grammar: grammar("racket"),
        },
      ];
      for (const lang of langs) await highlighter.loadLanguage(lang);
      return highlighter;
    }
  );

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

      let html = `<pre class="${theme}" style="background-color: ${bg}">`;
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
