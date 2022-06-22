---
title: Racket
slug: /languages/racket
---


## Versions

- 8.1 [CS](https://docs.racket-lang.org/guide/performance.html#%28tech._c%29)
- 8.1 [BC](https://docs.racket-lang.org/guide/performance.html#%28tech._bc%29)

BC can be used when CS implementation have performance issues (e.g., bignums).

## Test Frameworks

[RackUnit](https://docs.racket-lang.org/rackunit/)

### Example

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

## Timeout

12 seconds

## Packages

None

## Services

None

## Language ID

`racket`
