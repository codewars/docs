---
kind: reference
sidebar: "language:c"
prev: /languages/c/
languages: [c]
tags:
  - testing
---

# Criterion

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
  cr_assert_eq(expected, add(a, a), "add(%d, %d) == %d", a, b, expected);
}
```

<!--
TODO: Finish this reference
TODO: Add tutorial and link to it
TODO: Add any recipes and link to them
-->
