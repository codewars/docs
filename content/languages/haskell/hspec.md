---
tags:
  - haskell
  - reference
  - testing
---

# HSpec

## Basic Setup

### Solution

```haskell
module Example where

add :: Num a => a -> a -> a
add = (+)
```

### Tests

```haskell
module ExampleSpec where -- test module name MUST end with Spec
import Test.Hspec
import Example

spec :: Spec -- `spec` is required
spec = do
    describe "Example" $ do
        it "adds two numbers" $ do
            (add 1 1) `shouldBe` (2 :: Integer)

main :: IO () -- `main` is optional
main = hspec spec
```

The test module's name must end with `Spec`. `Spec` by itself is not allowed.
Examples: `ExampleSpec`, `Example.ExampleSpec` are allowed while `Spec`, `Example.Spec`, `ExampleTest`, `Example.KataTest` are not.

The common convention is: If the solution's module name is e.g. `YourKata.SomeTask`, just add `Spec` to the end without a dot, e.g. `YourKata.SomeTaskSpec`.

