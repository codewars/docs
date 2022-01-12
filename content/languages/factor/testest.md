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

  Starts a new test group, taking a string off the stack as the title of the block. Terminated with the `}#` word.

#### `<{ ...inputs -> ...expected }>`

  Creates a unit test, by executing the values in `...inputs`, then executing the values in `...expected` and comparing the results. If these results match then the test is passed, otherwise it is failed.

#### `test-passed.`

  `test-passed.` is a symbol which is bound to a quotation with stack effect `( -- )`. When a unit test passes, this quotation will be called. This can be used to create [custom result messages](/languages/factor/authoring#custom-result-messages).

#### `test-failed.`

`test-passed.` is a symbol which is bound to a quotation with stack effect `( assert-sequence -- )`. When a unit test fails, the values on the left and right side of the test will be collected into sequences, and stored in tuple under slots `got` and `expected` respectively. This tuple will be pushed onto the stack, and then this quotation will be called. This can be used to create [custom result messages](/languages/factor/authoring#custom-result-messages).

## Acknowledgements

`testest` was authored by [@nomennescio](https://github.com/nomennescio).

[test-framework-repo]: https://github.com/codewars/testest


<!--
TODO: Finish this reference
TODO: Add tutorial and link to it
TODO: Add any recipes and link to them
-->
