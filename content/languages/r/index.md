---
title: R
sidebar_label: Overview
slug: /languages/r
---


## Versions
3.4.1

## Test Frameworks
[testthat](https://github.com/hadley/testthat)

### Using Preloaded Code

Preloaded
```r
f <- function(a, b) { a + b }
```

Solution
```r
source("setup.R")
add <- f
```

Tests
```r
test_that("addition using preloaded works", {
  expect_equal(add(1, 1), 2)
})
```

## Timeout

12 seconds

## Packages

Packages in the [tidyverse](https://www.tidyverse.org/) are installed (v1.2.1).

Note that some packages requires `suppressPackageStartupMessages` or `warn.conflicts=FALSE` to avoid warnings printed to `stderr` causing failure (Codewars' limitation).

Example:
```r
suppressPackageStartupMessages(
  library(dplyr)
)
# or
library(dplyr, warn.conflicts=FALSE)
```

For `ggplot2`, use SVGs or data URIs to show the image. Specify `width` and `height` when calling `ggsave` to avoid message written to `stderr`.

Example:
```r
library(ggplot2)
# example plot
p <- ggplot(mpg, aes(displ, hwy, colour = class)) + 
  geom_point()

# SVG
svgf <- "/workspace/p.svg"
ggsave(plot=p, filename=svgf, width=7, height=7)
cat(sprintf('\n<LOG::Plot>%s\n', paste(readLines(svgf, encoding="UTF-8"), collapse="")))

# PNG
pngf <- "/workspace/p.png"
ggsave(plot=p, filename=pngf, width=7, height=7)
cat(sprintf('\n<LOG::Plot><img src="data:image/png;base64,%s" width="100%%">\n', base64enc::base64encode(pngf)))
```

## Services

None

## Language ID

`r`
