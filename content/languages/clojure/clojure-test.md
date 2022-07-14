---
title: Clojure Test
tags: [clojure]
---

# Clojure Test

## Basic Setup

### Solution Code

```clojure
(ns clojure.adder)

(defn add [a b]
  (+ a b))
```

### Test Fixture

```clojure
(ns clojure.adder-test
  (:require [clojure.test :refer :all]
            [clojure.adder :refer :all]))

(deftest Add
  (is (= (add 1 2) 3)))
```
