---
title: Basic Markdown Syntax
slug: /references/markdown
tags: [reference]
---

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
*You can have **bold** in italic*
```






## Displaying code

Use code spans and code blocks to show the text as-is. Use code block to show the syntax highlighted code.

### Code span

Use single backtick (\`) to show the text as is inline.

```markdown
Code span example: `print("example")`
```

### Code block

For code blocks, use triple backticks (a "code fence").

````markdown
```
This is the content of the code block.
       You can indent inside it as you like and it will be preserved.
```
````

The opening code fence can be followed by an optional text called the info string. When the info string is a valid language ID, `python` for example, the content is syntax highlighted.
See the language's documentation in [supported languages](/languages/) to find the language ID.

````markdown
```python
def hello_world():
    # this is rendered
    hi = lambda: 'hello'
    print(hi())
    return 42 
```
````

If you're writing a kata description, see [Codewars' extensions][extensions] like sequential and language-specific blocks.






## Lists

### Unordered lists

```markdown
* item 1
* item 2
    * subitem 2.1
    * subitem 2.2
```

You can use `-`, `*`, and `+` as bullet markers.

### Ordered lists

```markdown
1. item 1
    1. subitem 1.1
    2. subitem 1.2
2. item 2
    * subitem (you can use unordered subitems too)
3. item 3
```

Incrementing the marker is optional so you can use the following too:

```markdown
1. item 1
    1. subitem 1.1
    1. subitem 1.2
1. item 2
    * subitem (you can use unordered subitems too)
1. item 3
```




## Links

Valid URLs are automatically converted to links with link text set to the URL.

To specify a link text, use the following syntax:

```markdown
[link text](https://www.example.com)
```






## Images

To include an image:

```markdown
![alt text](address)
```



## Blockquotes

To quote the answer of another user, for example:

```markdown
> Quoted text
```







<!--
TODO Add tutorial for writing readable comment with Markdown
TODO Add tutorial for formatting kata description
-->

[wiki-markdown]: https://en.wikipedia.org/wiki/Markdown
[common-mark]: https://commonmark.org/
[gfm]: https://github.github.com/gfm/
[extensions]: /references/markdown/extensions/
