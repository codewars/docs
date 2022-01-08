---
kind: reference
sidebar: "language:factor"
prev: /languages/factor/
languages: [factor]
tags:
  - testing
---

# testest

To run Factor tests, Codewars currently uses a custom test vocabulary, published and available in [this GitHub repository][test-framework-repo].

## Basic Usage

```factor
USING: solution-vocabulary tools.testest ;
IN: solution-vocabulary.tests

: run-tests ( -- )
  "Example Tests" describe#{
    "Example test case" it#{
      <{ 1 1 add -> 2 }>
    }#

    "Another test case" it#{
     <{ 3 double -> 6 }>
     <{ 0 double -> 0 }>
    }#
  }#

MAIN: run-tests
```

## Words and Syntax

#### `describe#{`

  Starts a new block of tests, taking a string off the stack as the title of the block. Terminated with the `}#` word.

#### `it#{`

  Starts a new assertion block, taking a string off the stack as the title of the block. Terminated with the `}#` word.

#### `<{ ...inputs -> ...expected }>`

  Creates an assertion, by seqentially executing the values in `...inputs` and comparing the resulting stack with `...expected`.

## Acknowledgements

`testest` was authored by [@nomennescio](https://github.com/nomennescio).

[test-framework-repo]: https://github.com/codewars/testest


<!--
TODO: Finish this reference
TODO: Add tutorial and link to it
TODO: Add any recipes and link to them
-->
