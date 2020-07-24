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

<pre><code>
# This is &lt;h1&gt;
## This is &lt;h2&gt;
### This is &lt;h3&gt;
</code></pre>



## Displaying code

Use code spans and code blocks to show the text as is. Use code block to show the syntax highlighted code.

### Code span

Use single backtick (<code>`</code>) to show the text as is inline.

```markdown
Code span example: `print("example")`
```

### Code block

For multiline code blocks, use triple backticks.

Constraints:
   - Put an empty line before and after the code block itself, so that it's rendered correctly
   - The triple backticks must be alone one their line (see [extensions](./references/markdown/extensions/) for exceptions)

````markdown
```
This is a code block
       you can indent inside it as you like.
```
````

Another way to declare a code block is to put 4 whitesapces at the beginning of the line

````markdown
   This will be rendered as a code block too
           you can indent inside it as you like.

````




## Lists

### Unordered lists:

```markdown
* item 1
* item 2
    * subitem 2.1
    * subitem 2.2
```

You can use different marks to get same result, like `+` or `-`.

### Ordered lists:

```markdown
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

```markdown
[link text](https://www.example.com)
```

Like this [custom text leading to Codewars](https://www.codewars.com/dashboard).





## Images

Similarly to links:

```markdown
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

```markdown
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
