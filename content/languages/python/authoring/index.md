# Creating Python Kata

This article is meant as help for kata authors and translators who would like to create new content in Python programming language. It attempts to explain how to create and organize things in a way conforming to [authoring guidelines][], what are the most common pitfalls, and how to avoid them.


## General info

Any help related to Python in context of Codewars can be found on [Python language reference](/languages/python/).


## Description

Python code blocks can be inserted with following Markdown:

~~~
```python
...your code here...
```
~~~

Python-specific paragraphs can be inserted with following Markdown:

```
~~~if:python
...text visible only for Python description...
~~~

~~~if-not:python
...text not visible in Python description...
~~~
```

For details, see reference pages on [sequential code blocks](/references/markdown/extensions/#sequential-code-blocks) and [language conditional rendering](/references/markdown/extensions/#conditional-rendering).


## Requirements

Some concepts available in Python do not translate well into other languages, and should be avoided if possible:
- Mixed return types (_"Return result, or string 'Error' if no result can be found."_),

Some kata should not be translated into Python, because it can be difficult to keep their initial idea:
- Python standard library is very rich and has many utilities available, so some requirements become very easy (`itertools`, combinatorics, `numpy`),
- Python supports big integers natively, so kata which rely on implementation of arbitrary precision integer arithmetic become trivial in Python,
- It's very difficult to block things in Python, because most of internals can be easily overriden or reconfigured

## Coding

- Stick to PEP

## Tests

- Python Codewars testing framework
  - entry per `it` or per `assert`?
- Mutation of input
- code in assertion message and stacktrace
- Random utilities
- test case generators
- Accessibility of ref solution
- location of solution file
- How to provide test framework locally?

## Blocking modules

## Maintenance

- fix descriptions
- add random tests
- organize test suites with `describe`/`it`
- add random generators