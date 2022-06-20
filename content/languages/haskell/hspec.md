---
kind: reference
sidebar: "language:haskell"
prev: /languages/haskell/
languages: [haskell]
tags:
  - testing
---

# HSpec

## Basic Setup

### Solution Code

```haskell
module Example where

add :: Num a => a -> a -> a
add = (+)
```

### Test Fixture

```haskell
module ExampleSpec where -- test module name MUST end with Spec
import Test.Hspec
import Example

spec :: Spec -- `spec` is required
spec = do
  describe "Example" $ do
    it "add a b" $ do
      (add 1 1) `shouldBe` (2 :: Integer)

main :: IO () -- `main` is optional
main = hspec spec
```
