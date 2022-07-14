---
kind: reference
sidebar: "language:r"
prev: /languages/r/
languages: [r]
tags:
  - testing
---

# testthat

## Basic Setup

### Solution Code

```r
add <- function(a, b) {
  a + b
}
```

### Test Fixture

```r
context("add")

test_that("should add numbers", {
  expect_equal(add(1, 2), 3)
})
```

## Using Preloaded Code

### Preloaded

```r
f <- function(a, b) { a + b }
```

### Solution Code

```r
source("setup.R")
add <- f
```

### Test Fixture

```r
context("add")

test_that("addition using preloaded works", {
  expect_equal(add(1, 1), 2)
})
```

<!--
TODO: Finish this reference
TODO: Add tutorial and link to it
TODO: Add any recipes and link to them
-->
