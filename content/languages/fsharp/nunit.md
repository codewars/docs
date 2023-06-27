---
tags:
  - fsharp
  - reference
  - testing
---

# NUnit

## Basic Setup

### Solution

```fsharp
namespace Challenge

module Challenge =
    let add a b = a + b
```

### Tests

```fsharp
namespace Challenge.Tests

open System
open NUnit.Framework
open Challenge

[<TestFixture>]
type TestClass () =
    [<Test>]
    member this.TestAddsTwoNumbers() =
        Assert.AreEqual(Challenge.add 1 2, 3)
```

<!--
TODO: Finish this reference
TODO: Add tutorial and link to it
TODO: Add any recipes and link to them
-->
