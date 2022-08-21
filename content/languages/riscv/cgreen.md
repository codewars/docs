---
tags:
  - riscv
  - reference
  - testing
---

# Cgreen

Unit tests for RISC-V are written in C with [Cgreen](https://cgreen-devs.github.io/cgreen/) while the solution file is in assembly.

## Basic Setup

### Solution

```asm
.globl add
add:
  addw a0, a0, a1
  ret
```

### Tests

```c
#include <cgreen/cgreen.h>

int add(int, int);

Describe(Add);
BeforeEach(Add) {}
AfterEach(Add) {}

Ensure(Add, should_add_integers) {
  assert_that(add(1, 1), is_equal_to(2));
}

TestSuite *solution_tests() {
  TestSuite *suite = create_test_suite();
  add_test_with_context(suite, Add, should_add_integers);
  return suite;
}
```
