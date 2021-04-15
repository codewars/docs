---
title: Racket
sidebar_label: Overview
---


### Versions

[v7.2](https://blog.racket-lang.org/2019/01/racket-v7-2.html)

### Test Frameworks

[RackUnit](https://docs.racket-lang.org/rackunit/)

#### Example

```racket
#lang racket
(provide add)
(define (add a b) (+ a b))
```
```racket
#lang racket
(require "solution.rkt")
(require rackunit
         codewars/rackunit)

(run-tests
  (test-suite
   "example"
   (test-case
    "add"
    (check-equal? (add 1 1) 2))))
```
Import `"solution.rkt"`, `rackunit` and [`codewars/rack-unit`](https://github.com/Codewars/codewars-rackunit).
Optional preloaded code will be written to `"preloaded.rkt"`.

### Timeout

12 seconds

### Packages

None

### Services

None

### Language ID

`racket`
