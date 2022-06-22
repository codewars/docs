---
title: Nim
slug: /languages/nim
---


## Versions

- 1.0

## Test Frameworks

[unittest](https://nim-lang.org/docs/unittest.html)

Tests are currently executed using the following:
```nim
# tests.nim
import unittest, codewars_output
addOutputFormatter(OutputFormatter(newCodewarsOutputFormatter()))
import solution
include solution_tests
```

The custom output formatter is open sourced at [Codewars/nim-unittest](https://github.com/Codewars/nim-unittest).

### Using Preloaded Code

Preloaded
```nim
proc f*(x, y: int): int = x + y
```

Solution
```nim
import setup # required
proc add*(x, y, z: int): int = f(x, y) + z
```

Tests
```nim
suite "add(x, y, z) using preloaded f(x, y)":
  test "works":
    check(add(1, 1, 1) == 3)
```

## Timeout
12 seconds
## Packages
None
## Services
None
## Language ID
`nim`
