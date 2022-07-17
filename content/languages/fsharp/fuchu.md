---
tags:
  - fsharp
  - reference
  - testing
---

# Fuchu

## Basic Setup

### Solution

```fsharp
let add a b = a + b
```

### Tests

```fsharp
module Tests = begin
    open Fuchu
    let suite =
        testList "Add" [
            testCase "Adds two numbers" <|
                fun _ ->
                    Assert.Equal("add(1, 1) == 2", 2, add 1 1)
        ]
end
```

<!--
TODO: Finish this reference
TODO: Add tutorial and link to it
TODO: Add any recipes and link to them
-->
