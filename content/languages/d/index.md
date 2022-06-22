---
title: D
slug: /languages/d
---


## Versions

- 2.098

## Test Frameworks

Uses builtin `unittest` blocks with UDA to name them.

### Example

Solution:
```d
module solution;

export int add(int a, int b) {
    return a + b;
}
```

Tests:
```d
module solution_test;

import solution : add;
// fluent asserts is supported
version(unittest) import fluent.asserts;

@("named test case")
unittest {
    add(1, 1).should.equal(2).because("1 + 1 == 2");
    assert(add(1, 1) == 2);
}
```

The optional preloaded code is a separate module.

## Timeout

12 seconds

## Packages

## Services

None

## Language ID

`d`
