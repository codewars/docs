---
title: Idris
slug: /languages/idris
---


## Status

Beta

## Versions

1.3.x

## Test Frameworks

[specdris](https://github.com/pheymann/specdris)

### Example

```idris
module Solution

%access export
%default total

add : Nat -> Nat -> Nat
add a b = a + b
```

```idris
module SolutionSpec

import Specdris.Spec
import Solution

%access export
%default total

specSuite : IO ()
specSuite = spec $ do
  describe "add" $ do
    it "adds two natural numbers" $ do
      (1 `add` 1) `shouldBe` 2
```

The test needs to export `specSuite : IO ()` like in [the official example](https://github.com/pheymann/specdris/blob/7d7721cb16f71a389145ce0f41562d889ae648a7/examples/SpecExample.idr).

The names of the module can be anything and the optional preloaded code will be just extra module.

## Timeout

12 seconds

## Packages

None

## Services

None

## Language ID

`idris`
