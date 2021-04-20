---
title: CommonLisp
sidebar_label: Overview
slug: /languages/commonlisp
---


## Versions

SBCL 2.0.9

## Test Frameworks

[rove](https://github.com/fukamachi/rove)

### Example

```lisp
(in-package #:cl-user)
(defpackage #:challenge/solution
  (:use #:cl)
  (:export #:add))
(in-package #:challenge/solution)

(defun add (a b) (+ a b))
```
```lisp
(in-package #:cl-user)
(defpackage #:challenge/tests/solution
  (:use #:cl
        #:rove
        #:challenge/solution))
(in-package #:challenge/tests/solution)
; Solution can be imported from `challenge/solution`.
; Optional preloaded package (`challenge/preloaded`) can be provided by kata authors.

; Write tests with Rove (https://github.com/fukamachi/rove).
; The use of `testing` is recommended for better output on Codewars.
(deftest test-solution
  (testing "add"
    (ok (= (add 1 1) 2))))
```

## Timeout

12 seconds

## Packages

None

## Services

None

## Language ID

`commonlisp`
