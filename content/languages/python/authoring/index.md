---
kind: recipe
languages: [python]
sidebar: "language:python"
---

# Creating Python Kata

This article is meant as help for kata authors and translators who would like to create new content in Python programming language. It attempts to explain how to create and organize things in a way conforming to [authoring guidelines](/authoring/guidelines/), what are the most common pitfalls, and how to avoid them.

This article is not a standalone tutorial on creating a kata or translation. It's meant to be a complementary, Python-specific part to more general set of HOWTOs and guidelines related to [content authoring](/authoring/). 


## General info

Any help related to Python in context of Codewars can be found on [Python language reference](/languages/python/) page.


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


## Tasks and Requirements

Some concepts available in Python do not translate well into other languages, and should be avoided if possible:
- Mixed return types (_"Return result, or string 'Error' if no result can be found."_).

Some kata should not be translated into Python, because it can be difficult to keep their initial idea:
- Python standard library is very rich and has many utilities available  (for example, `itertools`, combinatorics functions, `numpy`), so some requirements become very easy,
- Python supports big integers natively, so kata which rely on implementation of arbitrary precision integer arithmetic become trivial in Python.


## Coding

Python code should stick to generally recognized Python conventions, with [PEP-8](https://www.python.org/dev/peps/pep-0008/) being most widely accepted.


## Tests

### Testing framework

Python kata use [Codewars Python testing framework](/languages/python/codewars-test/) to implement and execute tests. You should read its reference page to find out how to use `describe` and `it` blocks for [organization and grouping](/languages/python/codewars-test/#grouping-tests), what are available [assertions](/languages/python/codewars-test/#assertions), etc. 

You should notice that Python testing framework produces one test output entry per assertion, so test output panel can get very noisy.

### Random utilities

Python has a rich [random library](https://docs.python.org/3.8/library/random.html), which can be used to easily generate random integers in requested ranges, generate floating point numbers, or samplie and shuffle collections. Functions available there allow for very convenient construction of various random input generators.

### Input mutation



### Calling assertions



- Mutation of input
- code in assertion message and stacktrace
- Accessibility of ref solution
- location of solution file
- How to provide test framework locally?

## Blocking modules

## Maintenance

- fix descriptions
- add random tests
- organize test suites with `describe`/`it`
- add random generators