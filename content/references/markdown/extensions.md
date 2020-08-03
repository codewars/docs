---
kind: reference
sidebar: markdown
topic: markdown
prev: /references/markdown/
---

# Codewars' Markdown Extensions

Codewars adds few Markdown extensions for writing kata descriptions.



## Sequential Code Blocks

Used to display [code blocks](/references/markdown/#code-block) only in the language selected by the user.


### Details

- Each code block must have info string set to a valid language ID. To find the language ID, visit its documentation from the [languages page](/languages/).
- The order of the code blocks/languages doesn't matter.
- To avoid rendering errors/problems:
  - Always put an empty line before and after the complete group of code blocks
  - Never put empty lines between individual code blocks of the same sequential group.

### Example

````markdown
```javascript
const add = (a, b) => a + b;
```
```typescript
const add = (a: number, b: number) => a + b;
```
```ruby
def add(a, b)
  a + b
end
```
````

If the active language of the user is TypeScript, the above Markdown is rendered to the following:

> ```typescript
> const add = (a: number, b: number) => a + b;
> ```






## Conditional Rendering

Similarly to sequential code blocks, conditional rendering blocks are used to show normally rendered text, but only if the language selected by the user matches the info string of the block.

### Basic syntax

````markdown
```if:java
For java, use `Preloaded.check(input)`.
```
````

If the selected language is java, this block is showing up in the description, rendered to:

> ```if:java
> For java, use `Preloaded.check(input)`.
> ```

### Details

* The language name in the info string has to match a valid language ID. To find the language ID, visit its documentation from the [languages page](/languages/).
* To obtain proper rendering, language specific blocks need an empty line before and after them, just like code blocks.
* You can use any markdown formatting you want inside conditional blocks.
* You can use different kinds of conditions or assigned them to groups of languages using the following syntaxes:
  - `if:language`
  - `if:language,language2`
  - `if-not:language`
  - `if-not:language1,language2`


### Examples

#### `if:languages`

````markdown
```if:javascript,typescript
Shown _if_ the active language is JavaScript **or** TypeScript.
```
```if:ruby
Shown _if_ the active language is Ruby.
```
````

If the active language is Ruby, the above renders:

> Shown _if_ the active language is Ruby.

#### `if-not:languages`

````markdown
```if-not:javascript,typescript
Hidden _if_ the active language is JavaScript **or** TypeScript.
```
```if-not:ruby
Hidden _if_ the active language is Ruby.
```
````

If the active language is Ruby, the above renders:

> Hidden _if_ the active language is JavaScript **or** TypeScript.


### Using Code Blocks Inside Conditional Blocks

To use code blocks within these conditional blocks, use tildes (`~`) to declare the conditional block or increase the number of backticks used.

````markdown
~~~if:javascript
Used tilde to open conditional block.
```javascript
// Regular code block
```
~~~
````

`````markdown
````if:javascript
Used 4 backticks
```javascript
// Regular code block
```
````
`````




## Math Typesetting

Math typesetting is supported with the following two syntaxes:

- Inline: [code span](/references/markdown/#code-span) starting and ending with `$`
- Block: [code block](/references/markdown/#code-block) with info string `math`


### Usual Notations

See the [support table](https://katex.org/docs/support_table.html) on [KaTeX](https://katex.org) to find all of the supported syntaxes. You may find below are some that are often used:

| Notation | Represents             |
| :------- | :--------------------- |
| `x_n`    |  indice                |
| `x^n`    |  exponant              |
| `\lt`    |  lower than            |
| `\leq`   |  lower or equal        |
| `\lgt`   |  greater than          |
| `\geq`   |  greater or equal      |
| `\sum`   |  sigma (sum)           |
| `\prod`  |  pi (big)              |
| `\pi`    |  pi (small)            |
| `\to`    |  arrow                 |
| `\lim`   |  limit                 |
|`\infty`  |  infinite              |
|`{ ... }` |  to group instructions |




### Example

````markdown
Suppose `$ x_n \leq l \leq y_n $` and `$ \lim_{n\to\infty} (x_n - y_n) = 0 $`,
prove that `$ \lim_{n\to\infty} x_n = \lim_{n\to\infty} y_n = l $`.

```math
x_n \leq l \leq y_n
```
```math
\lim_{n\to\infty} (x_n - y_n) = 0
```
```math
\lim_{n\to\infty} x_n = \lim_{n\to\infty} y_n = l
```
````

Renders:

<div class="block dark:hidden">

![Math Typeset Example](./img/math-typeset-example-light.png)

</div>
<div class="hidden dark:block">

![Math Typeset Example](./img/math-typeset-example-dark.png)

</div>
