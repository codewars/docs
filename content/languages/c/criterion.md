---
title: Criterion
kind: reference
---

The Criterion testing framework is available in its [Github repository](https://github.com/Snaipe/Criterion). Reference for the Criterion API can be found here: [https://criterion.readthedocs.io/en/master/intro.html](https://criterion.readthedocs.io/en/master/intro.html).

## Basic Setup

```c
int add(int a, int b) {
  return a + b;
}
```

```c
#include <criterion/criterion.h>

int add(int, int);

Test(add_test, should_add_integers, .description = "should add integers") {
  int a = 1;
  int b = 1;
  int expected = 2;
  cr_assert_eq(expected, add(a, b), "add(%d, %d) == %d", a, b, expected);
}
```

## Assertions

_TBD_

[Assertions reference](https://criterion.readthedocs.io/en/master/assert.html) can be found in the Criterion documentation.

- assert vs except
- messages

<!--
TODO: Finish this reference
TODO: Add tutorial and link to it
TODO: Add any recipes and link to them
-->
