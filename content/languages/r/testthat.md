---
tags:
  - r
  - reference
  - testing
---

# testthat

## Basic Setup

### Solution

```r
add <- function(a, b) {
  a + b
}
```

### Tests

```r
context("add")

test_that("should add numbers", {
  expect_equal(add(1, 2), 3)
})
```

## Using Preloaded

### Preloaded

```r
f <- function(a, b) { a + b }
```

### Solution

```r
source("setup.R")
add <- f
```

### Tests

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
