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
const createHighlighter = ({ themes = ["nord"] } = {}) => {
  // Reuse the same instance
  const highlighterPromise = getHighlighter({ themes }).then(
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

    visit(tree, "code", (node) => {
      node.value = themes
        .map((theme) =>
          codeToHtml(highlighter, node.value, node.lang || "text", theme)
        )
        .join("");
      node.type = "html";
    });
  };
};

const codeToHtml = (highlighter, code, lang, theme) => {
  let tokenLines = null;
  try {
    tokenLines = highlighter.codeToThemedTokens(
      code,
      remapLanguageId(lang),
      theme
    );
  } catch (e) {
    if (/^No language registration for/.test(e.message)) {
      console.warn(`shiki: ${e.message}`);
      console.warn(`shiki: Falling back to "text"`);
      tokenLines = highlighter.codeToThemedTokens(code, "text", theme);
    } else {
      throw e;
    }
  }

  const fg = highlighter.getForegroundColor(theme);
  const bg = highlighter.getBackgroundColor(theme);

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
  return html;
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
