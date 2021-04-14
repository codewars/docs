---
title: PureScript
sidebar_label: Overview
---


### Status

Beta

### Versions

[0.12.x](https://github.com/purescript/purescript/releases/tag/v0.12.2)

### Test Frameworks

[spec](https://purescript-spec.github.io/purescript-spec)

#### Example

The name of the solution module can be arbitrary. Extra module can be provided in preloaded code.
```purescript
module Example where

import Prelude

add' :: Int -> Int -> Int
add' x y = x + y
```

The name of the test module **must** end with `Spec`.
```purescript
module ExampleSpec where

import Prelude
import Test.Spec (Spec, describe, it)
import Test.Spec.Assertions (shouldEqual)

import Example (add')

spec :: Spec Unit
spec =
  describe "Example" do
    describe "add'" do
      it "returns sum" do
        (add' 1 1) `shouldEqual` 2
```
QuickCheck is supported.
```purescript
module QuickCheckExampleSpec where

import Prelude
import Test.QuickCheck ((===))
import Test.Spec (Spec, describe, it)
import Test.Spec.QuickCheck (quickCheck)

spec :: Spec Unit
spec =
  describe "QuickCheck" do
    it "works" $
      quickCheck \n -> (n * 2 / 2) === n
```

### Timeout

12 seconds

### Packages

- `prelude`
- `console`
- `debug`
- `effect`
- `bigints`
- `rationals`
- `profunctor-lenses`
- `spec`
  - `spec-discovery`
  - `spec-quickcheck`

Packages are managed with [`psc-package`](https://github.com/purescript/psc-package) using package set [`psc-0.12.2-20190119`](https://github.com/purescript/package-sets/tree/psc-0.12.2-20190119). See [`packages.json`](https://github.com/purescript/package-sets/blob/psc-0.12.2-20190119/packages.json) for versions.

Feel free to [open issues](https://github.com/Codewars/codewars-runner-cli/issues/new) for additional packages.

### Services

None

### Language ID

`purescript`
