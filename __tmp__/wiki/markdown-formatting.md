More and more often, I'm tripping over some badly formatted descriptions or comments. But there are many, many possibilities to make your text/code more readable! This article will concentrate on different features provided in Codewars' Editor and show some examples! 

# How can I change the format of my text/code?
Besides the classic HTML tags there are a plenty of shortcut, which provide the same functionality. Nevertheless, you can use HTML tags. The editing mode using these shortcuts is called ``Markdown``.
The following listing will show the most useful shortcuts. 

### Headlines
Using headlines is very useful, especially when you are creating a kata's description! The special character for headlines is the **hash <kbd>#</kbd>**. You just have to place 1-6 <kbd>#</kbd> in front of your text. The amount of <kbd>#</kbd> decides whether the headline is greater (1-3) or smaller (4-6).

Here some examples:
> # Headline 1
> ## Headline 2
> ### Headline 3
> #### Headline 4
> ##### Headline 5
> ###### Headline 6
> Note: There has to be a whitespace between the <kbd>#</kbd> and your text.

### Bold and italic font
Often it is useful to highlight some text to show what is really important. Therefore, we are able to apply common formats (**bold** or *italic*) to what we have written. To write in an italic font you just have to place your text between **asterisks <kbd>*</kbd> or underscores <kbd>_</kbd>**. If you know this, writing in a bold font is very simple: Just just have to use two asterisk or underscores! 

Keep this in mind when you write down some keywords the next time!

Here some more examples:
> \*value\* or \_value\_ will look like this *value*

> \*\*value\*\* or \_\_value\_\_ will look like this **value**

You can also combine them! Just use \* or \_ three times:
> \*\*\*value\*\*\* or \_\_\_value\_\_\_ will look like this ***value***

### Code blocks
Imagine this: You're working on a difficult kata and you don't know why your code isn't working as expected. You've spent already 2 hours in console outputs to analyse your code, but you still don't have a clue what's wrong! Now you decide to post your solution as a comment. So you just copy and paste it into the comment box. Now your post looks something like this:

function myFunction(array) {

console.log('This is badly formatted');

}

Nobody enjoys reading this. And if the code is even more complex, nobody will be able to help you. So why don't we format this like code? Look, it works like this:

#### Inline Code Formatting
If you want to show the name of a variable, you just have to put it in between two single backticks. For example :

```
`var i` should equal 0
```

... gets formatted as ...

> `var i` should equal 0

#### Block Code Formatting
If you want to highlight your code like it's done when you're coding Javascript, Python, C# or something else, you have to write it like this. Watch closely!

~~~
```javascript
console.log("This is Javascript code");
```
~~~

... will look like ...

```javascript
console.log("This is Javascript code");
```

Valid language tags are the language ids found in URLs. For example, use `cpp` instead of `c++`. See [the documentation of the language](https://github.com/codewars/codewars.com/wiki/Languages-and-Test-Frameworks) to find the id.

#### Sequenced Code Blocks
This feature is completely unique to Codewars. If you include multiple code blocks in sequence when creating a kata, then only the relevant code block will be shown to users. This means that you can create a kata description for all languages, include code blocks for each language within sequence of each other and when a code warrior takes the challenge, they will only be shown the code block that is relevant to the active language they are training on. 

> **Note**: This feature is for kata and translation markdown only, not comments.

For example:

~~~
The method should be called like so:

```javascript
solveProblem(1);
```
```ruby
solve_problem(1)
```
~~~

If Ruby was the active language, then the markdown shown to users would be formatted like so:

-------

The method should be called like so:

```ruby
solve_problem(1)
```

---------

Did you catch that? The JavaScript code block was not shown. 

**Note:** If multiple language code blocks are found on a page but one matching the active language is not, then the first code block in each sequence will be used as the default.

#### Optional Section Formatting
This feature is also completely unique to Codewars. It takes the block formatting syntax and makes it possible to only include the content if the selected language **is** or **is not** active. 

> **Note**: This feature is for kata and translation markdown only, not comments.

For example, say you have a kata that supports 3 languages, JavaScript, Ruby and C#. You would like to include special instructions only for C# users and special instructions only for JavaScript and Ruby users. You could do it like so:

~~~
This is some shared instructions.

```if:javascript,ruby
This is only shown to JavaScript and Ruby users
- markdown is supported inside of here
- you can even include code blocks by using the alternate ~~~ format instead of ```
```
```if:csharp
this is only shown to C# users
```
~~~

You can also use `if-not`. Multiple languages can be targetted. The contents within the code block are considered markdown.

### Blockquotes

At some point you need to refer to something written by someone else. At this point you should use blockquotes! A blockquote is initialized with a <kbd>></kbd> with a whitespace in front of your text. It will be shown like inlined text. You've already seen blockquotes. This page is using them a lot! Write them like this:

> \> Some blockquote

> Note: There has to be a whitespace between the`>` and your text.

***
# For Warriors

If you want to link a user to this page, feel free to use the following snippets:

`@---: To increase the readability of comments or descriptions, see [this page in the github wiki](https://github.com/Codewars/codewars.com/wiki/Markdown-Formatting).`

*For more information you may visit these official pages:*

* [Markdown Basics](https://help.github.com/articles/markdown-basics/)
* [GitHub Flavoured Mardown](https://help.github.com/articles/github-flavored-markdown/)


