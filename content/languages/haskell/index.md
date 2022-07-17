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
