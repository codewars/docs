---
title: Reason
description: Reason on Codewars
slug: /languages/reason
tags: [reason]
---


## Status

Beta

## Versions

3.3

## Test Frameworks

Jest ([bs-jest](https://github.com/glennsl/bs-jest))

### Example

```ocaml
let add = (a, b) => a + b;
```
```ocaml
open Jest;

describe("add", () => {
  open Expect;

  test("1 + 1", () =>
    expect(Solution.add(1, 1)) |> toBe(2));
});
```

Solution is always put in the `Solution` module. Optional preloaded code can be provided (`Preloaded` module).

## Timeout

12 seconds

## Packages

None

## Services

None

## Language ID

`reason`
