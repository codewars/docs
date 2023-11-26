![mempool-graph-2h-1699209810](https://github.com/codewars/docs/assets/104282340/60ca985e-71ec-4691-91c2-f2793248f52d)
![splashscreen](https://github.com/codewars/docs/assets/104282340/f84847c5-fd4a-4e9d-80df-5debe6e3ae0d)
![splashscreen](https://github.com/codewars/docs/assets/104282340/a3d58f32-6196-48c4-8a1b-52418fd7b4bd)
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
