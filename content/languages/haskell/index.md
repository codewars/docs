---
title: Haskell
description: Haskell on Codewars
slug: /languages/haskell
tags: [haskell]
---


## Versions

- GHC 8.8.4 ([LTS Haskell 16.25](https://www.stackage.org/lts-16.25))

## Test Frameworks

[Hspec](http://hspec.github.io/)

```haskell
module ExampleSpec where

import Test.Hspec
import Example

spec :: Spec
spec = do
    describe "add" $ do
        it "adds Nums" $ do
            (add 1 1) `shouldBe` (2 :: Integer)

-- Optional
main = hspec spec
```

The test module's name **must end with `Spec`**. `Spec` by itself is not allowed.
Examples: `ExampleSpec`, `Example.ExampleSpec` are allowed while `Spec`, `Example.Spec`, `ExampleTest`, `Example.KataTest` are not.

The common convention is: If the solution's module name is e.g. `YourKata.SomeTask`, **just add `Spec` to the end without a dot**, e.g. `YourKata.SomeTaskSpec`.

## Timeout

12 seconds

## Packages

### GHC 8.8.4

```yaml
# From package.yaml
# See https://www.stackage.org/lts-16.25 for versions
dependencies:
- base >= 4.7 && < 5
- attoparsec
- haskell-src-exts
- hspec
- hspec-attoparsec
- hspec-codewars # https://github.com/codewars/hspec-codewars
- hspec-contrib
- hspec-formatters-codewars # https://github.com/codewars/hspec-formatters-codewars
- hspec-megaparsec
- HUnit-approx
- lens
- megaparsec
- mtl
- parsec
- persistent
- persistent-sqlite
- persistent-template
- QuickCheck
- random
- regex-pcre
- regex-posix
- regex-tdfa
- split
- text
- transformers
- vector
```

## Services

None

## Language ID

`haskell`
