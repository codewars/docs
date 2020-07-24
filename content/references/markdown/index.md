---
kind: reference
topic: markdown
next: /references/markdown/extensions/
---



# Basic Markdown Syntax

Codewars supports [Markdown][wiki-markdown].

More specifically, [GitHub Flavored Markdown][gfm] (strict superset of [CommonMark][common-mark]) and few [Codewars extensions][extensions].

You may find below a summary of the most used ones.




## Emphasis

```markdown
_This is italic_
*This is also italic*

__This is bold__
**This is bold too**

___here, italic and bold___
***here, italic and bold***
```
Note that `*You **can** combine them*`: *You **can** combine them*.




## Headers

```code
# This is &lt;h1&gt;
## This is &lt;h2&gt;
###### This is &lt;h6&gt;
```



## Code blocks

To get text displayed without the renderer playing with the indentation or whitespaces, code blocks

### Inline code blocks:

To highlight code inside a sentence, use simple backticks  ``` `print("This is some code")` ```.

### Mutliline code blocks:

For multiline code blocks, use triple backticks.

Constraints:
   - Put an empty line before and after the code block itself, so that it's rendered correctly
   - The triple backticks must be alone one their line (see [extensions](./references/markdown/extensions/) for exceptions)

```code
\`\`\`
```
```






## Lists

### Unordered lists:

```code
* item 1
* item 2
    * subitem 2.1
    * subitem 2.2
```

You can use different marks to get same result, like `+` or `-`.

### Ordered lists:

The numbering is automatic, hence you cannot mix different types of paragraphs or items if you want to keep the numbering correct.
```code
1. item 1
1. item 2
  * subitem 2.1
  * subitem 2.2
```

Example:

1. item 1
1. item 2
    1. item 2.1
    * unordered mark
    1. cannot be item 2.2



## Links

Valid url links are automatically converted to links. If you want to have a custom text instead of the url, you can you this syntax:

```code
[Custom text](address)
```

Like this [custom text leading to Codewars](https://www.codewars.com/dashboard).





## Images

Similarly to links:

```code
![alt text](address)
```



## Paragraphs & line continuations:

* To get separated paragraphs, put an empty line between your paragraphs in the text.
    If you just use a line break, both parapgraphs will be merged together when rendered, like those two lines even if they are written on two different lines.

* If you just want a line break without any space between the paragraphs, put two whitespaces  
    ...at the end of the line, like it is here.

The related code is:

```code
* To get separated [...] in the text.
    If you just use [...] different lines.

* If you just want a line break without any space between the paragraphs, put two whitespaces  
    ...at the end of the line, like it is here.
```




## Blockquotes

To quote the answer of another user, for example:

```code
> Quoted text
```

> Quoted text






<!--
TODO Finish this basic Markdown reference by listing most frequently used ones
TODO Add tutorial for writing readable comment with Markdown
TODO Add tutorial for formatting kata description
-->

[wiki-markdown]: https://en.wikipedia.org/wiki/Markdown
[common-mark]: https://commonmark.org/
[gfm]: https://github.github.com/gfm/
[extensions]: /references/markdown/extensions/
