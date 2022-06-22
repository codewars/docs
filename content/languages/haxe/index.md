---
title: Haxe
description: Haxe on Codewars
slug: /languages/haxe
tags: [haxe]
---


## Status
Beta

## Versions

4.0

## Test Frameworks

[utest](https://github.com/haxe-utest/utest)

### Example

`src/Solution.hx`
```haxe
class Example {
  public static function add(a:Int, b:Int):Int {
    return a + b;
  }
}
```

`tests/SolutionTest.hx`
```haxe
import utest.Assert;
import Solution;

class SolutionTest extends utest.Test {
  function testExample() {
    Assert.equals(2, Example.add(1, 1));
  }
}
```
The name of the test class must be `SolutionTest`.

The optional preloaded code is a separate module (`src/Preloaded.hx`) that you can import.

## Timeout

12 seconds

## Packages

None

## Services

None

## Language ID

`haxe`
